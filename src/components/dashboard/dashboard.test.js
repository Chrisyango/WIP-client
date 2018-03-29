import React from 'react';
import {shallow, mount} from 'enzyme';

import {Dashboard} from './index';

describe('<Dashboard />', () => {
    it('Renders without crashing', () => {
      shallow(<Dashboard />);
    });

    it('Initially renders buttons', () => {
      const wrapper = shallow(<Dashboard />)
      expect(wrapper.find('button').length).toEqual(4);
    });

    it('CurrentPage should switch to new when the newButton is clicked', () => {
      const wrapper = shallow(<Dashboard />);
      const newButton = wrapper.find('button').at(1);
      newButton.simulate('click');
      expect(wrapper.state('currentPage')).toEqual('new');
  });

    it('Changes button class when state changes', () => {
      const wrapper = shallow(<Dashboard />)
      wrapper.instance().currentPage('new');
      wrapper.update();
      const newButton = wrapper.find('button').at(1);
      expect(newButton.hasClass('currentButton')).toEqual(true);
    });
});