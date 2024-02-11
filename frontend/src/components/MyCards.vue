<script>
import MyCard from "src/components/MyCard.vue";

export default {
  props: { // = defineProps
    items: {
      type: Array
    }
  },
  setup() {
    const onClickAdd = () => {
      if (isAdded == false) {
        console.log("deviens true")
        isAdded = true
      } else {
        console.log("deviens fasle")
        isAdded = false
      }

      alert("hello maan");
    }

    return {
      onClickAdd,
    };
  },
  components: {
    MyCard
  }
};
</script>

<template>
  <MyCard
    v-for="item in items"
    
    :key="item.id"
    :imageUrl="item.imageUrl"
    :title="item.title"
    :price="item.price"
    
    :onClickAdd="onClickAdd"
  />
  
</template>



<!-- //   sortedArray() {
	// 	let sortedItems = this.items;
		
	// 	sortedItems = sortedItems.sort((a,b) => {
	// 		let fa = a.title.toLowerCase(), fb = b.title.toLowerCase();
	// 		if (fa < fb) {
	// 			return -1
	// 		}
	// 		if (fa > fb) {
	// 			return 1
	// 		}
	// 		return 0
	// 	})
	// } -->