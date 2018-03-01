import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import LocalFeed from './../LocalFeed';

describe('Local Feed tab tests', () => {
    let tree;
    let wrapper;
    let mockNavigation;

    beforeEach(() => {
        mockNavigation = {
            navigate: jest.fn((route) => { }),
        };

        wrapper = shallow(<LocalFeed navigation={mockNavigation} />);

        tree = renderer.create(
          <LocalFeed navigation={mockNavigation} />
        );
    });

    it('renders correctly', () => {
        expect(tree).toMatchSnapshot();
    });

    it('removes backhandler correctly', () => {
        expect(tree.getInstance().componentWillUnmount()).toBe(undefined);
    });

    it('navigates correctly', () => {
        expect(tree.getInstance().createMotionScreen()).toBe(undefined);
    });
});
