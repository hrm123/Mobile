import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { mount, render, shallow } from 'enzyme';

import PerfTests from '../index.android';

describe('perf test', () => {
  beforeEach(() => {
    const jsdom = require('jsdom').jsdom;
    global.document = jsdom('');
    global.window = document.defaultView;
    global.mount = mount;
    global.render = render;
    global.shallow = shallow;
    Object.keys(document.defaultView).forEach((property) => {
      if (typeof global[property] === 'undefined') {
        global[property] = document.defaultView[property];
      }
    });
  });

  it('renders within previous best time', () => {
    const previousBestTime = 33;
    const start = new Date().getTime();
    mount(<PerfTests />);
    const end = new Date().getTime();
    expect(end - start).toBeLessThanOrEqual(previousBestTime + 3);
  });
});
