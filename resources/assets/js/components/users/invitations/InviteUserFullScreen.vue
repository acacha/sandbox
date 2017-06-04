<template>
    <single-step-form :apiUrl="apiUrl" @onSubmit="onSubmit">
        <template scope="props">
            <ol class="questions">
                <li class="current">
                    <span><label for="email">Email to send invitation?</label></span>
                    <input id="email" name="email" type="email" placeholder="myuser@email.com" v-model="props.form.email" autofocus>
                </li>
            </ol>
        </template>
        <div slot="message">Invitation sent!</div>
    </single-step-form>
</template>

<style src="../css/fade.css"></style>

<script>

  import SingleStepForm from '../../forms/SingleStepForm.vue'

  export default {
    components: {
      'single-step-form' : SingleStepForm
    },
    props: {
      apiUrl: {
        type: String,
        default: 'http://localhost:8080/api/v1/invite/user'
      }
    },
    methods: {
      onSubmit() {
        console.log('OnSubmit event received')
      }
    }
  }

</script>