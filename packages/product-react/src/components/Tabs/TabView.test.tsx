import Enzyme, { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { TabContext } from './context';
import { TabView } from './TabView';

configure({ adapter: new Adapter() });

interface IContextProviderProps {
  selectedTab: string;
  children: React.ReactNode;
}

const ContextProvider: React.FC<IContextProviderProps> = props => {
  const { children, selectedTab } = props;

  const tabs = [
    { id: 'test-1', ariaLabel: 'Test', label: 'Test 1' },
    { id: 'test-2', ariaLabel: 'Test', label: 'Test 2' }
  ];

  return (
    <TabContext.Provider value={{ selectedTab, tabs }}>
      {children}
    </TabContext.Provider>
  );
};

describe('TabView', () => {
  test('renders view if id matches selectedTab', () => {
    const wrapper = Enzyme.mount(
      <ContextProvider selectedTab="test-1">
        <TabView id="test-1">
          <div>test1</div>
        </TabView>
        <TabView id="test-2">
          <div>test2</div>
        </TabView>
      </ContextProvider>
    );

    expect(wrapper.find('[data-testid="test-1"]').exists()).toBe(true);
  });

  test('renders null if id does not match selectedTab', () => {
    const wrapper = Enzyme.mount(
      <ContextProvider selectedTab="test-1">
        <TabView id="test-1">
          <div>test1</div>
        </TabView>
        <TabView id="test-2">
          <div>test2</div>
        </TabView>
      </ContextProvider>
    );

    expect(wrapper.find('[data-testid="test-2"]').exists()).toBe(false);
  });

  test('throws error if the provided id is not correct', () => {
    console.error = jest.fn();
    expect(() => {
      const wrapper = Enzyme.mount(
        <ContextProvider selectedTab="test-1">
          <TabView id="bananas">
            <div>test1</div>
          </TabView>
          <TabView id="test-2">
            <div>test2</div>
          </TabView>
        </ContextProvider>
      );
    }).toThrowError(
      "Invalid id passed to TabView. Valid id's include: test-1, test-2"
    );
  });
  test('renders null if there is no context', () => {
    const wrapper = Enzyme.mount(
      <>
        <TabView id="test-1">
          <div>test1</div>
        </TabView>
        <TabView id="test-2">
          <div>test2</div>
        </TabView>
      </>
    );
    expect(wrapper.find('[data-testid="test-2"]').exists()).toBe(false);
  });
});
