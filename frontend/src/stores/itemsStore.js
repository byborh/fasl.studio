import { defineStore } from 'pinia'
import axios from 'axios'

export const useItemsStore = defineStore( {
    id: 'ItemsStore',
    state: () => ({
        items: [],
    }),
    actions: {
        async fetchItemsFromBackend() {
            try {
                const { data } = await axios.get('http://localhost:8080/api/items')

                // context.state.items pour accéder à l'état 'items'
                this.items = data.map((obj) => ({
                    ...obj,
                    isAdded: false,
                    cartId: null
                }))

                console.log("Voici this.items : ", this.items)
            } catch(err) {
                console.log(err)
            }
        },
    }
});

// console.log("Store : ", useItemsStore())