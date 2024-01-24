<script>
import MyCard from "./MyCard.vue";

export default {
  data() {
    return {};
  },
  components: {
    MyCard,
  },
  methods: {
    onClickAdd() {
      alert("hello maan");
    }
  }
};
</script>


<template>
  <MyCard
    imageUrl="../../public/sneakers/sneakers-11.jpg"
    title="Reebok"
    price="180"
    :isAdded="false"
    :onClickAdd="onClickAdd"
  />
  <MyCard
    imageUrl="../../public/sneakers/sneakers-12.jpg"
    title="Vans"
    price="70"
    :isAdded="true"
    :onClickAdd="onClickAdd"
  />
    <MyCard
    imageUrl="../../public/sneakers/sneakers-12.jpg"
    title="Vans"
    price="70"
    :isAdded="true"
    :onClickAdd="onClickAdd"
  />
</template>