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

  <button @click="loginWithGoogle()" >Se connecter</button>
      
  <div class="social">
      <button @click="loginWithGoogle()">Se connecter avec <u>Google</u></button>
  </div>
</template>

<style scoped>
form * {
  font-family: "Poppins", sans-serif;
  color: #ffffff;
  letter-spacing: 0.5px;
  outline: none;
  border: none;
}
form h3 {
  font-size: 32px;
  font-weight: 500;
  line-height: 42px;
  text-align: center;
}

label {
  display: block;
  margin-top: 30px;
  font-size: 16px;
  font-weight: 500;
}
input {
  display: block;
  height: 50px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.07);
  border-radius: 3px;
  padding: 0 10px;
  margin-top: 8px;
  font-size: 14px;
  font-weight: 300;
}
::placeholder {
  color: #e5e5e5;
}
button {
  margin-top: 50px;
  width: 100%;
  background-color: #fff;
  color: #080710;
  padding: 15px 0;
  font-size: 18px;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
}
button:hover {
  background-color: #f0efeb;
  transition: 0.6s;
}
.social {
  display: flex;
  font-size: 18px;
}
.social button {
  width: 100%;
  font-size: 18px;
  border-radius: 3px;
  padding: 5px 10px 10px 5px;
  background-color: rgba(255, 255, 255, 0.27);
  color: #eaf0fb;
  text-align: center;
  cursor: pointer;
}
.social button:hover {
  background-color: rgba(255, 255, 255, 0.47);

  transition: 0.6s;
}
.social i {
  margin-right: 4px;
}
</style>
