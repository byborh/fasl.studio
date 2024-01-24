<script>
import CartItemList from "./CartItemList.vue"

export default {
    data () {
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

    <div>
        <div class="total-price flex">
            <span>Impôts :</span>
            <b>10 €</b>
        </div>
        <div class="total-price flex">
            <span>Total :</span>
            <b>460 €</b>
        </div>
    </div>
</template>

<style scoped>
.total-price {
    margin: 10px;

}
</style>