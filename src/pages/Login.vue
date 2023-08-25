<template>
    <div>
        <h1 class="grey--text ml-3 mb-4">Login</h1>


        <h2>access_token={{ token.access_token }}</h2>
        <h2>token_type={{ token.token_type }}</h2>

    </div>
</template>

<script>
import { getToken } from '../services/TokenService'

export default {
    data() {
        return {
            token: null
        }
    },
    methods: {
        getToken() {
            getToken().then(response => {
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

<style>
.project.completed {
    border-left: 4px solid turquoise;
}

.project.ongoing {
    border-left: 4px solid orange;
}

.project.overdue {
    border-left: 4px solid tomato;
}

.v-chip.completed {
    background: turquoise !important;
}
.v-chip.ongoing {
    background: orange !important;
}
.v-chip.overdue {
    background: tomato !important;
}
</style>