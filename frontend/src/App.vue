<template>
  <div id="app">
    <!--HEADER DU SITE-->
    <headerC />
    
    <!--BODY DU SITE-->
    <div class="body">
      <!--VIDEO-->
      <video playsinline autoplay muted loop poster="">
        <source src="./img/logo/fasl-studio-video.mp4" type="video/mp4">
          Your browser does not support the video tag.
      </video>

      <!-- <p v-if="email == 'ronaldo@gmail.com'">yessir</p>
      <p v-else>nossir</p> -->
        
      <!--Photo stylé à scroll / Pinterest
      <div class="pinterest-img">

        <div class="pinterest-img-deux-alignes">
          <img src="./img/380854559_828498658740460_3155866281269219205_n.jpg" alt="Photo vintage">
          <div class="texteCentrer">Il y en a qui regardent, il y en a qui <b>portent</b>.</div>
        </div>

        <div class="pinterest-img-deux-alignes">
          <img src="./img/365392420_1660761207734436_3165609358977754361_n.jpg" alt="Photo vintage">
          <div class="texteCentrer">Chapitre</div>
        </div>

      </div>-->

    </div>

    <h1>Hello i'm <b>{{ identification }}</b></h1>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus nisi officia nobis. Qui suscipit voluptate fugit ipsam adipisci perspiciatis placeat reprehenderit. Atque in nulla culpa hic sapiente debitis impedit porro.</p>





    <input type="text" :value="email" v-on:input="emailInput">
    <p>{{ email }}</p>
    
    <input type="text" v-if="email == 'ronaldo@gmail.com'" :value="userName" v-on:input="userInput">
      <p v-if="userName != 'ronaldo'">messi is 2nde forever</p>
      <p v-else>ssuuii</p>
    
    <button @click="decrementation">-</button>
    <input type="number" :value="count" @input="numberInput">
    <button @click="incrementation">+</button>



    <!--FOOTER DU SITE-->
    <footerC />
  </div>

</template>

<script>
import headerC from "./components/headerC.vue"
import footerC from "./components/footerC.vue"
import { getTransitionRawChildren } from "vue"

export default {
  name: "App",
  data() {
    return {
      email: "test@gmail.fr",
      userName: "test name",

      count: 1,
      minCount: 1,
      maxCount: 10,

      firstName: "Cristiano",
      lastName: "Ronaldo",
      pseudo: "cr7"
    }
  }, components: {
    headerC,
    footerC
  }, methods : {
    emailInput(event) {
      this.email = event.target.value
    },
    userInput(event) {
      this.userName = event.target.value
    },
    decrementation(){
      if(this.count > this.minCount) {
        this.count--
      }
    }, incrementation(){
      if(this.count < this.maxCount) {
        this.count++
      }
    },
    numberInput(event) {
      this.count = event.target.value
    }
  }, computed: {
    identification() {
      return `${this.firstName} ${this.lastName} but you can call me ${this.pseudo}.`.toUpperCase()
    }
  }
}
</script>

<style scoped>

</style>