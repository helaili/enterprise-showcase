<template>
  <v-container>
    <v-row>
      <v-col v-for="repo of repositories.slice(pageStart, pageStart+pageSize)" v-bind:key="repo.full_name" cols="6">
        <v-card>   
          <v-card-title>
            <a v-bind:href="repo.html_url">{{repo.name}}</a>
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
            <v-spacer />
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row align="center">
      <v-col>
        <v-pagination v-model="page" :length="totalPages" @input="goToPage"></v-pagination>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import repoFile from '~/repositories.json'

export default {
  data() {
    return{
      repositories: repoFile,
      page: 1,
      pageStart: 0,
      pageSize: 40
    }
  }, 
  computed: {
    totalPages: function() {
      return Math.floor(this.repositories.length / this.pageSize) + 1
    }
  },
  methods: {
    goToPage: function(input) {
      this.pageStart = (input-1) * this.pageSize
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
