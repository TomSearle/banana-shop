<template>
  <v-row justify="center" align="center">
    <v-col cols="4" sm="8" md="6">
      <h1>hi</h1>
    </v-col>
  </v-row>
</template>

<script>
import productQuery from '~/apollo/queries/product/product'

export default {
  data() {
    return {
      product: {},
    }
  },
  apollo: {
    product: {
      prefetch: true,
      query: productQuery,
      variables() {
        return { url: `/catalog/${this.$route.params.slug}/` }
      },
    },
  },
}
</script>
