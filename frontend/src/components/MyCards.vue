<script>
import MyCard from "src/components/MyCard.vue";
import { createApp, defineComponent, defineEmits, ref} from "vue";

export default defineComponent ({
  props: { // = defineProps
    items: {
      type: Array
    }
  },

  setup(props, { emit }) {
    // Utilise la méthode d'émission d'événements globale de l'application
    const addToPanier = (item) => {
      emit('addToPanier', item);
    };
   
    // const onClickAdd = () => {
    //   if (isAdded == false) {
    //     console.log("deviens true")
    //     isAdded = true
    //   } else {
    //     console.log("deviens false")
    //     isAdded = false
    //   }

    //   alert("hello maan");
    // }

    return {
      addToPanier
      // onClickAdd
    };
  },
  components: {
    MyCard
  },
});

// const addToPanier = inject('addToPanier') // exporter/récupérer qqch de global :
                                          // component1 -> component2 -> component3 -> component4
                                          // component1 -----------------------------> component4
</script>

<template>
  <MyCard
  v-for="item in items"
    :key="item.id"
    :id="item.id"
    :imageUrl="item.imageUrl"
    :title="item.title"
    :price="item.price"
    :isAdded="item.isAdded"
    :onClickAdd="() => addToPanier(item)"
  />
</template>