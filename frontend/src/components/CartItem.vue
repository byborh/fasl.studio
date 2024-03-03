<script>
export default {
    props: {
        id: Number,
        imageUrl: String,
        title: String,
        price: String
        // onClickAdd: Function
    },

    setup () {
        return {};
    },
    methods: {
        test() {
          alert("Supprimer");
        }
    }
}
</script>

<template>
    <div class="cartItem">
        <img class="cartItemImg" :src="imageUrl" alt="Elements dans le panier">
        <div class="cartItemText">
            <p>{{ title }}</p>
            <div class="cartItemPrice">
                <p>Prix :</p>
                <b>{{ price }} €</b>
            </div>
        </div>
        <img @click="test()" src="/public/logo/supprimer.png" alt="Supprimer" class="cartItemDelate">
    </div>
</template>

<style scoped>
.cartItem {
    display: flex;
    padding: 10px;
    height: 150px;
    margin: 10px;
    border: 1px solid black;
    border-radius: 10px;

    cursor: pointer;
}

.cartItemImg {
    width: 45%; 
}
.cartItemText {
    padding: 3px;
    overflow: hidden;
    font-size: 14px
}

.cartItemPrice {
    display: flex;
}

.cartItemDelate {
    width: 20px;
    height: 20px;
}
</style>