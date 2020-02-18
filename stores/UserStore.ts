import { observable, action } from 'mobx';
import { createContext, useContext } from 'react';
import { useLocalStore } from 'mobx-react';

export class UserStore {
  id = Math.random();
  @observable name = '';
  @observable threads = [{ color: '0010', quantity: 1 }];

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
