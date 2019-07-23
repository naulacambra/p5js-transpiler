<template>
  <v-snackbar v-model="snackbar" bottom>
    {{ text }}
    <v-btn color="pink" flat @click="snackbar = false">
      Close
    </v-btn>
  </v-snackbar>
</template>
<script>
import bus from "../utils/bus";
export default {
  data() {
    return {
      text: "",
      snackbar: null
    };
  },
  created() {
    bus.$on("snackbar", text => {
      this.text = text;
      this.snackbar = true;
    });
  }
};
</script>
