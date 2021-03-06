import Vue from 'vue'
import GSignInButton from 'vue-google-signin-button'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

Vue.use(GSignInButton)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
