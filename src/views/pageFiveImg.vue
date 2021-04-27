<template>
  <v-row>
    <v-col v-for="n in 5" :key="n">
      <v-img
        max-height="400"
        max-width="600"
        :src="`https://picsum.photos/600/400?random=${n}`"
      >
        <template v-slot:placeholder>
          <v-progress-circular
            indeterminate
            color="grey lighten-5"
          ></v-progress-circular>
        </template>
      </v-img>
    </v-col>
  </v-row>
</template>

<script>
export default {};
</script>

<style></style>
