
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

/**
 * Vue is a modern JavaScript library for building interactive web interfaces
 * using reactive data binding and reusable components. Vue's API is clean
 * and simple, leaving you to focus on building your next great project.
 */

window.Vue = require('vue')

import AdminlteVue from 'adminlte-vue'
Vue.use(AdminlteVue)

import VueEcho from 'vue-echo'

Vue.use(VueEcho, {
  broadcaster: 'pusher',
  key: '785d0fcd5c20c0256313',
  cluster: 'eu',
  encrypted: true,
  namespace: 'Acacha.Users.Events'
})

// Use trans function in Vue (equivalent to trans() Laravel Translations helper). See htmlheader.balde.php partial.
Vue.prototype.trans = (key) => {
  return _.get(window.trans, key, key)
}

// Laravel AdminLTE vue components
Vue.component('register-form', require('./components/auth/RegisterForm.vue'))
Vue.component('login-form', require('./components/auth/LoginForm.vue'))
Vue.component('email-reset-password-form', require('./components/auth/EmailResetPasswordForm.vue'))
Vue.component('reset-password-form', require('./components/auth/ResetPasswordForm.vue'))

Vue.component('users-management', require('./components/users/UsersManagement.vue'))
Vue.component('users-invitations', require('./components/users/invitations/UserInvitations.vue'))
Vue.component('create-user', require('./components/users/CreateUser.vue'))
Vue.component('create-user-via-invitation', require('./components/users/CreateUserViaInvitation.vue'))
Vue.component('users-dashboard', require('./components/users/dashboard/UsersDashboard.vue'))
Vue.component('model-tracking', require('./components/tracking/ModelTracking.vue'))
Vue.component('user-profile', require('./components/users/profile/UserProfile.vue'))

Vue.component('users-migration-dashboard', require('./components/users/migration/UsersMigrationDashboard.vue'))
Vue.component('users-migration', require('./components/users/migration/UsersMigration.vue'))

// Google Apps vue components
Vue.component('google-apps-dashboard', require('./components/users/google/GoogleAppsDashboard.vue'))
Vue.component('google-apps-users-list', require('./components/users/google/GoogleAppsUsersList.vue'))

Vue.component(
  'passport-clients',
  require('./components/passport/Clients.vue')
);

Vue.component(
  'passport-authorized-clients',
  require('./components/passport/AuthorizedClients.vue')
);

Vue.component(
  'passport-personal-access-tokens',
  require('./components/passport/PersonalAccessTokens.vue')
);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example', require('./components/Example.vue'));

const app = new Vue({
    el: '#app'
});
