import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import BookmarksFeed from './../BookmarksFeed';

describe('Bookmarks Feed tab tests', () => {
    let tree;

    beforeEach(() => {
        tree = renderer.create(
          <BookmarksFeed />
        );
    });

    it('renders correctly', () => {
        expect(tree).toMatchSnapshot();
    });

    it('removes backhandler correctly', () => {
        expect(tree.getInstance().componentWillUnmount()).toBe(undefined);
    });
});
