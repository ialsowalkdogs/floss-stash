import { observable, action, computed } from 'mobx';
import { createContext, useContext } from 'react';
import dmc from '../utils/dmc-chart.json';
import { Floss } from '../utils/types.js';

export class ThreadStore {
  @observable DMCfloss: Floss[] = dmc.map(({ DMC, Description, ...rest }) => {
    return { ...rest, brand: 'DMC', color: DMC, description: Description };
  });

  @computed get colors(): Array<string | number> {
    return this.DMCfloss.map((floss) => floss.color);
  }
}

const threadStore = new ThreadStore();
const threadStoreContext = createContext(threadStore);

export const useThreadStore = () => {
  const store = useContext(threadStoreContext);
  if (!store) {
    throw new Error('useStore must be used within a StoreProvider.');
  }
  return store;
};
