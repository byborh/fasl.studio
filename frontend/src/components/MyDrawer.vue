<script>
import CartItemList from "./CartItemList.vue"

export default {
    setup () {
        return;
    },
    components : {
        CartItemList,
    }
}


</script>

<template>
    <!--Liste des éléments-->
    <CartItemList />

    <div style="margin-top: 30px">
        <div class="total-price flex">
            <span>Impôts :</span>
            <b>10 €</b>
        </div>
        <div class="total-price flex">
            <span>Total :</span>
            <b>460 €</b>
        </div>
        <div class="total-price">
            <q-btn disabled="" push color="green" label="Commander" class="btn-cart" />
        </div>
    </div>
</template>

<style scoped>
.total-price {
    margin: 10px;
}

.btn-cart {
    width: 100%;
    cursor: pointer;
}
</style>