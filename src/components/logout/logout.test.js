import React from 'react';
import {shallow, mount} from 'enzyme';

import {Logout} from './index';
import {clearAuth} from '../../actions/auth';

describe('<Logout />', () => {
    it('Renders without crashing', () => {
      shallow(<Logout />);
    });

    it('Dispatches clearAuth from auth', () => {
      const dispatch = jest.fn();
      const wrapper = shallow(<Logout dispatch={dispatch}/>);
      const instance = wrapper.instance();
      instance.logOut();
      expect(dispatch).toHaveBeenCalledWith(clearAuth());
    });

    it('Logs user out when logout button is clicked', () => {
      const dispatch = jest.fn();
      const wrapper = shallow(<Logout loggedIn="true" dispatch={dispatch} toggleNav={() => {return true;}}/>);
      const logoutButton = wrapper.find('#logout');
      logoutButton.simulate('click');
      expect(dispatch).toHaveBeenCalledWith(clearAuth());
    });
});