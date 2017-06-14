<template>
    <div class="row">
        <div class="col-md-12">
            <adminlte-vue-box color="primary" id="users-list-box" :collapsable="false" :removable="false">
                <span slot="title">Migrate users</span>
                <a class="btn btn-app" @click.once="migrate">
                    <i class="fa fa-play"></i> Migrate
                </a>
                <adminlte-vue-progress :value="progress"></adminlte-vue-progress>
                <i v-if="migrating" id="user-migration-progress-spinner" class="fa fa-refresh fa-spin"></i><span v-if="progress > 0"> {{progressMessage}} </span>
            </adminlte-vue-box>
            Utilitzar component box tipus chat per mostrar l'historial de progress de les migracions i resultats! En compte de chat només mostrar els missatges de progress que ariben al fer una migració

            Historial de migracions? Tracking/user tracking de les migracions històriques
        </div>
    </div>
</template>

<script>

  import store from '../Store'

  export default {
    data() {
      return {
        progress: 0,
        progressMessage: '',
        migrating: false
      }
    },
    props: {
      uri: {
        type: String,
        default: '-migration/totalNumberOfUsers'
      }
    },
    methods: {
      migrate() {
        this.migrating = true
        axios.get('http://localhost:8080/management/users-migration/migrate')
          .then(function (response) {

          })
          .catch(function (error) {
            console.log(error);
          });
      },
      subscribeForBroadcastEvents() {
        var component = this
        this.$echo.channel('users-migration').listen('UserMigrationStatusUpdated', (payload) => {
          console.log('Event updateProgress received!!!!!!!!!')
          console.log(payload);
          component.progressMessage='Migrating user ' + payload.user
          component.progress = payload.progress
        });
      }
    },
    mounted() {
      this.subscribeForBroadcastEvents()
      var component = this
      let apiUrl = store.apiUrl + this.uri

      axios.get(apiUrl)
        .then(function (response) {
          component.totalUsers = response.data.data
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
</script>