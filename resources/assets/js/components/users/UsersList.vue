<template>
    <div id="user-list">

        <!-- TODO Modal adminlte-->
        <div class="modal modal-danger" id="confirm-user-deletion-modal">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span></button>
                        <h4 class="modal-title">Confirm User deletion</h4>
                    </div>
                    <div class="modal-body">
                        <p>Are you sure you want to delete user?</p>
                    </div>
                    <div class="modal-footer">
                        <input type="hidden" id="user_id" value=""/>
                        <button type="button" class="btn btn-outline pull-left" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-outline" id="confirm-user-deletion-button" @click="deleteResource()"><i v-if="this.deleting" id="deleting-user-spinner" class="fa fa-refresh fa-spin"></i>  Delete</button>
                    </div>
                </div>
            </div>
        </div>

        <!--TODO adminlte box component-->
        <div class="box box-success" id="users-list-box" :class="{ 'collapsed-box': collapsed }">
            <div class="box-header with-border">
                <h3 class="box-title">Users Lists</h3>
                <div class="box-tools pull-right">
                    <button type="button" class="btn btn-box-tool" data-widget="collapse">
                        <i v-if="collapsed" class="fa fa-plus"></i>
                        <i v-else class="fa fa-minus"></i>
                    </button>
                    <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
                </div>
            </div>
            <!-- /.box-header -->
            <div class="box-body">
                <users-list-filter-bar></users-list-filter-bar>
                <div class="table-responsive">
                    <vuetable ref="vuetable"
                              :api-url="apiUrl"
                              :fields="columns"
                              pagination-path=""
                              :css="css.table"
                              :api-mode="true"
                              row-class="um-user-row"
                              :append-params="moreParams"
                              :multi-sort="true"
                              detail-row-component="user-detail-row"
                              @vuetable:pagination-data="onPaginationData"
                              @vuetable:cell-clicked="onCellClicked"
                              @vuetable:loading="showLoader"
                              @vuetable:loaded="hideLoader"
                    ></vuetable>
                </div>
                <div class="vuetable-pagination">
                    <vuetable-pagination-info ref="paginationInfo"
                                              info-class="pagination-info"
                                              infoTemplate="Displaying {from} to {to} of {total} users"
                    ></vuetable-pagination-info>

                    <vuetable-pagination ref="pagination"
                                         :css="css.pagination"
                                         :icons="css.icons"
                                         @vuetable-pagination:change-page="onChangePage"
                    ></vuetable-pagination>
                </div>
            </div>
            <div class="overlay" v-if="loading">
                <i class="fa fa-refresh fa-spin"></i>
            </div>
        </div>
    </div>

</template>

<script>

  import UsersListFilterBar from './UsersListFilterBar'
  import UserDetailRow from './UserDetailRow'
  import UserListCustomActions from './UsersListCustomActions'

  Vue.component('users-list-filter-bar', UsersListFilterBar)
  Vue.component('user-detail-row', UserDetailRow)
  Vue.component('users-list-custom-actions', UserListCustomActions)

  import List from './mixins/List.js'

  export default {
    mixins: [
      List
    ],
    components: {
      UsersListFilterBar
    },
    data() {
      return {
        columns: [
          {
            name: '__sequence',
            title: '#',
            titleClass: 'text-right',
            dataClass: 'text-right'
          },
          {
            name: '__checkbox',
            titleClass: 'text-center',
            dataClass: 'text-center',
          },
          {
            name: 'extra',
            visible: false,
          },
          {
            name: 'id',
            sortField: 'id',
          },
          {
            name: 'name',
            sortField: 'name',
          },
          {
            name: 'email',
          },
          {
            name: 'created_at',
          },
          {
            name: 'updated_at',
          },
          {
            name: '__component:users-list-custom-actions',
            title: 'Actions',
            titleClass: 'text-center',
            dataClass: 'text-center'
          }
        ],
      }
    },
    events: {
      'filter-set-users-list' (filterText) {
        this.moreParams = {
          filter: filterText
        }
        Vue.nextTick(() => this.refresh())
      },
      'filter-reset-users-list' () {
        this.moreParams = {}
        Vue.nextTick(() => this.refresh())
      },
      'reload-users-list' () {
        Vue.nextTick(() => this.reload())
      },
      'show-delete-user-dialog' (id) {
        this.showDeleteDialog(id)
      },
      'toogle-show-user' (id) {
        this.detailRowEditing(id,false)
      },
      'toogle-edit-user' (id) {
        this.detailRowEditing(id,true)
      }
    }
  }
</script>
<style src="./css/pagination.css"></style>
