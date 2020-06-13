import Vue from 'vue'
import App from './App.vue'
import store from './store'

import axios from 'axios'
import VueAxios from 'vue-axios'

// Config
Vue.use(VueAxios, axios)
Vue.config.productionTip = false

// Bus
Vue.prototype.bus = new Vue()

document.addEventListener('DOMContentLoaded', function(){ 
  new Vue({
    store,
    render: h => h(App)
  }).$mount('#wpkanban')
}, false)
