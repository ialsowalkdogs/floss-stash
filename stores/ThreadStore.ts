import { observable, action, computed } from 'mobx';
import { createContext, useContext } from 'react';
import dmc from '../utils/dmc-chart.json';
import { Floss } from '../utils/types.js';

export class ThreadStore {
  @observable DMCthreads: Floss[] = dmc.map(({ DMC, ...rest }) => {
    return { ...rest, brand: 'DMC', color: DMC };
  });

  @computed get colors(): Array<string | number> {
    return this.DMCthreads.map((thread) => thread.color);
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
