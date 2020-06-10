import Vue from 'vue'
import App from './App'
import sz from "./common/sz-common.js"

Vue.config.productionTip = false
Vue.prototype.sz=sz
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
