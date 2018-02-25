import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import GlobalFeed from './../GlobalFeed';

describe('Global Feed tab tests', () => {
    let tree;

    beforeEach(() => {
        tree = renderer.create(
          <GlobalFeed />
        );
    });

    it('renders correctly', () => {
        expect(tree).toMatchSnapshot();
    });

    it('removes backhandler correctly', () => {
        expect(tree.getInstance().componentWillUnmount()).toBe(undefined);
    });
});
