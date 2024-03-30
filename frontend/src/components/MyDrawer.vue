<script>
import {ref, onMounted} from 'vue'
import CartItemList from "./CartItemList.vue"
import axios from 'axios'


export default {
    setup () {

        const itemsInPanier = ref([])
        const filteredItems = ref([]);

        const fetchPanier = async () => {
            try {
                const { data } = await axios.get('http://localhost:8080/api/panier')
                itemsInPanier.value = Array.from(new Set(data.map(obj => obj.parentId)))
                console.log(itemsInPanier.value) // A RECUPERER LE PARENTID
            } catch (err) {
                console.log(err)
            }
        }

        const fetchItemsDetails = async () => {
            try {
                if(itemsInPanier.value.length > 0) {
                    const { data } = await axios.get('http://localhost:8080/api/items', {
                        params: {
                            ids: itemsInPanier.value.join(',')
                        }
                    })
                    filteredItems.value = data.filter(item => itemsInPanier.value.includes(item.id));

                    // console.log(filteredItems.value);
                    // console.log(filteredItems.value.__v_raw)
                    // console.log(filteredItems)
                    
                    // console.log(data)
                    // console.log(itemsInPanier.value)


                    
                    // return filteredItems

                    //console.log(data) // tous les vetêments
                    //console.log(filteredItems) // que les vetêments ajouté dans le panier
                }
                return []
            } catch (err) {
                console.log(err)
                return []
            }
        }

        onMounted(async () => {
            await fetchPanier()
            await fetchItemsDetails()
        })

        return{
            itemsInPanier,
            filteredItems
        }
    },
    components : {
        CartItemList,
    }
}

</script>

<template>
    <!--Liste des éléments-->
    <div v-if="filteredItems.length > 0">
        <CartItemList :filteredItems="filteredItems" />
    </div>
    <div v-else>
        <p>Aucun élément dans le panier :(</p>
    </div>
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