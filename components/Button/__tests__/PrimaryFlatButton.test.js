import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import PrimaryFlatButton from './../PrimaryFlatButton';

describe('PrimaryFlatButton tests', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <PrimaryFlatButton text="Get Started" />
    );

    expect(tree).toMatchSnapshot();
  });
});
