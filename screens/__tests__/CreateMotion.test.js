import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import CreateMotion from './../CreateMotion/CreateMotion';

describe('Login screen tests', () => {
    let tree;
    let mockNavigation;
    let wrapper;

    beforeEach(() => {
        global.fetch = jest.fn((props) => ({
            text: jest.fn(),
        }));

        mockNavigation = {
            navigate: jest.fn((route) => { }),
        };

        wrapper = shallow(<CreateMotion navigation={mockNavigation} />);

        tree = renderer.create(
          <CreateMotion navigation={mockNavigation} />
          );
    });

    it('renders correctly', () => {
        expect(tree).toMatchSnapshot();
    });
});
