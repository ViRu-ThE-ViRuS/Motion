import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import Intro from './../Intro/Intro';

beforeEach(() => {
    global.fetch = jest.fn((props) => ({
        text: jest.fn(),
    }));
});

it('Intro screen renders correctly', () => {
    const mockNavigation = {
        navigate: jest.fn((route) => true),
    };

    const tree = renderer.create(
      <Intro navigation={mockNavigation} />
    );

    expect(tree).toMatchSnapshot();
    expect(tree.getInstance().startLogin()).toBe(undefined);
});
