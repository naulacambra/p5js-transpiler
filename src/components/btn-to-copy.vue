<template>
  <v-btn
    color="primary"
    flat
    icon
    v-clipboard:copy="value"
    v-clipboard:success="onCopy"
    v-clipboard:error="onError"
  >
    <v-icon>file_copy</v-icon>
  </v-btn>
</template>
<script>
import bus from "../utils/bus.js";

export default {
  props: {
    value: { type: String, default: "" }
  },
  methods: {
    onCopy() {
      bus.$emit("snackbar", "You just copied!");
      // alert("You just copied: " + e.text);
    },
    onError() {
      bus.$emit("snackbar", "Failed to copy texts!");
      // alert("Failed to copy texts" + e.text);
    }
  }
};
</script>
