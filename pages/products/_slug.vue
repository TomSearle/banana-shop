<template>
  <div>
    <v-btn class="mb-4" to="/products" text>Back to products</v-btn>

    <product-description v-if="product" v-bind="product"></product-description>
  </div>
</template>

<script>
import productQuery from '~/apollo/queries/product/product'

import ProductDescription from '~/components/ProductDescription'

export default {
  components: {
    ProductDescription,
  },
  data() {
    return {
      product: null,
    }
  },
  apollo: {
    product: {
      prefetch: true,
      query: productQuery,
      variables() {
        return { url: `/products/${this.$route.params.slug}/` }
      },
    },
  },
}
</script>
