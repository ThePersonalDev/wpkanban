import Vue from 'vue'
import Vuex from 'vuex'
import {set} from 'lodash'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    board: {}
  },
  mutations: {
    /**
     * Assigns a deep value
     * @param {*} state
     * @param {*} payload [0] = The state path, [1] = The value to assign, [2] = Whether to persist in localstorage
     */
    set(state, payload) {
      set(state, payload[0], payload[1])

      // Persist
      if (payload[2]) {
        localStore.set(payload[0], payload[1])
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
