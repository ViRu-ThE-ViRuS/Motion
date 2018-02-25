import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import { FacebookLoginButton, GoogleLoginButton, EmailLoginButton } from './../LoginButton';

describe('LoginButton tests', () => {
  it('FacebookLoginButton renders correctly', () => {
    const tree = renderer.create(
      <FacebookLoginButton />
    );

    expect(tree).toMatchSnapshot();
  });

  it('GoogleLoginButton renders correctly', () => {
    const tree = renderer.create(
      <GoogleLoginButton />
    );

    expect(tree).toMatchSnapshot();
  });

  it('EmailLoginButton renders correctly', () => {
    const tree = renderer.create(
      <EmailLoginButton />
    );

    expect(tree).toMatchSnapshot();
  });
});
