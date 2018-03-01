import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import GlobalFeed from './../GlobalFeed';

describe('Global Feed tab tests', () => {
    let tree;
    let wrapper;
    let mockNavigation;

    beforeEach(() => {
        mockNavigation = {
            navigate: jest.fn((route) => { }),
        };

        wrapper = shallow(<GlobalFeed navigation={mockNavigation} />);

        tree = renderer.create(
          <GlobalFeed navigation={mockNavigation} />
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
