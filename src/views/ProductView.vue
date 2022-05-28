<template>
  <div>
    <Navbar />
    <router-view />
    <div>
      <div>
        <v-container>
          <v-row>
            <v-col
              lg="3"
              sm="4"
              cols="12"
              v-for="(product, index) in visiblePages"
              :key="index"
            >
              <v-app id="inspire">
                <br />
                
                <v-card height="620">
                  <router-link :to="{path: `/products/${product.id}`, params: {id: product.id}}">
                  <v-img
                    contain
                    class="white--text mt-4 mx-3"
                    style="width: 80%"
                    height="250"
                    :src="product.image"
                  >
                    <v-container fill-height fluid>
                      <v-layout fill-height>
                        <v-flex xs12 align-end flexbox>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-img>
                  <v-card-title>
                    <div class="mx-5">
                      <span class="title blue--text title-product">{{
                        product.title
                      }}</span
                      ><br />
                      <v-rating
                        readonly
                        small
                        dense
                        background-color="orange"
                        color="orange"
                        length="5"
                        :value="product.rating && product.rating.rate"
                      ></v-rating>
                      <span class="title"> ${{ product.price }}</span>
                    </div>
                  </v-card-title>
                </router-link>
                  <v-card-actions>
                    <v-btn
                      large
                      round
                      depressed
                      class="mx-auto"
                      @click="addCart(product)"
                      >ADD TO CART</v-btn
                    >
                  </v-card-actions>
                </v-card>
              </v-app>
            </v-col>
          </v-row>
        </v-container>

        <v-pagination
          v-model="page"
          :length="Math.ceil(pages.length / perPage)"
        ></v-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'

export default {
  components: {
    Navbar
  },
  data() {
    return {
      page: 1,
      perPage: 12,
      pages: [],
    };
  },
  computed: {
    visiblePages() {
      return this.pages.slice(
        (this.page - 1) * this.perPage,
        this.page * this.perPage
      );
    },
  },
  methods: {
    addCart(product) {
      this.$store.state.cart.push(product)
    },
  },
  created() {
    this.$store.dispatch("products").then((res) => {
      this.pages = res.data;
    });
  },
};
</script>

<style>
.title-product {
  height: 150px;
  overflow: hidden;
}
</style>