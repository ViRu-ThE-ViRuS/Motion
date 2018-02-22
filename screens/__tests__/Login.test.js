import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import Login from './../Login/Login';

beforeEach(() => {
    global.fetch = jest.fn((props) => ({
        text: jest.fn(),
    }));
});

it('Login screen renders correctly', () => {
    const mockNavigation = {
        navigate: jest.fn((route) => { console.log(route); }),
    };

    const tree = renderer.create(
      <Login navigation={mockNavigation} />
    );

    expect(tree).toMatchSnapshot();
});
