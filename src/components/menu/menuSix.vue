<template>
  <v-list shaped>
    <v-subheader>6 Фотографий</v-subheader>
    <v-list-item-group>
      <v-list-item v-for="item in items" :key="item">
        <v-list-item-content>
          <v-list-item-title v-text="item.text"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data: () => ({
    items: [
      { text: "1 пункт" },
      { text: "2 пункт" },
      { text: "3 пункт" },
      { text: "4 пункт" },
      { text: "5 пункт" },
      { text: "6 пункт" },
    ],
  }),
  methods: {
    ...mapMutations(["showMenuHome"]),
    showMenu() {
      this.showMenuHome();
    },
  },
};
</script>

<style></style>
