import clsx from 'clsx';
import * as React from 'react';
import { Button } from '@wework/ray-core-react';
import { TabContext } from './context';

import './Tabs.scss';

interface ITabRefs {
  [key: string]: React.RefObject<HTMLButtonElement>;
}

export interface ITab {
  id: string;
  ariaLabel: string;
  label: string;
}

export interface IProps {
  tabs: ITab[];
  defaultActiveTab?: string;
  onSelect?: (selectedTabId: string) => void;
  compact?: boolean;
}

export const Tabs: React.FC<IProps> = props => {
  const { tabs, onSelect, compact } = props;
  const [firstTab] = tabs;
  const defaultTab = props.defaultActiveTab || firstTab.id;
  const [selectedTabId, setSelectedTabId] = React.useState<string>(defaultTab);
  const [buttonsFocused, setButtonsFocused] = React.useState(false);
  const onButtonFocus = () => setButtonsFocused(true);
  const onButtonBlur = () => setButtonsFocused(false);

  const setActiveTab = (id: string) => () => {
    setSelectedTabId(id);

    if (onSelect) {
      onSelect(id);
    }
  };

  const { tabRefs, focusedTab } = useFocusManager({
    tabs,
    firstFocusedId: defaultTab,
    buttonsFocused
  });

  React.useEffect(() => {
    setActiveTab(focusedTab)();
  }, [focusedTab]);

  if (tabs.length === 0) {
    return null;
  }

  return (
    <TabContext.Provider value={{ selectedTab: selectedTabId, tabs }}>
      <div className="ray-tabs__wrapper" role="tablist">
        {tabs.map(tab => {
          const tabIsActive = tab.id === selectedTabId;

          return (
            <div
              key={tab.id}
              className={clsx('ray-tabs__button-wrapper', {
                'ray-tabs__button-wrapper--active': tabIsActive
              })}
            >
              <Button
                className="ray-product__button"
                type="tertiary"
                aria-label={tab.ariaLabel}
                aria-selected={tabIsActive}
                onClick={setActiveTab(tab.id)}
                role="tab"
                aria-controls={tab.id}
                ref={tabRefs[tab.id]}
                tabIndex={tabIsActive ? 0 : -1}
                data-testid="tab-button"
                onFocus={onButtonFocus}
                onBlur={onButtonBlur}
                compact={compact}
              >
                {tab.label}
              </Button>
            </div>
          );
        })}
      </div>
      {props.children}
    </TabContext.Provider>
  );
};

Tabs.displayName = 'Tabs';

export default Tabs;

interface IFocusManager {
  tabs: ITab[];
  firstFocusedId: string;
  buttonsFocused: boolean;
}

function useFocusManager(props: IFocusManager) {
  const { tabs, firstFocusedId, buttonsFocused } = props;
  const [focusedTab, setFocusedTab] = React.useState(firstFocusedId);
  const [isMounted, setIsMounted] = React.useState(false);

  const tabRefs: ITabRefs = tabs.reduce((acc, { id }) => {
    return { ...acc, [id]: React.useRef<HTMLButtonElement>(null) };
  }, {});

  React.useEffect(() => {
    if (!isMounted) {
      return setIsMounted(true);
    }

    const tabRef = tabRefs[focusedTab];

    if (tabRef.current) {
      tabRef.current.focus();
    }
  }, [focusedTab]);

  const focusFirstTab = () => {
    const firstTabId = getIdAt(tabs, 0);

    setFocusedTab(firstTabId);
  };

  const focusLastTab = () => {
    const lastIndex = getLastIndex(tabs);
    const lastTabId = getIdAt(tabs, lastIndex);

    setFocusedTab(lastTabId);
  };

  const focusNextTab = () => {
    setFocusedTab(currentFocused => {
      const currentIndex = getTabIndex(tabs, currentFocused);

      if (currentIndex === getLastIndex(tabs)) {
        return getFirstTabId(tabs);
      }

      return getIdAt(tabs, currentIndex + 1);
    });
  };

  const focusPreviousTab = () => {
    setFocusedTab(currentFocused => {
      const currentIndex = getTabIndex(tabs, currentFocused);

      if (currentIndex === 0) {
        return getLastTabId(tabs);
      }

      return getIdAt(tabs, currentIndex - 1);
    });
  };

  const focusRoving = (e: KeyboardEvent) => {
    const KeyEvents = {
      ArrowLeft: 'ArrowLeft',
      ArrowRight: 'ArrowRight',
      Home: 'Home',
      End: 'End'
    };

    const { key } = e;

    if (getObjectValues(KeyEvents).includes(key)) {
      e.preventDefault();
    }

    switch (key) {
      case KeyEvents.ArrowLeft:
        focusPreviousTab();
        break;
      case KeyEvents.ArrowRight:
        focusNextTab();
        break;
      case KeyEvents.Home:
        focusFirstTab();
        break;
      case KeyEvents.End:
        focusLastTab();
        break;
    }
  };

  React.useEffect(() => {
    if (buttonsFocused) {
      window.addEventListener('keydown', focusRoving);
    } else {
      window.removeEventListener('keydown', focusRoving);
    }

    return () => {
      window.removeEventListener('keydown', focusRoving);
    };
  }, [buttonsFocused]);

  return {
    tabRefs,
    focusedTab
  };
}

function getTabIndex(tabs: ITab[], tabId: string) {
  return tabs.findIndex(({ id }) => id === tabId);
}

function getFirstTabId(tabs: ITab[]) {
  return getIdAt(tabs, 0);
}

function getLastTabId(tabs: ITab[]) {
  const lastIndex = getLastIndex(tabs);

  return getIdAt(tabs, lastIndex);
}

function getLastIndex(arr: any[]) {
  return arr.length - 1;
}

function getIdAt(tabs: ITab[], index: number) {
  return tabs[index].id;
}

function getObjectValues(obj: { [index: string]: any }) {
  return Object.keys(obj).map(key => obj[key]);
}
