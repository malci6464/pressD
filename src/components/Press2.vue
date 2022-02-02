<template>
  <div>
    <div>
      <div id="widget-reader-container" style="width: 100%; height: 100%"></div>
    </div>
  </div>
</template>
<script>
import { createWidget } from "@/plugins/pr-widget-reader.cjs.js";

export default {
  name: "Press2",
  mounted() {
    let readerWidget = createWidget({
      element: document.getElementById("widget-reader-container"),
    });
  },
};
</script>