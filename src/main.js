import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css'
import elementui from "element-ui"
import axios from "axios"
import VueAxios from "vue-axios"
import './registerServiceWorker'
import "./util/bottom-footer.css"
import time from "./util/util.js"
Vue.use(VueAxios, axios)
Vue.use(elementui)
Vue.use(time)

Vue.config.productionTip = false

    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')