import { store } from 'quasar/wrappers'
import { createPinia } from 'pinia'

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default store((/* { ssrContext } */) => {
  const pinia = createPinia()

  // You can add Pinia plugins here
  // pinia.use(SomePiniaPlugin)

  // pinia.state = { // Définir l'état initial du panier
  //   panier: []
  // }

  // pinia.actions = { // Définir les actions pour modifier l'état du panier
  //   addToPanier(item) { // Ajouter l'élément au panier
  //     pinia.state.panier.push(item)
  //   },
  //   removeFromPanier(item) {
  //     pinia.state.panier = pinia.state.panier.filter((p) => p !== item)
  //   }
  // }

  return pinia
})
