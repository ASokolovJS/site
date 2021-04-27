<template>
  <div>
    <v-list shaped>
      <v-subheader>Титульная страница</v-subheader>
      <v-list-item-group>
        <v-list-item-content>
          <v-list-item>
            <router-link to="/pageEighImg"
              ><span @click="showEight()"
                >Страница с 8 картинками</span
              ></router-link
            >
          </v-list-item>
          <v-list-item>
            <router-link to="/pageFlag"
              ><span @click="showFlag()">Страница с Флагом</span></router-link
            >
          </v-list-item>
          <v-list-item>
            <router-link to="/pageSixImg"
              ><span @click="showSix()">
                Страница с 6 картинками</span
              ></router-link
            >
          </v-list-item>
          <v-list-item>
            <router-link to="/pageFiveImg"
              ><span @click="showFive()">
                Страница с 5 картинками</span
              ></router-link
            >
          </v-list-item>
        </v-list-item-content>
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations([
      "showMenuFive",
      "showMenuSix",
      "showMenuEight",
      "showMenuFlag",
    ]),

    showFive() {
      this.showMenuFive();
    },
    showSix() {
      this.showMenuSix();
    },
    showEight() {
      this.showMenuEight();
    },
    showFlag() {
      this.showMenuFlag();
    },
  },
};
</script>

<style></style>
