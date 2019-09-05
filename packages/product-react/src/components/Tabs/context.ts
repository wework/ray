import { createContext } from 'react';
import { ITab } from './Tabs';

export interface IContext {
  selectedTab: string;
  tabs: ITab[];
}

export const TabContext = createContext<IContext | null>(null);
