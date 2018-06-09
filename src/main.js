
import Vue from 'vue'
import App from './App'
import router from './router'
import BaiduMap from 'vue-baidu-map'
import ElementUI from 'element-ui';

import VCharts from 'v-charts'
Vue.use(VCharts)
Vue.use(ElementUI);


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
