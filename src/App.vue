<template>
  <v-app>
    <!-- <v-navigation-drawer app></v-navigation-drawer> -->
    <toolbar :app="app"></toolbar>
    <v-content>
      <v-container class="fill-height" fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer app></v-footer>
    <snackbar />
  </v-app>
</template>

<script>
import snackbar from "./layout/snackbar";
import toolbar from "./layout/toolbar";
import "vuetify/dist/vuetify.min.css";

export default {
  name: "app",
  components: {
    snackbar,
    toolbar
  }
};
</script>

<style></style>
