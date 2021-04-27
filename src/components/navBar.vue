<template>
  <div>
    <v-navigation-drawer v-model="rend" app>
      <menuList />
    </v-navigation-drawer>
    <v-app-bar app color="blue">
      <v-app-bar-nav-icon @click="rend = !rend"></v-app-bar-nav-icon>
      <router-link to="/home">
        <v-btn @click="showMenu()" icon>
          <v-icon>mdi-home</v-icon>
        </v-btn>
      </router-link>
    </v-app-bar>
  </div>
</template>

<script>
import menuList from "@/components/menuList.vue";
import { mapMutations } from "vuex";
export default {
  components: {
    menuList,
  },
  data() {
    return {
      rend: false,
    };
  },
  methods: {
    ...mapMutations(["showMenuHome"]),
    showMenu() {
      this.showMenuHome();
    },
  },
  beforeMount() {
    this.showMenu();
  },
};
</script>

<style scoped></style>
