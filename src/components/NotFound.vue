<template>
  <v-container>
    <v-card class="text-center card-size">
      <v-card-title class="justify-center"
        >Görünüşe göre artık olmayan bir linke ulaştınız.
      </v-card-title>
      <v-btn color="red" href="/" class="justify-center" target="_self"
        >Ana sayfaya gitmek istiyorum!</v-btn
      >
    </v-card>
  </v-container>
</template>
<script>
export default {
  name: "Not found page",
};
</script>
<style>
.card-size {
  height: 150px;
}
</style>
