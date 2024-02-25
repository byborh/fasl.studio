<script>
import { ref, onMounted } from "vue"
import axios from 'axios'

const user = ref ([ // ref met/transforme tout en objet : [ value : {} ]

])

export default {
  setup() {
    onMounted(async () => {
      try {
        this.showRegistration = !this.showRegistration
        this.showLogin = !this.showLogin
      } catch(err) {
        console.log(err)
      }
    })

    // onMounted(async () => {
    //   await addNewUser()
    // })

    return {
      user : {
        email: '',
        password: ''
      },

      registerPassword: '',
      registerPasswordRE: '',
      loginPassword: '',

      showRegistration: false,
      showLogin: false,
    };
  },
  components: {

  },
  methods: {
    loginWithGoogle() {  // Appeler la page indiqué
      window.open('http://localhost:8080/auth/google/callback')
    },

    verifyIdentity() {
      try {
        const response = axios.post("http://localhost:8080/user", {email : this.email})
        const userExists = response.data.userExists
        
        // Mise à jour de la visibilité des divs en fonction du résultat
        this.showRegistration = !userExists;
        this.showLogin = userExists;
      } catch (err) {
        console.log(err)
        this.showRegistration = true;
        this.showLogin = true;
      }

      alert("userExists : " + this.userExists)
      alert("Inscription : " + this.showRegistration)
      alert("Connexion : " + this.showLogin)



      // const user = {
      //   email: this.email,
      //   password: this.registerPasswordRE
      // };

      // axios.post("http://localhost:8080/user/register", user)
      //   .then(response => {
      //     this.registerId = response.data.id;
      //     console.log("User registered with ID:", this.registerId);
      //   })
      //   .catch(error => {
      //     console.error("Error registering user:", error);
      //   });


      // if(this.isUser == true) { // utilisateur existe ?
      //   this.connexion = true
      //   alert('connexion')
      // } else {
      //   this.inscription = true
      //   alert('inscription')
      // }
    },

    registerUser() {
      const user = { email: "email@contact.fr", password: "secretPass123" };
      axios.post("http://localhost:8080/user/register", user)
        .then(response => {
          this.registerId = response.data.id;
          console.log("User registered with ID:", this.registerId);
        })
        .catch(error => {
          console.error("Error registering user:", error);
        });
    }
  }
};
</script>

<template>
  <div class="body-profil">
    <div class="background">
      <div class="shape"></div>
      <div class="shape"></div>
    </div>
    <form class="profil-form">
      <h3>فصل</h3>
      <label for="username">Saisis ton adresse e-mail pour nous rejoindre ou te connecter.</label>
      <input type="email" v-model="email" placeholder="Saissisez votre mail" id="email" />


      <!-- Inscription -->
      <div v-if="showRegistration">
        <label for="password">Inscription</label>
        <input type="password" v-model="registerPassword" placeholder="Créer un mot de passe" minlength="8" />

        <input type="password" v-model="registerPasswordRE" placeholder="Répeter votre mot de passe" minlength="8" />
      </div>


      <!-- Connexion -->
      <div v-if="showLogin">
        <label for="password">Connexion</label>
        <input type="password" v-model="loginPassword" placeholder="Taper votre mot de passe" minlength="8" />
      </div>

      <p>En continuant, tu acceptes les conditions d'utilisation et tu confirmes avoir lu la politique de confidentialité de Nike.</p>

      <button @click="verifyIdentity()">Continuer</button>

      
      <div class="loginWithSocialMedia">
        <button @click="loginWithGoogle()">Se connecter avec <u>Google</u></button>
      </div>
    </form>
  </div>
</template>

<style scoped>
/* Collage */
*,
*:before,
*:after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.body-profil {
  background-color: #080710;
  padding-bottom: 1000px;
}
.background {
  width: 430px;
  height: 520px;
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
}
.background .shape {
  height: 200px;
  width: 200px;
  position: absolute;
  border-radius: 50%;
}
.shape:first-child {
  background: linear-gradient(#588157, #3a5a40);
  left: -80px;
  top: -80px;
}
.shape:last-child {
  background: linear-gradient(to right, #bc6c25, #dda15e);
  right: -30px;
  bottom: -80px;
}
form {
  min-height: 520px;
  width: 400px;
  background-color: rgba(255, 255, 255, 0.13);
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
  padding: 50px 35px;
}

.profil-form * {
  font-family: "Poppins", sans-serif;
  color: #ffffff;
  letter-spacing: 0.5px;
  outline: none;
  border: none;
}

.profil-form h3 {
  font-size: 34px;
  font-weight: 500;
  line-height: 42px;
  text-align: center;
}

.profil-form img {
  width: 120px;
  height: 90px;
}

.profil-form label {
  display: block;
  margin-top: 30px;
  font-size: 19px;
  font-weight: 500;
}

.profil-form p {
  margin-top: 20px;
  font-size: 12px;
  opacity: 0.8;
}

.profil-form input {
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
.profil-form button {
  margin-top: 30px;
  width: 100%;
  background-color: #fff;
  color: #080710;
  padding: 15px 0;
  font-size: 18px;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
}
.profil-form button:hover {
  background-color: #f0efeb;
  transition: 0.6s;
}

/*------------------------------------------------------------*/
/* Se connecter avec Google */

.loginWithSocialMedia button {
  width: 100%;
  font-size: 15px;
  border-radius: 3px;
  padding: 5px 10px 10px 5px;
  background-color: rgba(255, 255, 255, 0.27);
  color: #eaf0fb;
  text-align: center;
  cursor: pointer;
}
.loginWithSocialMedia button:hover {
  background-color: rgba(255, 255, 255, 0.47);
  transition: 0.6s;
}
.loginWithSocialMedia i {margin-right: 4px}
.loginWithSocialMedia .fb {margin-left: 25px}

/*------------------------------------------------------------*/

@media only screen and (max-width: 500px) and (min-width: 200px) {
  form {
    max-width: 100%;
    padding: 0 3%;
  }
  .shape:first-child {
    display: none;
  }
  .shape:last-child {
    right: 100px;
    bottom: 80px;
    overflow: hidden;
  }
}
</style>
