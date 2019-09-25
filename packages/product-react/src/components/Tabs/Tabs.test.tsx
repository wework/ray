import Enzyme, { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { act } from 'react-dom/test-utils';
import { Tabs } from './Tabs';
import { TabView } from './TabView';

configure({ adapter: new Adapter() });

describe('Tabs', () => {
  const defaultProps = {
    tabs: [
      { id: 'test-1', ariaLabel: 'Test', label: 'Test 1' },
      { id: 'test-2', ariaLabel: 'Test', label: 'Test 2' },
      { id: 'test-3', ariaLabel: 'Test', label: 'Test 3' }
    ]
  };

  test('starts with first tab active', () => {
    const wrapper = Enzyme.mount(
      <Tabs {...defaultProps}>
        <TabView id="test-1">
          <div>test-1</div>
        </TabView>
        <TabView id="test-2">
          <div>test-2</div>
        </TabView>
      </Tabs>
    );

    expect(wrapper.find('[data-testid="test-1"]').exists()).toBe(true);
  });

  test('clicking tab activates view', () => {
    const wrapper = Enzyme.mount(
      <Tabs {...defaultProps}>
        <TabView id="test-1">
          <div>test-1</div>
        </TabView>
        <TabView id="test-2">
          <div>test-2</div>
        </TabView>
      </Tabs>
    );

    wrapper
      .find('[data-testid="tab-button"]')
      .at(2)
      .simulate('click');

    expect(wrapper.find('[data-testid="test-2"]').exists()).toBe(true);
  });

  test('settings defaultActiveTab sets default view', () => {
    const wrapper = Enzyme.mount(
      <Tabs {...defaultProps} defaultActiveTab="test-2">
        <TabView id="test-1">
          <div>test-1</div>
        </TabView>
        <TabView id="test-2">
          <div>test-2</div>
        </TabView>
      </Tabs>
    );

    expect(wrapper.find('[data-testid="test-2"]').exists()).toBe(true);
  });

  describe('keyboard navigation', () => {
    let wrapper: any;
    const windowEvents: { [key: string]: any } = {};

    beforeEach(() => {
      window.addEventListener = jest.fn((event, callback) => {
        windowEvents[event] = callback;
      });

      wrapper = Enzyme.mount(
        <Tabs {...defaultProps}>
          <TabView id="test-1">
            <div>test-1</div>
          </TabView>
          <TabView id="test-2">
            <div>test-2</div>
          </TabView>
          <TabView id="test-3">
            <div>test-3</div>
          </TabView>
        </Tabs>
      );
    });

    const simulateKeyDown = (key: string) => {
      act(() => {
        windowEvents.keydown({ key, preventDefault() {} });
      });
    };

    const focusFirstTab = (wrapper: any) => {
      act(() => {
        wrapper
          .find('[data-testid="tab-button"]')
          .at(0)
          .simulate('focus');
      });
    };

    test('arrow left activates previous tab', () => {
      focusFirstTab(wrapper);

      simulateKeyDown('ArrowLeft');
      wrapper.update();

      expect(wrapper.find('[data-testid="test-3"]').exists()).toBe(true);

      simulateKeyDown('ArrowLeft');
      wrapper.update();

      expect(wrapper.find('[data-testid="test-2"]').exists()).toBe(true);
    });

    test('arrow right activates previous tab', () => {
      focusFirstTab(wrapper);

      simulateKeyDown('ArrowRight');
      wrapper.update();

      expect(wrapper.find('[data-testid="test-2"]').exists()).toBe(true);

      simulateKeyDown('ArrowRight');
      wrapper.update();

      expect(wrapper.find('[data-testid="test-3"]').exists()).toBe(true);

      simulateKeyDown('ArrowRight');
      wrapper.update();

      expect(wrapper.find('[data-testid="test-1"]').exists()).toBe(true);
    });

    test('home activates first tab', () => {
      focusFirstTab(wrapper);

      simulateKeyDown('ArrowRight');
      wrapper.update();

      expect(wrapper.find('[data-testid="test-2"]').exists()).toBe(true);

      simulateKeyDown('Home');
      wrapper.update();

      expect(wrapper.find('[data-testid="test-1"]').exists()).toBe(true);
    });

    test('End activates last tab', () => {
      focusFirstTab(wrapper);

      simulateKeyDown('End');
      wrapper.update();

      expect(wrapper.find('[data-testid="test-3"]').exists()).toBe(true);
    });
  });
});
