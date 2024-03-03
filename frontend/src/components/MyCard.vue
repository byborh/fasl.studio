<script setup>
defineProps({
  id: Number,
  imageUrl: String,
  title: String,
  price: String,
  isAdded: Boolean,
  onClickAdd: Function
});
</script>

<template>
  <div class="piece q-gutter-md items-start relative-position .col-6 .col-md-4">
    <img
      :src="
        !isAdded
          ? '/public/logo/panier.png'
          : '/public/logo/panier-2.png'
      "
      alt="ajouter au panier"
      class="panier absolute top-0 left-0"
      @click="onClickAdd()"
    />
    <img :src="imageUrl" class="piece-img" />
    <p class="u-color">{{ title }}</p>
      <span>Prix :</span>
      <b>{{ price }}€</b>
  </div>
</template>

<style scoped>
.piece {
  width: 200px;
  max-width: 220px;
  min-height: 240px;
  border: 0.2px solid black;
  padding: 4px;
  cursor: pointer;
  border-radius: 30px;
  box-shadow: inset;
  margin-bottom: 25px;
  margin-left: 2%;
  margin-right: 2%;
}
.piece:hover {
  translate: -2px;
  transition: 0.8s;
}
.piece-img {
  padding-right: 28px;
  width: 100%;
  height: 150px;
  overflow: hidden;
}

.panier {
  height: 20px;
  width: 20px;
}

.piece b {
  margin-right: 10px;
}

.price-div {
  padding-top: 8px;
}
</style>