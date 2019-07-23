<template>
  <v-container fluid fill-height>
    <v-layout flex wrap justify-center align-center>
      <v-flex sm6 xs6 md6>
        <editor title="p5.js" v-model="leftContent" />
      </v-flex>
      <v-flex md6>
        <editor title="Processing" v-model="rightContent" />
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import Editor from "./editor";
import processing_to_p5 from "../utils/processing_to_p5";

export default {
  components: {
    editor: Editor
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
