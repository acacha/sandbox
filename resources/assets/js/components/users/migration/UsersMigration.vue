<template>
    <div class="row">
        <div class="col-md-12">

            <adminlte-vue-box color="success" id="migrate-users-options-box">
                <span slot="title">Migration options</span>
                <!-- Minimal style -->

                <!-- radio -->
                <div class="form-group">
                    <label>
                        <div class="iradio_minimal-red checked" aria-checked="false" aria-disabled="false" style="position: relative;"><input type="radio" name="r2" class="minimal-red" checked="" style="position: absolute; opacity: 0;"><ins class="iCheck-helper" style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"></ins></div>
                    </label>
                    <label>
                        <div class="iradio_minimal-red" aria-checked="false" aria-disabled="false" style="position: relative;"><input type="radio" name="r2" class="minimal-red" style="position: absolute; opacity: 0;"><ins class="iCheck-helper" style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"></ins></div>
                    </label>
                    <label>
                        <div class="iradio_minimal-red disabled" aria-checked="false" aria-disabled="true" style="position: relative;"><input type="radio" name="r2" class="minimal-red" disabled="" style="position: absolute; opacity: 0;"><ins class="iCheck-helper" style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"></ins></div>
                        Two options: only no existing users in destination or all
                    </label>
                </div>


                <!-- radio -->
                <div class="form-group">
                    <label>
                        <div class="iradio_minimal-red checked" aria-checked="false" aria-disabled="false" style="position: relative;"><input type="radio" name="r2" class="minimal-red" checked="" style="position: absolute; opacity: 0;"><ins class="iCheck-helper" style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"></ins></div>
                    </label>
                    <label>
                        <div class="iradio_minimal-red" aria-checked="false" aria-disabled="false" style="position: relative;"><input type="radio" name="r2" class="minimal-red" style="position: absolute; opacity: 0;"><ins class="iCheck-helper" style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"></ins></div>
                    </label>
                    <label>
                        <div class="iradio_minimal-red disabled" aria-checked="false" aria-disabled="true" style="position: relative;"><input type="radio" name="r2" class="minimal-red" disabled="" style="position: absolute; opacity: 0;"><ins class="iCheck-helper" style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"></ins></div>
                        HOW TO (TODO) propose only new users from last migration!!!!!!!!!!!
                    </label>
                </div>
                <!-- radio -->
                <div class="form-group">
                    <label>
                        <div class="iradio_flat-green checked" aria-checked="false" aria-disabled="false" style="position: relative;"><input type="radio" name="r3" class="flat-red" checked="" style="position: absolute; opacity: 0;"><ins class="iCheck-helper" style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"></ins></div>
                    </label>
                    <label>
                        <div class="iradio_flat-green" aria-checked="false" aria-disabled="false" style="position: relative;"><input type="radio" name="r3" class="flat-red" style="position: absolute; opacity: 0;"><ins class="iCheck-helper" style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"></ins></div>
                    </label>
                    <label>
                        <div class="iradio_flat-green disabled" aria-checked="false" aria-disabled="true" style="position: relative;"><input type="radio" name="r3" class="flat-red" disabled="" style="position: absolute; opacity: 0;"><ins class="iCheck-helper" style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"></ins></div>
                        Overwrite data of existing users in destination database (destination user id left untouched)
                    </label>
                </div>
            </adminlte-vue-box>

            <adminlte-vue-box color="primary" id="migrate-users-box" :collapsable="false" :removable="false">
                <span slot="title">Migrate users</span>
                <a class="btn btn-app" @click="migrate" :class="{ disabled: migrating }">
                    <i class="fa fa-play"></i> Migrate
                </a>
                <a class="btn btn-app" @click="stopMigration" :class="{ disabled: ! migrating }">
                    <i class="fa fa-stop"></i> Stop
                </a>
                <adminlte-vue-progress :value="progress"></adminlte-vue-progress>
                <i v-if="migrating" id="user-migration-progress-spinner" class="fa fa-refresh fa-spin"></i><span> {{progressMessage}} </span>
            </adminlte-vue-box>

            <!--TODO create adminlte-vue-box variant for chat boxes -->
            <div class="box box-primary direct-chat direct-chat-primary" id="users-migration-history">
                <div class="box-header with-border">
                    <h3 class="box-title">Migrations history</h3>

                    <div class="box-tools pull-right">
                        <span data-toggle="tooltip" title="3 New migrations" class="badge bg-light-blue">3</span>
                        <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
                        </button>
                        <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
                    </div>
                </div>
                <div class="box-body">
                    <div class="direct-chat-messages">
                        <div class="direct-chat-msg" v-for="migration in migrations">
                            <div class="direct-chat-info clearfix">
                                <span class="direct-chat-name pull-left">User {{ migration.user ? migration.user.name : 'removed' }}|{{  migration.user ? migration.user.email : 'removed' }} ( {{ migration.user_id }} ) migrated from <span :title="migration.source_user">JSON</span></span>
                                <span class="direct-chat-timestamp pull-right">{{ migration.created_at }}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="overlay" v-if="fetchingMigrationHistory">
                    <i class="fa fa-refresh fa-spin"></i>
                </div>
            </div>

        </div>
    </div>
</template>

<script>

  import store from '../Store'
  import Form from 'acacha-forms'

  export default {
    data() {
      return {
        progress: 0,
        progressMessage: '',
        migrating: false,
        fetchingMigrationHistory: false,
        batchId: null,
        migrations: []
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
        this.progressMessage = 'Starting migration!'
        let apiUrl = store.apiUrl + '-migration/migrate'
        var component = this
        axios.post(apiUrl)
          .then(function (response) {
            component.batchId = response.data.id
          })
          .catch(function (error) {
            console.log(error);
          });
      },
      stopMigration() {
        if (this.migrating) {
          this.progressMessage = 'Stopping migration!'
          let apiUrl = store.apiUrl + '-migration/migrate-stop'
          var component = this
          axios.post(apiUrl,{ batch_id: component.batchId })
            .then(function (response) {
              component.migrating = false
              component.batchId = null
              component.progressMessage = 'Migration stopped!'
            })
            .catch(function (error) {
              console.log(error);
            });
        }
      },
      subscribeToProgressBarEvents() {
        var component = this
        this.$echo.channel('progress-bar').listen('ProgressBarStatusHasBeenUpdated', (payload) => {
          console.log(payload)
          if(payload.id === 'users-migration-progress-bar') {
            component.progressMessage = payload.message
            component.progress = payload.progress
            if (component.progress == 100) {
              component.migrating = false
              component.fetchMigrationHistory()
            }
          }
        });
      },
      subscribeToMigrationHistoryEvents() {
        var component = this
        this.$echo.channel('users-migration').listen('UserMigrationHasBeenPersisted', (payload) => {
          if (!component.migrating) this.fetchMigrationHistory()
        })
      },
      fetchMigrationHistory(){
        this.fetchingMigrationHistory = true
        let component = this
        let migrationHistoryRequest = new Form( {}, true )
        migrationHistoryRequest.get(store.apiUrl + '-migration/history')
          .then( response => {
            component.migrations = response.data.data
            this.fetchingMigrationHistory = false
          })
      }
    },
    mounted() {
      this.subscribeToProgressBarEvents()
      this.fetchMigrationHistory()
      this.subscribeToMigrationHistoryEvents()
    }
  }
</script>