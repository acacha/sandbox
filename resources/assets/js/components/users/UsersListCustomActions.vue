<template>
  <div class="user-list-custom-actions">
    <button title="Open user profile"
            class="btn btn-sm btn-default" :id="'open-user-profile-' + rowData.id"
            @click="goToUserProfile(rowData.id)" :disabled="!laravel.user.can['see-other-users-profile']">
      <i class="fa fa-user"></i>
    </button>
    <button title="Reset password by email"
            class="btn btn-sm btn-warning" :id="'reset-password-' + rowData.id"
            @click="resetPassword()" :disabled="!laravel.user.can['create-users']">
      <i class="fa fa-envelope-o"></i>
    </button>
    <button v-scroll-to="'#user-' + rowData.id + '-detail-row'" title="View"
            class="btn btn-sm btn-primary" :id="'show-user-' + rowData.id"
            @click="toogleShow('user',rowData)" :disabled="!laravel.user.can['view-users']">
      <i class="glyphicon glyphicon-zoom-in"></i>
    </button>
    <button v-scroll-to="'#user-' + rowData.id + '-detail-row'"
            class="btn btn-sm btn-success" :id="'edit-user-' + rowData.id" title="Edit"
            @click="toogleEdit('user',rowData)" :disabled="!laravel.user.can['edit-users']">
      <i class="glyphicon glyphicon-pencil"></i>
    </button>
    <button class="btn btn-sm btn-danger"  :id="'delete-user-' + rowData.id" title="Delete"
            @click="deleteResource('user',rowData)" :disabled="!laravel.user.can['delete-users']">
      <i class="glyphicon glyphicon-trash"></i>
    </button>
  </div>
</template>

<script>
  import VueScrollTo from 'vue-scrollto'
  Vue.use(VueScrollTo)

  import CustomActions from './mixins/CustomActions'

  export default {
    mixins: [
      CustomActions
    ],
    methods: {
      goToUserProfile(id) {
        window.open('/user/profile/' + id)
      },
      resetPassword() {
        var component = this
        let apiURL = '/api/v1/management/users/send/reset-password-email'
        axios.post( apiURL , {
          email: this.rowData.email
        })
          .then(function (response) {
            console.log('OK!')
            console.log(response);
            let result = 'Password reset email sent to user ' + component.rowData.name + '.'
            component.$events.fire('show-result',result)
          })
          .catch(function (error) {
            console.log('ERROR!')
            console.log(error);
          });

      }
    }
  }
</script>

<style src="./css/customActions.css"></style>
