import 'react-native';
import React from 'react';

import { FacebookLoginButton, GoogleLoginButton, EmailLoginButton } from './../LoginButton';

import renderer from 'react-test-renderer';

it('Facebook login button renders correctly', () => {
    const tree = renderer.create(
        <FacebookLoginButton />
    );
    expect(tree).toMatchSnapshot();
});

it('Google login button renders correctly', () => {
    const tree = renderer.create(
        <GoogleLoginButton />
    );
    expect(tree).toMatchSnapshot();
});

it('Email login button renders correctly', () => {
    const tree = renderer.create(
        <EmailLoginButton />
    );
    expect(tree).toMatchSnapshot();
});
