<script>
import MyCard from "src/components/MyCard.vue";

export default {
  props: { // = defineProps
    items: {
      type: Array
    }
  },
  setup() {
    const onClickAdd = () => {
      alert("hello maan");
    }

    return {onClickAdd};
  },
  components: {
    MyCard,
  }
};
</script>


<template>
  <!-- <MyCard
    imageUrl="../../public/sneakers/sneakers-11.jpg"
    title="Reebok"
    price="180" 
    :isAdded="false"
    :onClickAdd="onClickAdd"
  />

  <MyCard
    imageUrl="../../public/sneakers/sneakers-10.jpg"
    title="Jordan 4"
    price="240"
    :isAdded="true"
    :onClickAdd="onClickAdd"
  /> -->
  <MyCard
    v-for="item in items"
    
    :key="item.id"
    :imageUrl="item.imageUrl"
    :title="item.title"
    :price="item.title"
    
    :isAdded="false"
    :onClickAdd="onClickAdd"
  />
</template>
