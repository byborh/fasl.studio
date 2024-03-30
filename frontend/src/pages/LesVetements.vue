<script>
import { ref, onMounted, provide } from "vue";
import MyCards from "../components/MyCards.vue";
import axios from "axios";
import { useItemsStore } from "src/stores/itemsStore";
import { useCartStore } from "src/stores/CartStore";

const items = ref ([ // ref met/transforme tout en objet : [ value : {} ]
])

const cart = ref ([])
// const { UUID } = require('bson'); // Générer une priméry key

export default {
  setup() {
    const itemsStore = useItemsStore() // Utiliser Store(pinia)
    // const cartStore = useCartStore()

    const fetchItems = async () => {
      await itemsStore.fetchItemsFromBackend()
      console.log("dans vetements : ", itemsStore.items)
    }

    const fetchPanier = async () => {
      try{
        const { data: panier } = await axios.get('http://localhost:8080/api/panier')
        
        items.value = items.value.map((item) => {
          const cartItem = panier.find((cartItem) => cartItem.parentId === item.id)
        
          if(!cartItem) {
            return item
          }
          return {
            ...item,
            isAdded: true,
            // cartId: cart.id
          }
        })
      } catch(err) {
        console.log(err)
      }
    }

    const addToPanier = async (item) => {
      useCartStore.addToCart(item)
    }

    onMounted(async () => {
      await fetchItems()
      await fetchPanier()
    })

    provide('addToPanier', addToPanier) // exporter/récupérer qqch de global :
                                        // component1 -> component2 -> component3 -> component4
                                        // component1 -----------------------------> component4

    return {
      items: itemsStore.items,
      trier: '',
      searchEl: '',
      // elementRestants: 0,
      parentItems: '',
      addToPanier
    };
  },
  components: {
    MyCards,
  },
  methods: {
    sortEl() {
      if(this.trier == 'price') {
        items.value.sort((a, b) => a.price - b.price)
        // items.value.sort(function (a, b) { // A COMPRENDRE
        //   if(a.price > b.price) {
        //     return 1
        //   } else {
        //     return -1
        //   }
        // })
      } else if(this.trier == 'priceDesc') {
        items.value.sort((a, b) => b.price - a.price)
      } else {
        items.value.sort((a, b) => a.title.localCompare(b.title))
      }
    },

    search() {
      const searchText = this.searchEl.value.toLowerCase().trim()
      if(searchEl !== '') {
        // Filtrer les éléments dont le titre contient le texte de recherche
        const searchText = items.value.filter(item =>  // A COMPRENDRE
          item.title.toLowerCase().includes(searchText)
        )

        items.value = searchText
        if (searchText.length === 0) {
          alert("y'a plus rien")
          items.value = parentItems
        }
      }
    }, 
  }
};
</script>

<template>
  <br /><br /><br /><br /><br /><br /><br />
  <div class="vetements q-pa-md">
    <!--Pièce-->
    <div class="flex justify-between" style="margin-bottom: 20px; align-items: center;">
 
      <div class="flex justify-between entete">
        <select class="trierEntete" id="select-piece" v-model="trier" @click="sortEl">
          <option value="default" disabled>Tirer par ...</option>
          <option value="title">Par ordre alphabétique</option>
          <option value="price">Par prix (du moins chère au plus chère)</option>
          <option value="priceDesc">Par prix (du plus chère au moins chère)</option>
        </select>

        <div class="rechercherEntete doc-search__field rounded-borders row items-center no-wrap q-pl-sm q-pr-md">
          <input v-model="searchEl" class="col search-piece" name="search" placeholder="Rechercher une pièce">
          <i @click="search()" class="q-icon notranslate material-icons doc-search__icon cursor-pointer" aria-hidden="true" role="presentation" style="font-size: 24px;">search</i>
        </div>
      </div>

    </div>
    <div class="pieces row justify-center">
    
      <MyCards :items="items" @addToPanier="addToPanier" />
    </div>

    <br /><br /><br /><br /><br /><br /><br />

  </div>
</template>



<style scoped>
.vetements {
  margin: 0;
  padding: 0;
}
.search-piece {
  outline: none;
}

#select-piece {
  height: 20px;
}

.entete {
  width: 100%;
  margin-left: 8%;
  margin-right: 8%;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;

}

.trierEntete {
  justify-content: center;
  width: 50%;
}

.rechercherEntete {
  justify-content: center;
  width: 50%;
}
</style>
