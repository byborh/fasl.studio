<script>
import axios from "axios";


export default {
  setup() {
    return {
      // qqch
    }
  },
  methods: {
    seConnecter() {
      try {
        const { data } = axios.get('http://localhost:8080/api/users')
        this.user = data
        console.log(this.user)
        alert(this.user)

      } catch(err) {
        console.log(err)
      }
    }
  }
}
</script>

<template>
  <h3>Inscription</h3>

  <label for="username">Email</label>
  <input type="email" v-model="email" placeholder="Saissisez votre mail" id="email" />

  <label for="password">Mot de passe</label>
  <input type="password" v-model="password" placeholder="Créer un mot de passe" id="password" minlength="8" />

  <label for="passwordRe">Mot de passe</label>
  <input type="password" v-model="passwordRE" placeholder="Répeter votre mot de passe" id="password" minlength="8" />


  <!-- <input type="checkbox" /> Accepter les conditions d'utilisations -->

  <button @click="seConnecter()" >S'inscrire</button>
      
  <div class="social">
    <div>S'inscrire avec <u>Google</u></div>
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
  margin-top: 30px;
  display: flex;
}
.social div {
  width: 100%;
  border-radius: 3px;
  padding: 5px 10px 10px 5px;
  background-color: rgba(255, 255, 255, 0.27);
  color: #eaf0fb;
  text-align: center;
  cursor: pointer;
}
.social div:hover {
  background-color: rgba(255, 255, 255, 0.47);

  transition: 0.6s;
}
.social .fb {
  margin-left: 25px;
}
.social i {
  margin-right: 4px;
}
</style>
