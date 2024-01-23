<template>
  <MyCard
    imageUrl="../../public/sneakers/sneakers-11.jpg"
    title="Reebok"
    price="180"
    :isAdded="false"
    :onClickAdd="test"
  />
  <MyCard :onClickAdd="test" />
  <MyCard :onClickAdd="test" />
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

const test = () => {
  alert("hello maan");
  console.log("hello maan");
};
</script>
