import React from 'react';
import {shallow, mount} from 'enzyme';

import {Login} from './index';
import {LoginForm} from './login-form';

describe('<Login />', () => {
    it('Renders without crashing', () => {
      shallow(<Login />);
      // shallow(<LoginForm />);
    });

    it('Renders something', () => {
      // const wrapper = shallow(<LoginForm />);
      // console.log(wrapper);
    });
});