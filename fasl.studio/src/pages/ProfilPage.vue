<template>
  <div class="profil first-div">
    <!-- <div class="create" v-show="createPage == true">
      <h5>test</h5>
      <input type="text" placeholder="username" />
      <input type="mail" placeholder="email" />
      <input type="password" placeholder="password" />
      <button id="valider">Valider</button>
    </div>
    <div class="profil-page">
      <boutton>S'enregistrer avec un compte</boutton>
      <boutton @click="openCreatePage()">Créer un compte</boutton>
    </div> -->
  </div>
  <div class="body-profil">
    <div class="background">
      <div class="shape"></div>
      <div class="shape"></div>
    </div>
    <form>
      <h3>Connexion</h3>

      <label for="username">Nom</label>
      <input type="text" placeholder="Saissisez votre mail" id="username" />

      <label for="password">Mot de passe</label>
      <input type="password" placeholder="Mot de passe" id="password" />

      <button>Se connecter</button>
      <div class="social">
        <div>Se connecter / S'inscrire avec<br />Google</div>
        <!-- <div class="fb"><i class="fab fa-facebook"></i> Facebook</div> -->
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      createPage: false,
    };
  },
  methods: {
    openCreatePage() {
      if (this.createPage) {
        this.createPage = false;
      } else {
        this.createPage = true;
      }
    },
  },
};
function attachSignin(element) {
  console.log(element.id);
  auth2.attachClickHandler(
    element,
    {},
    function (googleUser) {
      document.getElementById("name").innerText =
        "Signed in: " + googleUser.getBasicProfile().getName();
    },
    function (error) {
      alert(JSON.stringify(error, undefined, 2));
    }
  );
}
</script>

<style scoped>
.profil {
}
.profil-page {
  min-height: 400px;
  display: flex;

  justify-content: center;
  align-items: center;
}

boutton {
  width: 120px;
  height: 100px;
  margin: 10px 10px;
  border: 1px solid #6f722f;
  cursor: pointer;
  color: white;
  background-color: black;
  justify-content: center;
  align-items: center;
}

boutton:hover {
  color: black;
  background-color: white;
}

.create {
  height: 300px;
  width: 100%;
  background-color: gray;
  color: white;
}

.create h5 {
  color: white;
}

#valider {
  cursor: pointer;
}

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
  padding-bottom: 900px;
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
  height: 520px;
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
