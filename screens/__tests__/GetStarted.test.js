import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import GetStarted from './../GetStarted/GetStarted';

describe('GetStarted screen tests', () => {
    let wrapper;
    let mockNavigation;
    let tree;

    beforeEach(() => {
        global.fetch = jest.fn((props) => ({
            text: jest.fn(),
        }));

        mockNavigation = {
            navigate: jest.fn((route) => true),
        };

        tree = renderer.create(
          <GetStarted navigation={mockNavigation} />
        );

        wrapper = shallow(<GetStarted navigation={mockNavigation} />);
    });

    it('renders correctly', () => {
        expect(tree).toMatchSnapshot();
    });

    it('navigates correctly', () => {
        expect(tree.getInstance().startIntro()).toBe(undefined);
        expect(wrapper.find('PrimaryFlatButton').prop('onPress')()).toBe(undefined);
    });
});
