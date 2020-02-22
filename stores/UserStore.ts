import { observable, action, computed } from 'mobx';
import { createContext, useContext } from 'react';
import { useLocalStore } from 'mobx-react';

export class UserStore {
  id = Math.random();
  @observable name = '';
  @observable threads = [{ color: 760, quantity: 1 }];

  @computed get threadNumbers() {
    return this.threads.map(thread => thread.color);
  }

  @action setName = name => {
    this.name = name;
  };
}

const userStore = new UserStore();
const userStoreContext = createContext(userStore);

export const useUserStore = () => {
  const store = useContext(userStoreContext);
  if (!store) {
    throw new Error('useStore must be used within a StoreProvider.');
  }
  return store;
};
