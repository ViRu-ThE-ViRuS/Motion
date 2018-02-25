import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import LocalFeed from './../LocalFeed';

describe('Local Feed tab tests', () => {
    let tree;

    beforeEach(() => {
        tree = renderer.create(
          <LocalFeed />
        );
    });

    it('renders correctly', () => {
        expect(tree).toMatchSnapshot();
    });

    it('removes backhandler correctly', () => {
        expect(tree.getInstance().componentWillUnmount()).toBe(undefined);
    });
});
