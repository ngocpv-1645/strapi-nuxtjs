<template>
  <div>
    <div class="uk-child-width-1" uk-grid>
      <div>
        <div class="uk-child-width-1-3@s uk-grid-match uk-grid-large uk-text-center" uk-grid>
          <router-link
            v-for="article in articles"
            :to="{ name: 'articles-id', params: { id: article.id } }"
            class="uk-link-reset"
            :key="article.id"
          >
            <div class="uk-card uk-card-muted">
              <div class="uk-card-media-top">
                <img :src="article.image.url" alt="" height="100" />
              </div>
              <div class="uk-card-body">
                <p
                  id="category"
                  v-if="article.category"
                  class="uk-text-uppercase"
                >
                  {{ article.category.name }}
                </p>
                <p id="title" class="uk-text-large">{{ article.title }}</p>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      api_url: process.env.strapiBaseUri
    };
  },
  props: {
    articles: Array
  },
};
</script>
