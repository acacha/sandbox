window.Vue = require('vue')

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('register-user-by-email', require('./components/users/RegisterUserByEmail.vue'))
Vue.component('invite-user-fullscreen', require('./components/users/invitations/InviteUserFullScreen.vue'))

/* eslint-disable no-undef, no-unused-vars */
const app = new Vue({
  el: '#app'
})


