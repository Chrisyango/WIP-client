import React from 'react';
import {shallow, mount} from 'enzyme';

import {Registration} from './index';
import RegistrationForm from './registration-form';
import AccountFields from './accountfields';

describe('<Registration />', () => {
  const userValues = {
    fullname: 'Billy Bob',
    email: 'bbob@test.com',
    username: 'bbob'
  }
    it('Renders without crashing', () => {
      shallow(<Registration />);
      shallow(<RegistrationForm />);
    });

    it('Renders fullname', () => {
      const fullname = 'Billy Bob';
      const wrapper = shallow(<Confirmation userValues={userValues} />);
      expect(wrapper.contains(<li><b>Name:</b> {fullname}</li>)).toEqual(true);
    });

});