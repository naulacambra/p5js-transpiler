<template>
  <v-list>
    <v-list-group
      v-for="item in items"
      :key="item.title"
      v-model="item.active"
      prepend-icon="folder"
      no-action
    >
      <template v-slot:activator>
        <v-list-item-content>
          <v-list-item-title v-text="item.title"></v-list-item-title>
        </v-list-item-content>
      </template>

      <v-list-item v-for="(subItem, idx) in item.items" :key="`sbi_${idx}`" @click="() => {}">
        <v-list-item-content>
          <router-link :to="`/transpiler/${id(subItem)}`">
            <v-list-item-title v-text="subItem"></v-list-item-title>
          </router-link>
        </v-list-item-content>
      </v-list-item>
    </v-list-group>
  </v-list>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          title: "Structure",
          items: [
            "Statements and Comments",
            "Coordinates",
            "Width and Height",
            "Setup and Draw",
            "No Loop",
            "Loop",
            "Redraw",
            "Functions",
            "Recursion",
            "CreateGraphics"
          ]
        }
      ]
    };
  },
  methods: {
    id(exampleId) {
      return exampleId.replace(/\s/g, "_").toLowerCase();
    }
  }
};
</script>

