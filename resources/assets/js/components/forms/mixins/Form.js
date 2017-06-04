import Form from 'acacha-forms'

export default {
  data: function () {
    return {
      form: new Form({ email: '' })
    }
  },
  props: {
    apiUrl: {
      type: String,
      default: 'http://localhost:8080/api/v1/management/users/invitations'
    }
  },
  methods: {
    clearErrors (name) {
      this.form.errors.clear(name)
    }
  },
  mounted () {
    this.form.clearOnSubmit = true
  }
}