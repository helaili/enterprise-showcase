<template>
  <v-row>
    <v-col v-for="repo of repositories" :key="repo" cols="6">
      <repository :repo="getRepository(repo)" />
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    repositories: {
      type: Array,
      required: true
    }
  },
  computed: {
    ...mapGetters({
      repositoryMap: 'getRepositoryMap'
    })
  },
  methods: {
    getRepository (repo) {
      return this.repositoryMap[repo]
    }
  }
}
</script>
