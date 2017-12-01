import Vue from 'vue'
import Root from './Root.vue'
import Demo from './lib/index.js'
Vue.use(Demo)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#root',
    template: '<Root/>',
    components: { Root }
})
