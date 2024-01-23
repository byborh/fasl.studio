<template>

	<header>
        <div class="navbar">
          <div class="container nav-container">
              <input class="checkbox" type="checkbox" name="" id="" />
              <div class="hamburger-lines">
                <span class="line line1"></span>
                <span class="line line2"></span>
                <span class="line line3"></span>
              </div>  
            <div class="logo">
              <h1>{{ marque_nom_arabe }}</h1>
            </div>

            <div class="menu-items">
              <li><a href="my-page.php"><img id="profil" src="../img/logo/profil.png"></a></li>
              <li><a href="#">NOUVEAUTÉS</a></li>
              <li><a href="#">VÊTEMENTS</a></li>
              <li><a href="#">ACCESSOIRES</a></li>
              <li><a href="#">À PROPOS</a></li>
              <li><a href="#">CONTACT</a></li>
            </div>

          </div>
        </div>
	</header>
</template>

<script>
    export default {
        data(){
            return {
                marque_nom_arabe: "فصل"
            }
        }
    }
</script>

<style scoped>

</style>