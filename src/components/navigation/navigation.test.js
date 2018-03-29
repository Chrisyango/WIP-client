import React from 'react';
import {shallow, mount} from 'enzyme';

import {Navigation} from './index';

describe('<Logout />', () => {
    it('Renders without crashing', () => {
      shallow(<Navigation />);
    });
});