<template>
  <v-card>
    <v-card-title>
      <a :href="repo.html_url" class="plain-link">{{ repo.name }}</a>
    </v-card-title>
    <v-card-subtitle>
      <a :href="repo.html_url" class="plain-link">{{ repo.full_name }}</a>
    </v-card-subtitle>
    <v-card-text>
      <p class="description">
        {{ repo.description || '&nbsp;' }}
      </p>
    </v-card-text>
    <v-card-text>
      <v-chip-group column>
        <v-chip v-for="topic of repo.topics" :key="topic" small>
          {{ topic }}
        </v-chip>
      </v-chip-group>
    </v-card-text>
    <v-card-actions :class="{ 'no-topic': repo.topics.length == 0 }">
      <v-btn>
        <v-icon left>
          mdi-eye-outline
        </v-icon>
        {{ repo.watchers_count }}
      </v-btn>
      <v-btn>
        <v-icon left>
          mdi-star-outline
        </v-icon>
        {{ repo.stargazers_count }}
      </v-btn>
      <v-btn>
        <v-icon left>
          mdi-source-fork
        </v-icon>
        {{ repo.forks_count }}
      </v-btn>
      <v-spacer />
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    repo: {
      type: Object,
      required: true
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
