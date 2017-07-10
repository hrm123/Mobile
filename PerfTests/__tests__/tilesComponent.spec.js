import {mount} from 'enzyme';
import Tile from '../src/components/tileComponent';
import React from 'react';

describe('Tiles component tests', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(<Tile />);
    });

    it('should render without errors', () => {
        expect(wrapper).toBeTruthy();
    });

});