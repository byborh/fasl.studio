<script>
export default {
  setup() {
    return{}
  },
  methods: {
    loginWithGoogle() {
      // alert('Envoie du req au serveur est bien réussi !')
      window.open('http://localhost:8080/auth/google/callback') // Appeler la page indiqué
    }
  }
}
</script>

<template>
  <h3>Connexion</h3>

  <label for="username">Email</label>
  <input type="email" v-model="email" placeholder="Saissisez votre mail" id="email" />

  <label for="password">Mot de passe</label>
  <input type="password" v-model="password" placeholder="Mot de passe" id="password" minlength="8" />

  <!-- Ajouter les conditions d'utilisations -->

  <button>Se connecter</button>

</template>

<style scoped>
</style>
