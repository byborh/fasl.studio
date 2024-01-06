<template>
  <div id="app">
    <!--BODY DU SITE-->
    
    <div class="main-open-page">
      <div class="main-text">
        <h5>Fasl Studio</h5>
        <p>je ne isap jd timothé et kr ozfn klf jkdjofehzoif fd,</p>
        <button class="button-36" role="button">Cliquer ici</button>


      </div>
      <!-- <div class="main-img">
        <img src="../assets/img/T-Shirt-13-1-1024x1004.png" alt="png t-shirt mage">
      </div> -->
    </div>



      <br><br>
      <br><br>
      <br><br>
      <br><br>
      <br><br>

      <!-- Changeur d'image -->
      <!-- <div class="changeur-d-image">
        <img
          :src="url"
          class="shadow-10 img-changeur-d-image"
          spinner-color="white"
        >
        <button class="test1" @click="refresh">
          zeuhfizqeuhfiuzehfs
        </button>
      </div> -->
      <!-- Who Part -->
      <div class="who-part">
        <div class="who-part-img">
          <img src="../assets/img/383635202_291013390465448_2162049595933381589_n.jpg" alt="test">
        </div>
        <div class="who-part-text">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est labore iure, delectus ab numquam enim recusandae pariatur illum iusto qui nemo. Ut eius natus sit nostrum unde mollitia quibusdam illum!</p>
        </div>
      </div>

      <div class="who-part">
        <div class="who-part-text">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est labore iure, delectus ab numquam enim recusandae pariatur illum iusto qui nemo. Ut eius natus sit nostrum unde mollitia quibusdam illum!</p>
        </div>
        <div class="who-part-img">
          <img src="../assets/img/408210154_902853758043645_7692857693830266755_n.jpg" alt="test">
        </div>
      </div>

      <br><br>

      <!-- How Text -->
      <div class="how">
        <div class="how-text">
          <h6>Lorem</h6>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil excepturi veritatis neque, voluptate minus repudiandae, eaque amet consequatur odit ab reiciendis sed labore non delectus similique deleniti nesciunt itaque repellendus!</p>
        </div>
        <div class="how-text">
          <h6>Lorem</h6>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil excepturi veritatis neque, voluptate minus repudiandae, eaque amet consequatur odit ab reiciendis sed labore non delectus similique deleniti nesciunt itaque repellendus!</p>
        </div>
    </div>


      <br><br>

      <!-- VIDEO Part -->
      <div class="video-part">
        <h6>Video de la fabrication</h6>
        <video playsinline autoplay muted loop poster="" style="width: 100%">
          <source src="../assets/img/logo/fasl-studio-video.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
      </div>


      <br><br>



    <div class="q-pa-md">
      <q-card class="my-card">
        <q-parallax
          src="../assets/img/test/marca_stussy_historia_streetwear_2218.webp"
          :height="400"
        />

        <q-card-section>
          <div class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dignissimos recusandae est ratione nihil aliquid, quaerat tenetur eveniet assumenda ducimus incidunt numquam voluptatum explicabo, odio perferendis soluta? Possimus, itaque reiciendis!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic excepturi eveniet amet illum. Ipsam ab quae vitae delectus, voluptatibus, atque cupiditate eos quia voluptatum ducimus eaque quo laborum mollitia repellendus!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi optio non repudiandae saepe incidunt exercitationem temporibus, molestias eveniet ut, assumenda dolorem? Commodi iusto est voluptates iste quidem minus laudantium vero!
          </div>
        </q-card-section>
      </q-card>
    </div>
    
      <div class="q-pa-md">
        <div class="q-col-gutter-md row items-start">
          <div class="col-6">
            <q-img src="../assets/img/408210154_902853758043645_7692857693830266755_n.jpg" class="img-4-style">
              <div class="absolute-full text-subtitle2 flex flex-center">
                Fasl.Studio
              </div>
            </q-img>
          </div>

          <div class="col-6">
            <q-img src="../assets/img/383635202_291013390465448_2162049595933381589_n.jpg" class="img-4-style"/>
          </div>

          <div class="col-6">
            <q-img src="../assets/img/365392420_1660761207734436_3165609358977754361_n.jpg" class="img-4-style"/>
          </div>

          <div class="col-6">
            <q-img src="../assets/img/380854559_828498658740460_3155866281269219205_n.jpg" class="img-4-style">
              <div class="absolute-full text-subtitle2 flex flex-center">
                Fasl.Studio
              </div>
            </q-img>
          </div>
        </div>
      </div>


      <br><br>
      <br><br>
      <br><br>
      <br><br>

     

    <!-- place QPageScroller at end of page -->
    <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
      <q-btn fab icon="keyboard_arrow_up" color="black" />
    </q-page-scroller>
  </div>

</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'IndexPage',
  setup () {

    const url = ref('https://picsum.photos/500/300')

    return {
      url,
      refresh () {
        url.value = 'https://picsum.photos/500/300?t=' + Math.random()
      }
    }
  }
})
</script>

<style scoped>
/* bg-img-IndexPage.vue */
.main-open-page {
  height: 100vh;
  width: 100%;
  /* background-image: url('../assets/img/gazon-img-4.jpg'); */
  top: 0;
  
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

}

.main-text {
  height: 100%;
  width: 60%;
  padding-top: 10%;
  padding-left: 2%;
  vertical-align: baseline;
}

.main-img {
  width: 40%;
  min-width: 220px;
  height: 80%;
  text-align: center;
  overflow: hidden;
}

.main-img img {
  height: 100%;
  width: 100%;
  overflow: hidden;
}

.main-open-page button {
  text-decoration: none;
}

.main-open-page h5 {
  color: #6f722f;
}

/* CSS */
.button-36 {
  background-image: linear-gradient(92.88deg, #0d1f22 9.16%, #264027 43.89%, #3c5233 64.72%);
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  flex-shrink: 0;
  font-family: "Inter UI","SF Pro Display",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif;
  font-size: 16px;
  font-weight: 500;
  height: 30px;
  padding: 0 1.6rem;
  text-align: center;
  text-shadow: rgba(0, 0, 0, 0.25) 0 3px 8px;
  transition: all .5s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-36:hover {
  box-shadow: rgb(60, 82, 51, 0.5) 0 1px 30px;
  transition-duration: .1s;
}

@media (min-width: 768px) {
  .button-36 {
    padding: 0 2.6rem;
  }
}

.my-card {
  width: 100%;
}

/* Changeur d'image */
.changeur-d-image {
  min-height: 800px;
  width: 100%;
  top: 0;
  overflow: hidden;
}

.img-changeur-d-image {
  min-height: 800px;
  /* height: 100%; */
  max-width: 120%;
  min-width: 100%;
}

.principal-text {
  top: 50%;
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.test1{
  left: 50%;
  top: 50%;
}

/* Who Row */

.who-part {
  min-height: 300px;
  max-height: 350px;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  width: 100%;
  padding: 20px 20px;

  overflow: hidden;
}

.who-part-img {
  width: 50%;
}

.who-part-img img {
  width: 100%;
  height: 100%;
}

.who-part-text {
  width: 50%;
  padding: 20px 20px;
  height: 100vh;
  background-color: #6f722f;

}

.who-part-text p {
  color: #fff;

}

/* How Text */
.how {
  min-height: 300px;
  max-height: 700px;

  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow: auto;
}

.how-text{
  margin: 20px 12px;
  border: 1px solid #0d1f22;
}

/* Vidéo Part */
.video-part {
  text-align: center;
}

.how h6, .video-part h6 {
  color:#0d1f22;
}

.how p {
  color: #3c5233;
}


</style>