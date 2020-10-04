<template>
  <v-row justify="center" align="center">
    <v-col
      v-for="product in allProduct.items"
      :key="product.id"
      cols="4"
      sm="8"
      md="6"
    >
      <product-card v-bind="product" />
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
