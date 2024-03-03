<script>
import CartItem from "./CartItem.vue"

export default {
    props: {
        itemsInPanier: {
            type: Array
        }
    },
    setup () {
        return{};
    },
    components : {
        CartItem,
    },
    mounted() {
        console.log("Items in CartItemList:", this.itemsInPanier);
    }
}

</script>

<template>
    <!-- v-for="(item, index) in items"  -->
    <CartItem
    v-for="item in filteredItems"
        :key="item.id"
        :id="item.id"
        :imageUrl="item.imageUrl"
        :title="item.title"
        :price="item.price"
    />
</template>