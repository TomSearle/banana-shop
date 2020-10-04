<template>
  <v-card>
    <v-container>
      <v-row>
        <v-col cols="4">
          <v-img :src="image.url" :title="image.title"></v-img>
        </v-col>
        <v-col>
          <h2>{{ title }}</h2>

          <div v-html="description"></div>

          <v-btn
            class="snipcart-add-item mt-5"
            :data-item-id="id"
            :data-item-price="price"
            :data-item-url="`${this.$route.fullPath}`"
            :data-item-description="description"
            :data-item-image="image.url"
            :data-item-name="title"
            >Add to basket {{ currency }}</v-btn
          >
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: '',
    },
    image: {
      type: Object,
      default: () => {},
    },
    title: {
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
