<template>
  <v-container>
    <v-row>
      <v-col v-for="repo of getCurrentPageRepositories()" :key="repo.full_name" cols="6">
        <repository :repo="repo" />
      </v-col>
    </v-row>
    <v-row align="center">
      <v-col>
        <v-pagination v-model="page" :length="totalPages" @input="goToPage" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import Repository from '~/components/global/Repository.vue'

export default {
  components: { Repository },
  data () {
    return {
      page: 1,
      pageStart: 0,
      pageSize: 40,
      totalPages: 0
    }
  },
  computed: {
    ...mapGetters({
      repositories: 'getRepositories'
    })
  },
  created () {
    this.totalPages = Math.floor(this.repositories.length / this.pageSize) + 1
  },
  methods: {
    getCurrentPageRepositories () {
      if (this.repositories) {
        return this.repositories.slice(this.pageStart, this.pageStart + this.pageSize)
      } else {
        return []
      }
    },
    goToPage (input) {
      this.pageStart = (input - 1) * this.pageSize
    }
  }
}
</script>
