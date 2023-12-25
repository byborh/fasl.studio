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





    <!--FOOTER DU SITE-->
    <footerC />
  </div>

</template>

<script>
import headerC from "./components/headerC.vue"
import footerC from "./components/footerC.vue"

export default {
  name: "App",
  components: {
    headerC,
    footerC
  }
}
</script>

<style scoped>

</style>