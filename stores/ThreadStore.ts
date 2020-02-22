import { observable, action, computed } from 'mobx';
import { createContext, useContext } from 'react';
import dmc from '../utils/dmc-chart.json';
import { Floss } from '../utils/types.js';

export class ThreadStore {
  id = Math.random();
  @observable DMCthreads: Floss[] = dmc;

  @computed get colors(): number[] {
    return this.DMCthreads.map(thread => thread['DMC']);
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
