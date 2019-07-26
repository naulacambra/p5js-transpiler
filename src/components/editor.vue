<template>
  <div>
    <v-row class="flex">
      <h3>{{ title }}</h3>
      <v-spacer />
      <btn-to-copy :value="content" />
    </v-row>
    <codemirror v-model="content" :options="cmOptions" />
  </div>
</template>
<script>
import { codemirror } from "vue-codemirror";
import "codemirror/mode/javascript/javascript.js";
import "codemirror/lib/codemirror.css";

import BtnToCopy from "./btn-to-copy";

export default {
  components: {
    codemirror,
    "btn-to-copy": BtnToCopy
  },
  props: {
    title: { type: String, default: "" },
    value: { type: String, default: "" }
  },
  data() {
    return {
      content: "",
      cmOptions: {
        mode: "text/javascript",
        lineNumbers: true
      }
    };
  },
  watch: {
    content(value) {
      this.$emit("input", value);
    },
    value(value) {
      this.content = value;
    }
  }
};
</script>
