<script>

import { ref, onMounted } from "vue";
import MyCards from "../components/MyCards.vue";
import axios from 'axios';

// onMounted(() => {
//   fetch('http://localhost:8080/api/items')
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data)
//   })
// })


const items = [
  {
    id : 1,
    title : "Jordan 4",
    price : 400,
    imageUrl : "../../public/sneakers/sneakers-1.jpg"
  },{
    id : 2,
    price : 240,
    title : "Jordan 3",
    imageUrl : "../../public/sneakers/sneakers-2.jpg"
  },{
    id : 3,
    title : "Jordan 11",
    price : 160,
    imageUrl : "../../public/sneakers/sneakers-3.jpg"
  },{
    id : 4,
    title : "Newbalance 2002r",
    price : 170,
    imageUrl : "../../public/sneakers/sneakers-4.jpg"
  },{
    id : 5,
    title : "Newbalance 610v5",
    price : 110,
    imageUrl : "../../public/sneakers/sneakers-5.jpg"
  }
]

export default {
  setup() {
    const test = ref()

    const t = () => {
      alert("hello maan");
    }

    onMounted(async () => { // A L'ACTUALISATION  DE LA PAGE, onMounted FONCTIONNE
      console.log("L'actualisation de la page")

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

        console.log(data)
      } catch(err) {
        console.log(err)
      }
    })

    return {
      items
    };
  },
  components: {
    MyCards,
  },
};
</script>

<template>
  <br /><br /><br /><br /><br /><br /><br />
  <div class="vetements q-pa-md">
    <!--Pièce-->
    <div class="flex justify-between" style="margin-bottom: 20px; align-items: center;">

      <h5>Toutes les pièces</h5>

      <div class="flex justify-between">
        <select name="trier" id="select-piece">
          <option value="trier">Par ordre alphabétique</option>
          <option value="trier">Par prix (du moins chère au plus chère)</option>
          <option value="trier">Par prix (du plus chère au moins chère)</option>
        </select>

        <div class="doc-search__field rounded-borders row items-center no-wrap q-pl-sm q-pr-md">
          <input class="col search-piece" name="search" placeholder="Rechercher une pièce">
          <i class="q-icon notranslate material-icons doc-search__icon cursor-pointer" aria-hidden="true" role="presentation" style="font-size: 24px;">search</i>
        </div>
      </div>

    </div>
    <div class="pieces row justify-center">
      <MyCards :items="items"/>
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
