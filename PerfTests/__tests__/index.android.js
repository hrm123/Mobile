import 'react-native';
import React from 'react';
import Index from '../index.android.js';
import { mount, render, shallow } from 'enzyme'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <Index />
  );
});
describe('perf test', () => {
  beforeEach(() => {
      let jsdom = require('jsdom').jsdom
      global.document = jsdom('')
      global.window = document.defaultView
      global.mount = mount
      global.render = render
      global.shallow = shallow
      Object.keys(document.defaultView).forEach((property) => {
        if (typeof global[property] === 'undefined') {
          global[property] = document.defaultView[property]
        }
      })
    })
  
  it('renders within previous best time', () => {
    let previousBestTime = 33;
    var start = new Date().getTime();
    wrapper = mount(<Index />);
    var end = new Date().getTime();
    expect(end-start).toBeLessThanOrEqual(previousBestTime + 3);
  })

});
