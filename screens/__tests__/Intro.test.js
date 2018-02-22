import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import Intro from './../Intro/Intro';

describe('Intro screen tests', () => {
    let tree;
    let mockNavigation;
    let wrapper;

    beforeEach(() => {
        global.fetch = jest.fn((props) => ({
            text: jest.fn(),
        }));

        mockNavigation = {
            navigate: jest.fn((route) => true),
        };

        wrapper = shallow(<Intro navigation={mockNavigation} />);

        tree = renderer.create(
          <Intro navigation={mockNavigation} />
        );
    });

    it('renders correctly', () => {
        expect(tree).toMatchSnapshot();
    });

    it('navigates correctly', () => {
        expect(tree.getInstance().startLogin()).toBe(undefined);
        expect(wrapper.find('PrimaryFlatButton').prop('onPress')()).toBe(undefined);
    });
});
