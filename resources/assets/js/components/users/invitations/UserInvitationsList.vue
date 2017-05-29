<template>
    <div id="user-invitation-list">

        <!-- TODO Modal adminlte-->
        <div class="modal modal-danger" id="confirm-user-invitation-deletion-modal">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span></button>
                        <h4 class="modal-title">Confirm User Invitation deletion</h4>
                    </div>
                    <div class="modal-body">
                        <p>Are you sure you want to delete user invitation?</p>
                    </div>
                    <div class="modal-footer">
                        <input type="hidden" id="user-invitation_id" value=""/>
                        <button type="button" class="btn btn-outline pull-left" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-outline" id="confirm-user-invitation-deletion-button" @click="deleteResource()"><i v-if="this.deleting" id="deleting-user-spinner" class="fa fa-refresh fa-spin"></i>  Delete</button>
                    </div>
                </div>
            </div>
        </div>

        <!--TODO adminlte box component-->
        <div class="box box-success" v-bind:class="{ 'collapsed-box': collapsed }"  id="user-invitations-list-box">
            <div class="box-header with-border">
                <h3 class="box-title">Invitations Lists</h3>
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
                <user-invitations-list-filter-bar></user-invitations-list-filter-bar>
                <div class="table-responsive">
                    <vuetable ref="vuetable"
                              :api-url="apiUrl"
                              :fields="columns"
                              pagination-path=""
                              :css="css.table"
                              :api-mode="true"
                              row-class="um-user-invitation-row"
                              :append-params="moreParams"
                              :multi-sort="true"
                              detail-row-component="user-invitations-detail-row"
                              @vuetable:pagination-data="onPaginationData"
                              @vuetable:cell-clicked="onCellClicked"
                              @vuetable:loading="showLoader"
                              @vuetable:loaded="hideLoader"
                    ></vuetable>
                </div>

                <div class="vuetable-pagination">
                    <vuetable-pagination-info ref="paginationInfo"
                                              info-class="pagination-info"
                                              infoTemplate="Displaying {from} to {to} of {total} invitations"
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

  import UserInvitationsListFilterBar from './UserInvitationsListFilterBar'
  import UserInvitationDetailRow from './UserInvitationDetailRow'
  import UserInvitationsListCustomActions from './UserInvitationsListCustomActions'

  Vue.component('user-invitations-list-filter-bar', UserInvitationsListFilterBar)
  Vue.component('user-invitations-detail-row', UserInvitationDetailRow)
  Vue.component('user-invitations-list-custom-actions', UserInvitationsListCustomActions)

  import List from '../mixins/List.js'

  export default {
    mixins: [
      List
    ],
    components: {
      UserInvitationsListFilterBar
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
            name: 'id',
            sortField: 'id',
          },
          {
            name: 'email',
          },
          {
            name: 'state',
          },
          {
            name: 'user_id',
          },
          {
            name: 'created_at',
          },
          {
            name: 'updated_at',
          },
          {
            name: '__component:user-invitations-list-custom-actions',
            title: 'Actions',
            titleClass: 'text-center',
            dataClass: 'text-center'
          }
        ]
      }
    },
    events: {
      'filter-set-user-invitations-list' (filterText) {
        this.moreParams = {
          filter: filterText
        }
        Vue.nextTick(() => this.refresh())
      },
      'filter-reset-user-invitations-list' () {
        this.moreParams = {}
        Vue.nextTick(() => this.refresh())
      },
      'reload-user-invitations-list' () {
        Vue.nextTick(() => this.reload())
      },
      'show-delete-user-invitations-dialog' (id) {
        this.showDeleteDialog(id)
      },
      'toogle-show-user-invitations' (id) {
        this.detailRowEditing(id,false)
      },
      'toogle-edit-user-invitations' (id) {
        this.detailRowEditing(id,true)
      }
    }
  }
</script>
<style src="../css/pagination.css"></style>
