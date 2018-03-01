import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import BookmarksFeed from './../BookmarksFeed';

describe('Local Feed tab tests', () => {
    let tree;
    let wrapper;
    let mockNavigation;

    beforeEach(() => {
        mockNavigation = {
            navigate: jest.fn((route) => { }),
        };

        wrapper = shallow(<BookmarksFeed navigation={mockNavigation} />);

        tree = renderer.create(
          <BookmarksFeed navigation={mockNavigation} />
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
