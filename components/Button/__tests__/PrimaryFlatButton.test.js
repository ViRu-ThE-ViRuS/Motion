import 'react-native';
import React from 'react';

import PrimaryFlatButton from './../PrimaryFlatButton';

import renderer from 'react-test-renderer';

it('Primary flat button renders correctly', () => {
    const tree = renderer.create(
        <PrimaryFlatButton text="Get Started" />
    );

    expect(tree).toMatchSnapshot();
});
