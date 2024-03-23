<script>
import { ref, onMounted, provide } from "vue";
import MyCards from "../components/MyCards.vue";
import axios from 'axios';

const items = ref ([ // ref met/transforme tout en objet : [ value : {} ]
])

const cart = ref ([])
// const { UUID } = require('bson'); // Générer une priméry key

export default {
  setup() {
    const fetchItems = async () => {
      try {
        const { data } = await axios.get('http://localhost:8080/api/items')
        
        items.value = data.map((obj) => ({
          ...obj,
          isAdded: false,
          favoriteId: null
        }))

        const parentItems = items.value
      } catch(err) {
        console.log(err)
        
      }
    }

    const fetchPanier = async () => {
      try{
        const { data: panier } = await axios.get('http://localhost:8080/api/panier')
        
        items.value = items.value.map((item) => {
          const favorite = panier.find((favorite) => favorite.parentId === item.id)
        
          if(!favorite) {
            return item
          }
          return {
            ...item,
            isAdded: true,
            favoriteId: favorite.id
          }
        })
      } catch(err) {
        console.log(err)
      }
    }

    const addToPanier = async (item) => {
      try {
        if(!item.isAdded){
          // const client = new MongoClient(uri, {
          //   pkFactory: { createPk: () =>  new UUID().toBinary() }
          // });

          const obj2 = {
            // id: client,
            parentId: item.id
          }

          item.isAdded = true

          const { data } = await axios.post('http://localhost:8080/api/panier/ajouter', obj2)

          item.favoriteId = data.id

        } else {
          item.isAdded = false
          await axios.delete(`http://localhost:8080/api/panier/retirer/${item.favoriteId}`)
          item.favoriteId = null
        }

      } catch (err) {
        console.log(err)
      }

      // item.isAdded = !item.isAdded
    }

    onMounted(async () => {
      await fetchItems()
      await fetchPanier()
    })

    provide('addToPanier', addToPanier) // exporter/récupérer qqch de global :
                                        // component1 -> component2 -> component3 -> component4
                                        // component1 -----------------------------> component4

    return {
      items,
      trier: '',
      searchEl: '',
      elementRestants: 0,
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
        items.value.sort(function (a, b) { // A COMPRENDRE
          if(a.price > b.price) {
            return 1
          } else {
            return -1
          }
        })
      } else if(this.trier == 'priceDesc') {
        items.value.sort(function (a, b) {
          if(a.price < b.price) {
            return 1
          } else {
            return -1
          }
        })
      } else {
        items.value.sort(function (a, b) {
          if (a.title < b.title) {
            return -1;
          } else {
            return 1;
          }
        })
      }
    },

    search() {
      if(this.searchEl != '') {
        // Filtrer les éléments dont le titre contient le texte de recherche
        const filteredItems = items.value.filter(item => { // A COMPRENDRE
          if (item.title) {
            return item.title.toLowerCase().includes(this.searchEl.toLowerCase().trim());
          }
          return false;
        });

        items.value = filteredItems

        if (filteredItems == 0) {
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
