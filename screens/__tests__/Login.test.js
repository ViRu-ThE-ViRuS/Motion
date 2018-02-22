import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import Login from './../Login/Login';

describe('Login screen tests', () => {
    let tree;
    let mockNavigation;
    let wrapper;

    beforeEach(() => {
        global.fetch = jest.fn((props) => ({
            text: jest.fn(),
        }));

        mockNavigation = {
            navigate: jest.fn((route) => { console.log(route); }),
        };

        wrapper = shallow(<Login navigation={mockNavigation} />);

        tree = renderer.create(
          <Login navigation={mockNavigation} />
          );
    });

    it('renders correctly', () => {
        expect(tree).toMatchSnapshot();
    });
});
