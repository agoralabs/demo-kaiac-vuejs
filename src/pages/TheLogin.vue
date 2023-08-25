<template>
    <div>
        <h1 class="grey--text ml-3 mb-4">Login</h1>


        <h2>access_token={{ token.access_token }}</h2>
        <h2>token_type={{ token.token_type }}</h2>

    </div>
</template>

<script>
import { getTokenFromServer } from '../services/TokenService'

export default {
    data() {
        return {
            token: null
        }
    },
    methods: {
        getToken() {
            getTokenFromServer().then(response => {
                console.log(response)
                this.token = response
            })
        }
  },
  mounted () {
    this.getToken();
  }

}
</script>
