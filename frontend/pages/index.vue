<template>
  <div>
    <div v-for="hero in heroes"
        v-if="hero.title='this is banner'"
        id="hero"
        class=" uk-section uk-height-small uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding"
        :data-src="hero.image.url"
        uk-img>
      >
      <h1>
        {{hero.title}}
      </h1>
      <button>{{ hero.button }}</button>
    </div>
    <div class="uk-section">
      <div class="uk-container uk-container-large">
        <Articles :articles="articles"></Articles>
      </div>
    </div>

  </div>
</template>

<script>
import articlesQuery from '~/apollo/queries/article/articles'
import heroQuery from '~/apollo/queries/hero/heroes'
import Articles from '~/components/Articles'

export default {
  data() {
    return {
      articles: [],
      heroes: [],
      api_url: process.env.strapiBaseUri
    }
  },
  components: {
    Articles
  },
  apollo: {
    articles: {
      prefetch: true,
      query: articlesQuery,
      variables () {
        return { id: parseInt(this.$route.params.id) }
      }
    },
    heroes: {
      prefetch: true,
      query: heroQuery,
      variables () {
        return { id: parseInt(this.$route.params.id) }
      }
    }
  }
}
</script>
