import React from 'react';
import {shallow, mount} from 'enzyme';

import {Upload} from './index';

describe('<Upload />', () => {
    it('Renders without crashing', () => {
      shallow(<Upload />);
    });
});