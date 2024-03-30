import { defineStore } from 'pinia'
import axios from 'src/boot/axios'

export const useCartStore = defineStore({
    id: "cartItems",
    state: () => ({
        cartItems: [],
    }),
    actions: {
        addToCart: async (item) => {
            try {
                if(!item.isAdded) {
                    item.isAdded = true
                    // this.cartItems.push(item)
                    context.state.cartItems.push(item)
                    item.cartId = data.id
                } else {
                    const i = context.state.cartItems.findIndex(cartItems => cartItems.id == item.id)
                    if(i !== -1) {
                        context.state.cartItems.splice(i, 1)
                        item.isAdded = false
                        item.cartId = null
                    }
                }
            } catch (err) {
                console.log(err)
            }
        }
    }
})