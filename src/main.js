import Vue from 'vue'
import App from './App.vue'

import wTool from "./index.js";
Vue.use(wTool);

new Vue({
  el: '#app',
  render: h => h(App)
})
