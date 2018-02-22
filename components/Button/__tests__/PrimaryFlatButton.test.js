import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import PrimaryFlatButton from './../PrimaryFlatButton';

it('Primary flat button renders correctly', () => {
  const tree = renderer.create(
    <PrimaryFlatButton text="Get Started" />
  );

  expect(tree).toMatchSnapshot();
});
