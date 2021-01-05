<template>
  <v-row justify="center" align="center">
    <v-col v-for="repo of repositories.slice(pageStart, pageStart+pageSize)" v-bind:key="repo.name" cols="6">
      <v-card height="200">  
        <v-card-title class="headline">
          {{repo.name}}
        </v-card-title>
        <v-card-subtitle>{{repo.full_name}}</v-card-subtitle>
        <v-card-text>
          <p class="description">{{repo.description || '&nbsp;'}}</p>
          <v-chip-group>
            <v-chip v-for="topic of repo.topics" v-bind:key="topic">{{topic}}</v-chip>
          </v-chip-group>
        </v-card-text>
        <v-card-actions class="repo_stats">
          <v-btn>
            <v-icon left>mdi-eye-outline</v-icon>
            {{repo.watchers_count}}
          </v-btn>
          <v-btn>
            <v-icon left>mdi-star-outline</v-icon>
            {{repo.stargazers_count}}
          </v-btn>
          <v-btn>
            <v-icon left>mdi-source-fork</v-icon>
            {{repo.forks_count}}
          </v-btn>
          <v-spacer />
          
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import repoFile from '~/repositories.json'

export default {
  data() {
    return{
      repositories: repoFile,
      pageStart: 0,
      pageSize: 30
    }
  }
}
</script>

<style scoped>
.description {
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.repo_stats {
  position: absolute; 
  bottom: 0px; 
}
</style>
