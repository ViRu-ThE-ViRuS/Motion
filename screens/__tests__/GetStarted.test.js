import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import GetStarted from './../GetStarted/GetStarted';

beforeEach(() => {
    global.fetch = jest.fn((props) => ({
        text: jest.fn(),
    }));
});

it('GetStarted screen renders correctly', () => {
    const mockNavigation = {
        navigate: jest.fn((route) => true),
    };

    const tree = renderer.create(
      <GetStarted navigation={mockNavigation} />
    );

    expect(tree).toMatchSnapshot();
    expect(tree.getInstance().startIntro()).toBe(undefined);
});
