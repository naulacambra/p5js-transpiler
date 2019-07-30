<template>
  <v-app-bar app color="indigo" dark>
    <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
    <v-toolbar-title>p5.js transpiler</v-toolbar-title>
  </v-app-bar>
</template>
<script>
export default {
  props: {
    value: { type: Boolean, default: null }
  },
  data() {
    return {
      drawer: this.value
    };
  },
  watch: {
    value(nv) {
      this.drawer = nv;
    },
    drawer(nv) {
      this.$emit("input", nv);
    }
  }
};
</script>
