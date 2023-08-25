<template>
    <div>
        <h1 class="grey--text ml-3 mb-4">Dashboard</h1>
        <v-layout class="ml-3">
            <div class="float-left">
                <v-btn depressed class="mb-4 mr-3" @click="sortBy('name')">
                    <span>Sort</span>
                    <v-icon right>mdi-folder</v-icon>
                </v-btn>
                <v-btn depressed class="mb-4" @click="sortBy('responsible.name')">
                    <span>Sort</span>
                    <v-icon right>mdi-account</v-icon>
                </v-btn>
            </div>
        </v-layout>
        <v-container>
            <v-card v-for="project in projects" :key="project.id" :class="`project ${project.status}`">
                <v-layout row wrap class="mx-4 mb-8 pa-4">
                    <v-flex xs12 md6 class="pb-1">
                        <div class="caption grey--text">Project Title</div>
                        <div>{{ project.name }}</div>
                    </v-flex>
                    <v-flex xs6 sm4 md2 class="pb-1">
                        <div class="caption grey--text">Person Name</div>
                        <div>{{ project.responsible.name }} {{ project.responsible.lastname }}</div>
                    </v-flex>
                    <v-flex xs6 sm4 md2 class="pb-1">
                        <div class="caption grey--text">Due Date</div>
                        <div>{{ project.scheduled_at }}</div>
                    </v-flex>
                    <v-flex xs6 sm4 md2 class="pb-1 d-flex align-center justify-sm-end">
                        <v-chip :class="`white--text ${project.status}`">{{ project.status }}</v-chip>
                    </v-flex>
                </v-layout>
            </v-card>
        </v-container>
    </div>
</template>

<script>
import { getAllProjects, createProject } from '../services/ProjectService'

export default {
    data() {
        return {
            projects: [],
            numberOfProjects: 0
        }
    },
    methods: {
        sortBy(prop) {
            this.projects.sort((a,b) => a[prop] < b[prop]? -1 : 1);
        },
        getAllProjects() {
            getAllProjects().then(response => {
                console.log(response)
                this.projects = response.response
                this.numberOfProjects = this.projects.length
            })
        },
        createProject(data) {
            console.log('data:::', data)
            createProject(data).then(response => {
                console.log(response);
                this.getAllProjects();
            });
        }
  },
  mounted () {
    this.getAllProjects();
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