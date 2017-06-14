export default {
  methods: {
    performAction (data, uri, parameters, result, action = 'post', resultEvent = 'show-result') {
      this.performingAction = true
      var component = this
      let apiUrl = component.store.apiUrl + uri
      axios[action](apiUrl, parameters)
        .then(function (response) {
          component.hideDialog()
          component.$events.fire(resultEvent, result)
        })
        .catch(function (error) {
          component.hideDialog()
          console.log(error)
        })
    }
  }
}
