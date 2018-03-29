import React from 'react';
import {shallow, mount} from 'enzyme';

import {Pictures} from './hot';
import {fetchPictures} from '../../actions/pictures';

describe('<Pictures />', () => {
  let seedLists = [];
  beforeAll(() => {
    for (let i = 0; i < 10; i++) {
      seedLists.push({
        "title": "Wall-E",
        "src": "http://localhost:8080/uploads/wall-e.jpeg",
        "alt": "Picture of Wall-E",
        "likes": 0,
        "username": "cyango",
        "comments": [ 
          {
            "comment": "Hello",
            "username": "cyango"
          }, 
          {
            "comment": "Goodbye",
            "username": "cyango"
          }
        ]
      });
    }
  });

  it('Renders without crashing', () => {
    const dispatch = jest.fn();
    shallow(<Pictures pictures={seedLists} dispatch={dispatch}/>);
  });

  it('Dispatches fetchPictures from pictures', () => {
    const dispatch = jest.fn();
    const wrapper = shallow(<Pictures pictures={seedLists} dispatch={dispatch}/>);
    const instance = wrapper.instance();
    instance.componentDidMount();
    expect(dispatch).toHaveBeenCalledWith(fetchPictures());
  });
});