<template>
  <div>
    <h3>{{ title }}</h3>
    <codemirror v-model="content" :options="cmOptions" />
  </div>
</template>
<script>
import { codemirror } from "vue-codemirror";
import "codemirror/mode/javascript/javascript.js";
import "codemirror/lib/codemirror.css";

export default {
  components: {
    codemirror
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
