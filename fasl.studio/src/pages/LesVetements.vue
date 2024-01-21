<template>
  <br /><br /><br /><br /><br /><br /><br />
  <div class="vetements q-pa-md">
    <!--Pièce-->
    <h5>Tous les pièces</h5>
    <div class="pieces row justify-center">
      <MyCards />
    </div>
    <br /><br /><br /><br /><br /><br /><br />
  </div>
</template>

<script>
import MyCards from "../components/MyCards.vue";

export default {
  data() {
    return {};
  },
  components: {
    MyCards,
  },
};
</script>

<style scoped>
.vetements {
  margin: 0;
  padding: 0;
}
</style>
