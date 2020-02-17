import { observable } from 'mobx'

class UserStore {
  id = Math.random()
  @observable name = ''
  @observable threads = []
}

export default new UserStore()
