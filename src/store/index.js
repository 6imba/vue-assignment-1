import { createStore } from 'vuex'
import users_module from './modules/users_module'
import profile_module from './modules/profile_module'

export default createStore({
  modules: {
    users_module,
    profile_module,
  }
})
