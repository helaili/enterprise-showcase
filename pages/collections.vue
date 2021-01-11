<template>
  <v-container>
    <div class="text-h1 gradient-text hxl">Collections</div>
    <v-card v-for="collection of collections" :key="collection.slug" class="collection-card">
      <NuxtLink :to="{ name: 'collection-slug', params: { slug: collection.slug } }" class="plain-link">
        <v-card-title>
          {{ collection.title }}
        </v-card-title>
        <v-card-subtitle>
          {{ collection.description }}
        </v-card-subtitle>
      </NuxtLink>
    </v-card>
  </v-container>
</template>

<script>
  export default {
    async asyncData({ $content, params }) {
      const collections = await $content('collections', params.slug)
        .only(['title', 'description', 'slug'])
        .sortBy('createdAt', 'asc')
        .fetch()

      return {
        collections
      }
    }
  }
</script>



<style lang="scss" scoped>
.collection-card {
  margin-bottom: 4px;
}
</style>