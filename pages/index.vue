<template>
  <v-row>
    <v-col v-for="repo of repositories.slice(pageStart, pageStart+pageSize)" v-bind:key="repo.name" cols="6">
      <v-card>   
        <v-card-title>
          {{repo.name}}
        </v-card-title>
        <v-card-subtitle>{{repo.full_name}}</v-card-subtitle>
        <v-card-text>
          <p class="description">{{repo.description || '&nbsp;'}}</p>
        </v-card-text>
        <v-card-text>
          <v-chip-group column>
            <v-chip small v-for="topic of repo.topics" v-bind:key="topic">{{topic}}</v-chip>
          </v-chip-group>
        </v-card-text>
        <v-card-actions v-bind:class="{ 'no-topic': repo.topics.length == 0 }">
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

.v-card {
  height: 100%;
}

.no-topic {
  bottom: 0;
  position: absolute;
}

</style>
