<template>
  <v-card>
    <v-img height="250" :src="image.url" :title="image.title"></v-img>
    <v-card-title>{{ name }}</v-card-title>
    <v-card-text>
      <v-row align="center" class="mx-0">
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ml-4">4.5 (413)</div>
      </v-row>

      <div class="my-4 subtitle-1">{{ currency }}</div>

      <div v-html="description"></div>
    </v-card-text>
    <v-card-actions>
      <v-btn color="deep-purple lighten-2" text :to="url"> View </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    image: {
      type: Object,
      default: () => {},
    },
    name: {
      type: String,
      required: true,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    url: {
      type: String,
      required: true,
      default: '',
    },
  },
  computed: {
    currency() {
      return new Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency: 'GBP',
      }).format(this.price)
    },
  },
}
</script>
