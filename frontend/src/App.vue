<template>
  <div id="app">
    <!--HEADER DU SITE-->
    <headerC />

    <!--BODY DU SITE-->
    <div class="pinterest-img">

    	<div class="pinterest-img-deux-alignes">
    				<img src="../public/img/408210154_902853758043645_7692857693830266755_n.jpg" alt="Photo vintage">
    				<div class="texteCentrer">Il y en a qui regardent, il y en a qui <b>portent</b>.</div>
      </div>
      
    	<div class="pinterest-img-deux-alignes">
    				<img src="../public/img/380854559_828498658740460_3155866281269219205_n.jpg" alt="Photo vintage">
    				<div class="texteCentrer">Chapitre</div>
			</div>

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