<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="grey" dark v-bind="attrs" v-on="on">
          Серый флаг тут!
        </v-btn>
      </template>

      <v-card>
        <v-img
          src="https://images.freeimages.com/images/large-previews/267/empty-flag-1055914.jpg"
        ></v-img>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false"> Закрыть </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
    };
  },
};
</script>

<style></style>
