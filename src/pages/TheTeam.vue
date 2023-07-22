<template>
    <div>
        <h1 class="grey--text mb-3">Teams</h1>
        <v-layout row wrap>
            <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.id">
                <v-card class="ma-4">
                    <div class="d-flex justify-center pt-4 pb-2">
                        <v-avatar size="100">
                            <img :src="person.avatar">
                        </v-avatar>
                    </div>
                    <div class="d-flex justify-center">
                        <v-card-title class="pa-0">{{ person.firstname }} {{ person.surname }}</v-card-title>
                    </div>
                    <v-card-subtitle class="text-center pa-0">{{ person.jobRoles[0].name }}</v-card-subtitle>
                    <v-card-actions class="d-flex justify-center pb-3">
                        <v-btn depressed>
                            <v-icon left>mdi-message</v-icon>
                            <span>Message</span>
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
import { getTeam } from '../services/TeamService'

export default {
    data() {
        return {
            team: [],
            numberOfMembers: 0
        }
    },
    methods: {
        getTeam() {
            getTeam().then(response => {
                console.log(response)
                this.team = response
                this.numberOfMembers = this.team.length
            })
        }
  },
  mounted () {
    this.getTeam();
  }

}
</script>