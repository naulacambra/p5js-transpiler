<template>
  <v-navigation-drawer v-model="drawer" app>
    <v-list dense>
      <v-list-item @click="() => {}">
        <v-list-item-action>
          <v-icon>home</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <router-link to="/">
            <v-list-item-title>Editor</v-list-item-title>
          </router-link>
        </v-list-item-content>
      </v-list-item>
      <v-list-item @click="() => {}">
        <v-list-item-action>
          <v-icon>contact_mail</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <router-link to="/examples">
            <v-list-item-title>Examples</v-list-item-title>
          </router-link>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
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

