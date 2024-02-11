<script>

import { ref, onMounted } from "vue";
import MyCards from "../components/MyCards.vue";
import axios from 'axios';

const items = ref ([ // ref met/transforme tout en objet : [ value : {} ]

])

export default {
  setup() {
    const test = ref()

    const t = () => {
      alert("hello maan");
    }

    onMounted(async () => { // A L'ACTUALISATION  DE LA PAGE, onMounted FONCTIONNE
      // Récupérer le fichier JSON du backend /api/items avec le moyen fetch
      // fetch("http://localhost:8080/api/items")
      //   .then((res) => res.json())
      //   .then((data) => {
      //     console.log(data) 
      //   })
      
      // Récupérer le fichier JSON du backend /api/items avec le moyen axios
      // axios.get('http://localhost:8080/api/items').then((resp) => console.log(resp.body))

      // Faire la même chose qu'au dessus avec axios mais async
      try {
        const { data } = await axios.get('http://localhost:8080/api/items')

        items.value = data
      } catch(err) {
        console.log(err)
      }
    })

    return {
      items,
      trier: '',
      searchEl: '',
    };
  },
  components: {
    MyCards,
  },
  methods: {
    sortEl() {
      console.log(this.trier)
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
      }

    }
  }
};
</script>

<template>
  <br /><br /><br /><br /><br /><br /><br />
  <div class="vetements q-pa-md">
    <!--Pièce-->
    <div class="flex justify-between" style="margin-bottom: 20px; align-items: center;">

      <div class="flex justify-between">
        <select id="select-piece" v-model="trier" @click="sortEl">
          <option value="default" disabled>Tirer par ...</option>
          <option value="title">Par ordre alphabétique</option>
          <option value="price">Par prix (du moins chère au plus chère)</option>
          <option value="priceDesc">Par prix (du plus chère au moins chère)</option>
        </select>

        <div class="doc-search__field rounded-borders row items-center no-wrap q-pl-sm q-pr-md">
          <input v-model="searchEl" class="col search-piece" name="search" placeholder="Rechercher une pièce">
          <i @click="search()" class="q-icon notranslate material-icons doc-search__icon cursor-pointer" aria-hidden="true" role="presentation" style="font-size: 24px;">search</i>
        </div>
      </div>

    </div>
    <div class="pieces row justify-center">
    
      <MyCards :items="items" />
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
</style>
