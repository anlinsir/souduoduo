
import Vue from 'vue'
import App from './App'
import router from './router'
import { Pagination } from 'element-ui';

Vue.use(Pagination);


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
