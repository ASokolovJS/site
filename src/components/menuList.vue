<template>
  <div>
    <menuHome v-show="$store.state.home" />
    <menuFive v-show="$store.state.five" />
    <menuSix v-show="$store.state.six" />
    <menuEight v-show="$store.state.eight" />
    <menuFlag v-show="$store.state.flag" />
  </div>
</template>

<script>
import menuHome from "@/components/menu/menuHome.vue";
import menuFive from "@/components/menu/menuFive.vue";
import menuSix from "@/components/menu/menuSix.vue";
import menuEight from "@/components/menu/menuEight.vue";
import menuFlag from "@/components/menu/menuFlag.vue";

export default {
  components: {
    menuHome,
    menuFive,
    menuSix,
    menuEight,
    menuFlag,
  },
};
</script>

<style></style>
