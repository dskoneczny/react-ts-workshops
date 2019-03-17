import * as React from 'react';
import SingleRoom from '../index';
import {shallow, mount} from 'enzyme';
import toJson from 'enzyme-to-json';

describe('Single room component test', () => {
  it('should render single room component', () => {
    const props = {
      addLike: jest.fn(),
      deleteRoom: jest.fn(),
      id: 12,
      likes: 0,
      name: 'example room',
    };
    const result = shallow(<SingleRoom {...props}/>);
    console.log(toJson(result));
  });
  it('should render single room component', () => {
    const props = {
      addLike: jest.fn(),
      deleteRoom: jest.fn(),
      id: 12,
      likes: 0,
      name: 'example room',
    };
    const result = mount(<SingleRoom {...props}/>);
    console.log(toJson(result));
  });
});
