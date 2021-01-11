<template>
  <article>
    <v-container>
      <div class="text-h1 gradient-text hxl">{{ collection.title }}</div>
      <div class="text-h4">{{ collection.description }}</div>
    </v-container>
    <v-container>
      <nuxt-content :document="collection" class="text-body-2"/>
      <collection :repositories="collection.repositories"></collection>
    </v-container>
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const collection = await $content('collections', params.slug).fetch()

    return { collection }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
  }
}
</script>