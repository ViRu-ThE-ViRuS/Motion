import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import NavBarComponent from './../NavBarComponent';

describe('LoginButton tests', () => {
  it('FacebookLoginButton renders correctly', () => {
    const tree = renderer.create(
      <NavBarComponent />
    );

    expect(tree).toMatchSnapshot();
  });
});
