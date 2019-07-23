<template>
  <v-app>
    <!-- <v-navigation-drawer app></v-navigation-drawer> -->
    <v-toolbar app></v-toolbar>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer app></v-footer>
    <snackbar />
  </v-app>
</template>

<script>
import snackbar from "./layout/snackbar";
import "vuetify/dist/vuetify.min.css";

export default {
  name: "app",
  components: {
    snackbar
  }
};
</script>

<style></style>
