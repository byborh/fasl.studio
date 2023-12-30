<template>
  <div id="app">
    <!--BODY DU SITE-->
    <div class="body">
      <!-- VIDEO-->
      <video playsinline autoplay muted loop poster="" style="width: 100%">
        <source src="../assets/img/logo/fasl-studio-video.mp4" type="video/mp4">
          Your browser does not support the video tag.
      </video>
    </div> 

    <div class="q-pa-md">
      <q-card class="my-card">
        <q-parallax
          src="../assets/img/test/marca_stussy_historia_streetwear_2218.webp"
          :height="500"
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
    
      <!-- 4 Images Stylés -->
      <div class="q-pa-md">
        <div class="q-col-gutter-md row items-start">
          <div class="col-6">
            <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" class="img-4-style">
              <div class="absolute-full text-subtitle2 flex flex-center">
                Fasl.Studio
              </div>
            </q-img>
          </div>

          <div class="col-6">
            <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" class="img-4-style"/>
          </div>

          <div class="col-6">
            <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" class="img-4-style"/>
          </div>

          <div class="col-6">
            <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" class="img-4-style">
              <div class="absolute-full text-subtitle2 flex flex-center">
                Fasl.Studio
              </div>
            </q-img>
          </div>
        </div>
      </div>

      <!-- Changeur d'image -->
      <div class="changeur-d-image q-pa-md text-center">
        <h4 style="max-width: 240px;">
          All about to be a "millionaire"
        </h4>
        <q-img
          @click="refresh"
          :src="url"
          class="shadow-10 img-changeur-d-image"
          spinner-color="white"
          style="height: 100%; width: 50%; cursor: pointer;"
        >
          <div class="absolute-full text-subtitle2 flex flex-center">
            Clique ici
          </div>
        </q-img>
        
          
      </div>

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
    const produit = [1, 2]

    const url = ref('https://picsum.photos/500/300')

    return {
      // email, userName, count, minCount, maxCount, firstName, lastName, pseudo, 
      produit,
      url,
      refresh () {
        url.value = 'https://picsum.photos/500/300?t=' + Math.random()
      }
      // emailInput, userInput, decrementation, incrementation, numberInput,
      // lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  }
})
</script>

<style scoped>
.my-card {
  width: 100%;
}

/* Changeur d'image */
.changeur-d-image {
  min-height: 800px;
  justify-content: center;
  align-items: center;
}

.changeur-d-image q-img {
  height: auto;
  width: auto;
}

.app {
  background-color: black;
}
</style>