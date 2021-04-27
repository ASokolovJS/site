<template>
  <v-app>
    <navBar />
    <Content />
  </v-app>
</template>

<script>
import navBar from "./components/navBar.vue";
import Content from "./components/content.vue";

export default {
  name: "App",
  components: {
    navBar,
    Content,
  },
};
</script>
<style scoped></style>
