import React from 'react';
import {shallow, mount} from 'enzyme';

import {LandingPage} from './index';
import Description from './description';

describe('<LandingPage />', () => {
    it('Renders without crashing', () => {
      shallow(<LandingPage />);
      shallow(<Description />);
    });

    it('Renders everything in Description', () => {
      const wrapper = shallow(<Description />);
      expect(wrapper.find('.description').length).toEqual(1);
    });
});