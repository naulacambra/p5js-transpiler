<template>
  <v-row class="flex" justify="center">
    <v-col sm="12" cols="6" md="3">
      <editor title="Processing" v-model="leftContent" />
      <editor title="p5.js" v-model="rightContent" />
    </v-col>
    <v-col sm="12" cols="6" md="9">
      <p5-viewer />
    </v-col>
  </v-row>
</template>
<script>
import Editor from "./editor";
import P5Viewer from "./p5-viewer";
import processing_to_p5 from "../utils/processing_to_p5";

export default {
  components: {
    editor: Editor,
    "p5-viewer": P5Viewer
  },
  data() {
    return {
      leftContent: "",
      rightContent: ""
    };
  },
  watch: {
    leftContent(value) {
      this.rightContent = processing_to_p5(value);
    }
  }
};
</script>
