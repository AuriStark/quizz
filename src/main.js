import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'

import GAuth from 'vue-google-oauth2'
import store from './store'
const gauthOption = {
    clientId: '175139426150-2rn3aifhkjlqtppvoprbi1fmskn7pcfp.apps.googleusercontent.com',
    scope: 'profile email',
    prompt: 'select_account',
    fetch_basic_profile: true
}
Vue.use(GAuth, gauthOption)

Vue.config.productionTip = false

new Vue({
    vuetify,
    router,
    store,
    render: h => h(App)
}).$mount('#app')