<template>
  <div class="piece q-gutter-md row items-start relative-position">
    <img
      src="../../public/like.png"
      alt="like"
      class="like absolute top-0 left-0"
    />
    <img src="../../public/sneakers/sneakers-1.jpg" class="piece-img" />
    <p>Jordan 1 Univercity Blue</p>
    <div class="flex justify-between">
      <div class="">
        <span>Prix :</span>
        <b>150€</b>
      </div>
    </div>
  </div>
</template>

<style>
.piece {
  width: 180px;
  min-height: 240px;
  border: 0.2px solid black;
  padding: 4px;
  cursor: pointer;
  border-radius: 30px;
  box-shadow: inset;
  margin-bottom: 25px;
}
.piece:hover {
  translate: -2px;
  transition: 0.8s;
}
.piece-img {
  padding-right: 20px;
  width: 100%;
  height: 150px;
  overflow: hidden;
}

.piece-img img {
  width: 100%;
}

.like {
  height: 20px;
  width: 20px;
}
</style>
