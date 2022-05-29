<template>
  <div class="navbar-main">
    <!-- size lg -->
    <v-app-bar
      v-if="$vuetify.breakpoint.lgOnly"
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
      color="deep-purple"
      dark
      fixed
    >
      <!-- <v-toolbar-title>Toolbar Mobile Menu</v-toolbar-title> -->
      <v-toolbar-items>
        <v-btn text to="/">
          <span class="mr-2">Home</span>
        </v-btn>
        <v-btn text to="/products">
          <span class="mr-2">Products</span>
        </v-btn>
        <v-btn text to="/about">
          <span class="mr-2">About</span>
        </v-btn>
        <v-btn text href="https://github.com/amirpeace1080/shop-fakestoreapi/" target="_blank">
          <span class="mr-2">Source Project</span>
        </v-btn>
        <v-btn text @click="logout">
          <v-icon class="mr-4">mdi-exit-to-app</v-icon>
        </v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>

      <v-toolbar-items>
        <router-link to="/cart">
          <v-btn text>
            <v-icon class="mr-2">mdi-cart</v-icon>
            <span>{{ this.$store.state.cart.length }}</span>
          </v-btn>
        </router-link>
      </v-toolbar-items>
    </v-app-bar>

    <!-- size mobile -->
    <v-app-bar
      v-if="$vuetify.breakpoint.xsOnly"
      color="deep-purple"
      dark
      fixed
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <router-link to="/cart">
        <v-btn text>
          <v-icon class="mr-2">mdi-cart</v-icon>
          <span>{{ this.$store.state.cart.length }}</span>
        </v-btn>
      </router-link>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-system-bar></v-system-bar>
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <v-img src="https://lh3.googleusercontent.com/a-/AOh14GhRowOcRCeXt5Uw7plDEq6qacBrFbyjB-UQ7txUbw=s96-c-rg-br100"></v-img>
          </v-list-item-avatar>
        </v-list-item>

        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="text-h6"> Mohammad Sharifi </v-list-item-title>
            <v-list-item-subtitle>amirpeace1080@gmail.com</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>
            <v-icon>mdi-menu-down</v-icon>
          </v-list-item-action>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list nav dense>
        <v-list-item-group v-model="selectedItem" color="primary">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>
                <router-link to="/">Home</router-link>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>
                <router-link to="/products">Products</router-link>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>
                <router-link to="/about">About</router-link>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>
                <a href="https://github.com/amirpeace1080/shop-fakestoreapi/" target="_blank">Source Project</a>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>


      <template v-slot:append>
        <div class="pa-2">
          <v-btn block @click="logout"> Logout </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      group: null,
    };
  },
  methods: {
    logout() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/login");
      });
    },
  },
};
</script>

<style scoped>
.navbar-main {
  margin-bottom: 50px;
}
</style>