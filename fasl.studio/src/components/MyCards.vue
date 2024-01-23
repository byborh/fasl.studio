<template>
  <MyCard
    imageUrl="../../public/sneakers/sneakers-11.jpg"
    title="Reebok"
    price="180"
    isAdded="false"
  />
  <MyCard />
  <MyCard />
  <MyCard />
  <MyCard />
  <MyCard />
</template>

<script>
import MyCard from "./MyCard.vue";

export default {
  data() {
    return {};
  },
  components: {
    MyCard,
  },
};
</script>
