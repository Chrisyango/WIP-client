import React from 'react';
import {shallow, mount} from 'enzyme';

import {User} from './index';

describe('<User />', () => {
    it('Renders without crashing', () => {
      shallow(<User />);
    });
});