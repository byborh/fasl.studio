<template>
  <br /><br /><br /><br /><br /><br /><br />
  <div class="pieces q-pa-md">
    <!--Pièce-->
    <MyCard />
    <MyCard />
    <MyCard />
    <MyCard />
    <br /><br /><br /><br /><br /><br /><br />
  </div>
</template>

<script>
import MyCard from "../components/MyCard.vue";

export default {
  data() {
    return {};
  },
  components: {
    MyCard,
  },
};
</script>

<style scoped></style>

<!-- anciennes versions : -->

<!-- <div class="piece q-gutter-md row items-start">
      <img src="../../public/like.png" alt="like" class="like" />
      <img v-for="link in pieceImg" :key="link" :src="link" class="piece-img" />
      <p v-for="title in pieceTitle" :key="title">{{ title }}</p>
    </div> -->
