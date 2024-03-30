import { defineStore } from 'pinia';

export const usePanierStore = defineStore('PanierStore', {
  state: () => ({
    contenu: product['panier']['contenu'],
    
  }),
  actions: {
    addPieceToCart(piece) {
      
    }
  }
});
