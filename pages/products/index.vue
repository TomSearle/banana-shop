<template>
  <v-row>
    <v-col v-for="product in allProduct.items" :key="product.id" cols="4">
      <product-card v-bind="product"></product-card>
    </v-col>
  </v-row>
</template>

<script>
import productsQuery from '~/apollo/queries/product/products'

import ProductCard from '~/components/ProductCard'

export default {
  components: {
    ProductCard,
  },
  data() {
    return {
      allProduct: {},
    }
  },
  apollo: {
    allProduct: {
      prefetch: true,
      query: productsQuery,
    },
  },
}
</script>
