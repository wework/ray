import * as React from 'react';
import { IContext, TabContext } from './context';

import './TabView.scss';

interface IProps {
  children: React.ReactNode;
  id: string;
}

export const TabView = (props: IProps) => {
  const tabContext = React.useContext(TabContext);

  if (tabContext === null) {
    return null;
  }

  const { selectedTab } = validateInputs(props, tabContext);

  if (selectedTab !== props.id) {
    return null;
  }

  return (
    <div
      className="ray-product__tab-view"
      tabIndex={0}
      id={props.id}
      role="tabpanel"
      aria-labelledby={props.id}
      data-testid={props.id}
    >
      {props.children}
    </div>
  );
};

TabView.displayName = 'TabView';

function validateInputs(props: IProps, context: IContext) {
  const { tabs } = context;
  const possibleIds = tabs.map(({ id }) => id);

  if (!possibleIds.includes(props.id)) {
    const possibleIdsString = possibleIds.join(', ');

    throw new Error(
      `Invalid id passed to TabView. Valid id's include: ${possibleIdsString}`,
    );
  }

  return context;
}
