import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import { Input } from './Input';

// TODO: we need to consolidate on how we do testing for components.
// we are testing a lot of implementation details (ie: like which classes are rendered)

// describe('Input', () => {
//   let component: ShallowWrapper<Input>;

//   beforeEach(() => {
//     component = shallow<Input>(<Input />);
//   });

//   it('should match snapshot and styles for default props', () => {
//     expect(component).toMatchSnapshot();
//   });
// });
