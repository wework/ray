import Enzyme, { configure, mount, ReactWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { Avatar } from './Avatar';

configure({ adapter: new Adapter() });

describe('Avatar', () => {
  let component: ReactWrapper<any>;
  const fauxCallback = jest.fn();

  beforeEach(() => {
    component = mount(<Avatar />);
  });

  test('should match snapshot and styles', () => {
    expect(mount(<Avatar />)).toMatchSnapshot();
  });

  describe('Default Properties', () => {
    it('has default properties "add" that can be set', () => {
      expect(component.props().add).toEqual(false);
    });
    it('has default properties "edit" that can be set', () => {
      expect(component.props().edit).toEqual(false);
    });
    it('has default properties "size" that can be set', () => {
      expect(component.props().size).toEqual('medium');
    });
    it('has no defaulted image', () => {
      expect(component.props().image).toEqual(undefined);
      expect(
        component
          .find('img')
          .at(0)
          .exists()
      ).toEqual(false);
    });
    it('has no default "add/edit" icon', () => {
      expect(component.props().add).toEqual(false);
      expect(component.props().edit).toEqual(false);
      expect(
        component
          .find('.lucia-avatar--action')
          .at(0)
          .exists()
      ).toEqual(false);
    });
    it('has initial of name when specified', () => {
      component.setProps({
        name: 'Patrick Stewart'
      });
      expect(component.find('img').exists()).toEqual(false);
      expect(
        component
          .find('span')
          .at(0)
          .contains('P')
      ).toEqual(true);
    });
    it('defaults to display image avatar if both image and name is specified', () => {
      component.setProps({
        image:
          'https://pbs.twimg.com/profile_images/624249118114881536/qxn_I_oR_400x400.jpg',
        name: 'Patrick Stewart'
      });
      expect(
        component
          .find('span')
          .at(0)
          .contains('P')
      ).toEqual(false);
      expect(component.find('img').exists()).toEqual(true);
    });
  });

  describe('Classes', () => {
    it('contains DEFAULT class', () => {
      expect(
        component
          .find('.lucia-avatar')
          .at(0)
          .exists()
      ).toEqual(true);
    });
    it('contains nested "add" icon (ONLY for size="large")', () => {
      expect(
        component
          .find('.lucia-avatar--action')
          .at(0)
          .exists()
      ).toEqual(false);
      component.setProps({ add: true });
      expect(
        component
          .find('.lucia-avatar--action')
          .at(0)
          .exists()
      ).toEqual(false);
      component.setProps({ add: true, size: 'small' });
      expect(
        component
          .find('.lucia-avatar--action')
          .at(0)
          .exists()
      ).toEqual(false);
      component.setProps({ add: true, size: 'large' });
      expect(
        component
          .find('.lucia-avatar--action')
          .at(0)
          .exists()
      ).toEqual(true);
    });
    it('contains nested image', () => {
      expect(
        component
          .find('.lucia-avatar--action')
          .at(0)
          .exists()
      ).toEqual(false);
      component.setProps({
        image:
          'https://pbs.twimg.com/profile_images/624249118114881536/qxn_I_oR_400x400.jpg'
      });
      expect(
        component
          .find('img')
          .at(0)
          .exists()
      ).toEqual(true);
    });

    it(' has empty image avatar with name props and size small', () => {
      component.setProps({
        image: '',
        name: 'Patrick Stewart',
        size: 'small'
      });
      expect(
        component
          .find('span')
          .at(0)
          .contains('P')
      ).toEqual(true);
      expect(component.find('img').exists()).toEqual(false);
    });
    it(' has empty image avatar with name props and size large', () => {
      component.setProps({
        image: '',
        name: 'Patrick Stewart',
        size: 'large'
      });
      expect(
        component
          .find('span')
          .at(0)
          .contains('P')
      ).toEqual(true);
      expect(component.find('img').exists()).toEqual(false);
    });

    it(' has broken image avatar with name props and size large', () => {
      component.setProps({
        image:
          'https://pbs.22222222twimg.com/profile_images/624249118114881536/qxn_I_oR_400x400.jpg',
        name: 'Patrick Stewart',
        size: 'large'
      });
      expect(
        component
          .find('span')
          .at(0)
          .contains('P')
      ).toEqual(false);
      expect(component.find('img').exists()).toEqual(true);
    });

    it('contains correct class for "size" variant ', () => {
      expect(
        component
          .find('.lucia-avatar--small')
          .at(0)
          .exists()
      ).toEqual(false);
      component.setProps({ size: 'small' });
      expect(component.find('.lucia-avatar--small').exists()).toEqual(true);
      component.setProps({ size: 'medium' });
      expect(component.find('.lucia-avatar--medium').exists()).toEqual(true);
      component.setProps({ size: 'large' });
      expect(component.find('.lucia-avatar--large').exists()).toEqual(true);
      component.setProps({ size: 'gobblygook' });
      expect(component.find('.lucia-avatar--small').exists()).toEqual(false);
      expect(component.find('.lucia-avatar--medium').exists()).toEqual(false);
      expect(component.find('.lucia-avatar--large').exists()).toEqual(false);
    });
  });

  describe('Functions', () => {
    it('clicks (ONLY for size="large" w/ "add" icon and passed action)', () => {
      component.setProps({
        onAddImageClick: fauxCallback,
        add: true,
        size: 'large'
      });
      component.find('.lucia-avatar--action').simulate('click');
      expect(fauxCallback.mock.calls.length).toEqual(1);
    });
  });
});
