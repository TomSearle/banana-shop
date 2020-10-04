<template>
  <v-app>
    <v-app-bar flat app>
      <v-btn to="/" text><h1>🍌</h1></v-btn>
      <v-spacer></v-spacer>
      <v-btn icon class="snipcart-checkout">
        <v-badge :value="14.99" bottom left overlap>
          <template slot="badge"
            ><span class="snipcart-total-price"></span
          ></template>
          <v-icon>mdi-cart</v-icon>
        </v-badge>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-main>
    <div
      id="snipcart"
      data-api-key="YzZiMzI4MDQtNGZlMi00Y2Y5LTlhMGMtNzgzYjljY2UyNzBmNjM3Mzc0MDc2MjU2NDI0NDYx"
      hidden
    ></div>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    }
  },
}
</script>
