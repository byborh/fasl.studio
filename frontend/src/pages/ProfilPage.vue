<script>
import { ref, onMounted } from "vue";

// import registerClient from 'src/components/RegisterClient.vue'
import loginClient from 'src/components/LoginClient.vue'

export default {
  setup() {

    onMounted(async () => {
      try {
        if(this.isUser == false) { // vérifie si l'utilisateur existe
          this.verifyMail = true // si non, alors laisser afficher le 'form' de vérification
        } else {
          this.verifyMail = false // si oui, alorsne plus afficher le 'form' de vérification
        }
      } catch(err) {
        console.log(err)
      }
    })

    return {
      user : {
        email: '',
        password: ''
      },

      isUser: false,
      verifyMail: true
    };
  },
  components: {
    // registerClient,
    loginClient
  },
  methods: {
    verifyIdentity() {
      if(this.isUser == false) { // vérifie si l'utilisateur existe
          this.verifyMail = false // si non, alors laisser afficher le 'form' de vérification
        } else {
          this.verifyMail = false // si oui, alorsne plus afficher le 'form' de vérification
        }
    },
    commeBackToEmailAsking() {
      this.verifyMail = true
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

      <div class="email-asking" v-show="verifyMail">
        <h3>فصل</h3>

        <label for="username">Saisis ton adresse e-mail pour nous rejoindre ou te connecter.</label>
        <input type="email" v-model="email" placeholder="Saissisez votre mail" id="email" />

        <p>En continuant, tu acceptes les conditions d'utilisation et tu confirmes avoir lu la politique de confidentialité de Nike.</p>

        <button @click="verifyIdentity()">Continuer</button>
      </div>
      
      <div class="afterVerification" v-show="!verifyMail">
        <button @click="commeBackToEmailAsking()" class="btn-out">←</button>

        <!-- <registerClient /> -->
        <loginClient />
      </div>

      <div class="social">
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
