import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import * as fb from 'firebase'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    fb.initializeApp({
      apiKey: 'AIzaSyDmiyDP4eIjve84Qh-YimyyTN8FE_4rbgs',
      authDomain: 'vivchar-vinograd.firebaseapp.com',
      databaseURL: 'https://vivchar-vinograd.firebaseio.com',
      projectId: 'vivchar-vinograd',
      storageBucket: 'vivchar-vinograd.appspot.com',
      messagingSenderId: '1075454688412'
    })
    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    })
  }
})
