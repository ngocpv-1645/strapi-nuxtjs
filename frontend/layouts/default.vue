<template>
  <div>

    <nav class="uk-navbar-container" uk-navbar>
        <div class="uk-navbar-left">

          <ul class="uk-navbar-nav">
              <li>
                <a href="/">Design Playbook
                </a>
              </li>
          </ul>
        </div>

        <div class="uk-navbar-right">
          <ul class="uk-navbar-nav">
              <li v-for="category in categories">
                <router-link :to="{ name: 'categories-id', params: { id: category.id }}" tag="a">{{ category.name }}
                </router-link>
              </li>
          </ul>
        </div>
    </nav>
    <nuxt />
  </div>
</template>

<script>
import categoriesQuery from '~/apollo/queries/category/categories'

export default {
  data() {
    return {
      categories: [],
    }
  },
  apollo: {
    categories: {
      prefetch: true,
      query: categoriesQuery
    }
  }
}

</script>
