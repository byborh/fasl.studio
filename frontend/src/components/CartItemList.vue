<script>
import { inject, ref, onMounted } from "vue";
import CartItem from "./CartItem.vue"

export default {
    props: {
        cartItems: {
            type: Array
        }
    },
    setup (props) {
        const itemsInCart = ref(props.cartItems)

        onMounted(() => {
            console.log("Items in CartItemsList :", itemsInCart.value)
        })
        return{itemsInCart};
    },
    components : {
        CartItem,
    }

    // mounted() {
    //     console.log("Items in CartItemList:", this.itemsInPanier);
    // }
}

</script>

<template>
    <!-- v-for="(item, index) in items"  -->
    <CartItem
    v-for="item in itemsInCart"
        :key="item.id"
        :id="item.id"
        :imageUrl="item.imageUrl"
        :title="item.title"
        :price="item.price"
    />
</template>