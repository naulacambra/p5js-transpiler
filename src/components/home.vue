<template>
  <v-layout flex justify-center>
    <v-flex sm12 xs6 md3>
      <editor title="Processing" v-model="leftContent" />
      <editor title="p5.js" v-model="rightContent" />
    </v-flex>
    <v-flex sm12 xs6 md9>
      <p5-viewer />
    </v-flex>
  </v-layout>
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
