<template>
  <v-row class="flex" justify="center">
    <v-col sm="12" cols="6" md="4">
      <div class="headline mb-2">{{ title }}</div>
      <v-col class="pa-10">
        <editor title="Processing" v-model="leftContent" />
      </v-col>
      <v-spacer></v-spacer>
      <v-col class="pa-10">
        <editor title="p5.js" v-model="rightContent" />
      </v-col>
    </v-col>
    <v-col sm="12" cols="6" md="8">
      <p5-viewer />
    </v-col>
  </v-row>
</template>
<script>
import Editor from "./editor";
import P5Viewer from "./p5-viewer";
import processing_to_p5 from "../utils/processing_to_p5";
import examples from "../assets/examples/structure";

export default {
  components: {
    editor: Editor,
    "p5-viewer": P5Viewer
  },
  props: {
    exampleId: { type: String, default: "" }
  },
  data() {
    return {
      leftContent: "",
      rightContent: ""
    };
  },
  computed: {
    title() {
      if (!this.exampleId) return "";
      return this.exampleId.replace(/_/g, " ").toCapitalize();
    }
  },
  watch: {
    leftContent(value) {
      this.rightContent = processing_to_p5(value);
    }
  },
  mounted() {
    if (this.exampleId) {
      this.leftContent = examples[this.exampleId];
    }
  }
};
</script>
