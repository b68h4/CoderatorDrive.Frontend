<template>
  <div class="justify-center" align="center">
    <v-img
      src="logo.jpg"
      class="justify-center"
      max-height="320"
      max-width="240"
    ></v-img>
    <h1 class="text-center" style="font-family: 'OriginTech';">
      Coderator Mobil
    </h1>

    <h3 class="text-center" style="margin-top: 25px;">
      <span id="name">Coderator Mobil</span> mobil cihazınızdan içeriklere
      ulaşabilmeniz için geliştirilmiş bir uygulamadır.
    </h3>

    <v-btn
      id="dwbtn"
      style="margin-top: 15px;color: "
      href="https://cdn.codeksion.net/projects/coderatormobil/latest.apk"
      target="_blank"
      >Buradan edinin!</v-btn
    >
  </div>
</template>

<script>
export default {
  name: "Mobile Download",
};
</script>

<style>
@font-face {
  font-family: "OriginTech";
  src: url("/OriginTech.ttf");
}
#codeksion {
  font-family: "OriginTech";
}
#name {
  font-family: "OriginTech";
}
#dwbtn {
  animation: coloranim 4s infinite;
  animation-delay: 2s;
}
@keyframes coloranim {
  0% {
    background-color: red;
  }
  25% {
    background-color: brown;
  }
  50% {
    background-color: blue;
  }
  100% {
    background-color: green;
  }
}
</style>
