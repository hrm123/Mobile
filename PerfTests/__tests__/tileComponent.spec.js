import React from 'react';
import { mount } from 'enzyme';
import Tile from '../src/components/tileComponent';

describe('Tiles component tests', () => {
  let wrapper;
  let tileTitle = "title1";

  beforeEach(() => {
    wrapper = mount(<Tile tileTitle={tileTitle} />);
  });

  it('should render without errors', () => {
    expect(wrapper).toBeTruthy();
  });

  if ('should render within previous best', () => {
    const previousBestTime = 10;
    const start = new Date().getTime();
    wrapper = mount(<Tile />);
    const end = new Date().getTime();
    expect(end - start).toBeLessThanOrEqual(previousBestTime + 3);
  });
});
