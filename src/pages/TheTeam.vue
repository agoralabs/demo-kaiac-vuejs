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
                        <v-card-title class="pa-0">{{ person.name }}</v-card-title>
                    </div>
                    <v-card-subtitle class="text-center pa-0">{{ person.role }}</v-card-subtitle>
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
export default {
    data() {
        return {
            team: [
                { id: 1, name : 'Cathy Coulaly', role: 'Team Lead', avatar: '/team-member-1.jpg'},
                { id: 2, name : 'Joseph Future', role: 'Frontend Developer', avatar: '/team-member-2.jpg'},
                { id: 3, name : 'Dorine Michou', role: 'Backend Developer', avatar: '/team-member-3.jpg'},
                { id: 4, name : 'Wesley Weezy', role: 'Frontednd Developer', avatar: '/team-member-4.jpg'},
                { id: 5, name : 'Marie Jo', role: 'Database Admin', avatar: '/team-member-5.jpg'},
                { id: 6, name : 'Charles Pika', role: 'Full Stack Developer', avatar: '/team-member-6.jpg'},
                { id: 7, name : 'Boris John', role: 'Full Stack Developer', avatar: '/team-member-7.jpg'},
            ]
        }
    }
}
</script>