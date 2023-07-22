<template>
    <div>
        <h1 class="grey--text">Projects</h1>
        <v-container>
            <v-expansion-panels>
                <v-expansion-panel v-for="project in projects" :key="project.id">
                    <v-expansion-panel-header>{{  project.title }}</v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <h3 class="grey--text">Due by {{ project.due }}</h3>
                        <p>{{ project.description }}</p>
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
        </v-container>
    </div>
</template>

<script>
import { getAllProjects } from '../services/ProjectService'

export default {
    data() {
        return {
            projects: [],
            numberOfProjects: 0
        }
    },
    methods: {
        getAllProjects() {
            getAllProjects().then(response => {
                console.log(response)
                this.projects = response
                this.numberOfProjects = this.projects.length
            })
        }
  },
  mounted () {
    this.getAllProjects();
  }

}
</script>