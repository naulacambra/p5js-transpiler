<template>
  <v-app>
    <navigation v-model="drawer" />
    <toolbar v-model="drawer" />
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
import navigation from "./layout/navigation";
import "./utils/string_extensions";
import "vuetify/dist/vuetify.min.css";


export default {
  name: "app",
  components: {
    snackbar,
    toolbar,
    navigation
  },
  data() {
    return {
      drawer: null
    };
  }
};
</script>

<style></style>
