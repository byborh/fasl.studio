<template>
  <div id="app">
    <!--BODY DU SITE-->
    <!-- Changeur d'image -->
    <div class="changeur-d-image">
      <!-- q-carousel documentation: https://quasar.dev/vue-components/carousel/ -->
      <q-carousel
        animated
        v-model="slide"
        navigation
        infinite
        :autoplay="autoplay"
        arrows
        transition-prev="slide-right"
        transition-next="slide-left"
        @update:model-value="refresh()"
        @mouseenter="autoplay = false"
        @mouseleave="autoplay = true"
        style="height: 100vh; z-index: -5"
      >
        <q-carousel-slide
          v-for="(url, i) in urls"
          :key="i"
          :name="i + 1"
          :img-src="url"
        />
      </q-carousel>
    </div>
    <br /><br />
    <!-- Who Part -->
    <div class="who-part">
      <div class="who-part-img">
        <img
          src="../../public/365392420_1660761207734436_3165609358977754361_n.jpg"
          alt="test"
        />
      </div>
      <div class="who-part-text">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est labore
          iure, delectus ab numquam enim recusandae pariatur illum iusto qui
          nemo. Ut eius natus sit nostrum unde mollitia quibusdam illum!
        </p>
      </div>
    </div>
    <div class="who-part">
      <div class="who-part-text">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est labore
          iure, delectus ab numquam enim recusandae pariatur illum iusto qui
          nemo. Ut eius natus sit nostrum unde mollitia quibusdam illum!
        </p>
      </div>
      <div class="who-part-img">
        <img
          src="../../public/408210154_902853758043645_7692857693830266755_n.jpg"
          alt="test"
        />
      </div>
    </div>
    <br /><br />
    <!-- How Text -->
    <div class="how">
      <div class="how-text">
        <h6>Lorem</h6>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
          excepturi veritatis neque, voluptate minus repudiandae, eaque amet
          consequatur odit ab reiciendis sed labore non delectus similique
          deleniti nesciunt itaque repellendus!
        </p>
      </div>
      <div class="how-text">
        <h6>Lorem</h6>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
          excepturi veritatis neque, voluptate minus repudiandae, eaque amet
          consequatur odit ab reiciendis sed labore non delectus similique
          deleniti nesciunt itaque repellendus!
        </p>
      </div>
      <!-- <div class="how-text">
        <h6>Lorem</h6>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil excepturi veritatis neque, voluptate minus repudiandae, eaque amet consequatur odit ab reiciendis sed labore non delectus similique deleniti nesciunt itaque repellendus!</p>
      </div> -->
    </div>

    <br /><br />

    <!-- VIDEO Part -->
    <div class="video-part">
      <h6>Video de la fabrication</h6>
      <video playsinline autoplay muted loop poster="" style="width: 100%">
        <source
          src="../../public/logo/fasl-studio-video.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>

    <br /><br />

    <div class="q-pa-md">
      <q-card class="my-card">
        <q-parallax
          src="../../public/test/marca_stussy_historia_streetwear_2218.webp"
          :height="400"
        />

        <q-card-section>
          <div class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            dignissimos recusandae est ratione nihil aliquid, quaerat tenetur
            eveniet assumenda ducimus incidunt numquam voluptatum explicabo,
            odio perferendis soluta? Possimus, itaque reiciendis! Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Hic excepturi eveniet
            amet illum. Ipsam ab quae vitae delectus, voluptatibus, atque
            cupiditate eos quia voluptatum ducimus eaque quo laborum mollitia
            repellendus! Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Modi optio non repudiandae saepe incidunt exercitationem
            temporibus, molestias eveniet ut, assumenda dolorem? Commodi iusto
            est voluptates iste quidem minus laudantium vero!
          </div>
        </q-card-section>
      </q-card>
    </div>

    <div class="q-pa-md">
      <div class="q-col-gutter-md row items-start">
        <div class="col-6">
          <q-img
            src="../../public/408210154_902853758043645_7692857693830266755_n.jpg"
            class="img-4-style"
          >
            <div class="absolute-full text-subtitle2 flex flex-center">
              Fasl.Studio
            </div>
          </q-img>
        </div>
        <div class="col-6">
          <q-img
            src="../../public/383635202_291013390465448_2162049595933381589_n.jpg"
            class="img-4-style"
          />
        </div>
        <div class="col-6">
          <q-img
            src="../../public/383635202_291013390465448_2162049595933381589_n.jpg"
            class="img-4-style"
          />
        </div>
        <div class="col-6">
          <q-img
            src="../../public/383635202_291013390465448_2162049595933381589_n.jpg"
            class="img-4-style"
          >
            <div class="absolute-full text-subtitle2 flex flex-center">
              Fasl.Studio
            </div>
          </q-img>
        </div>
      </div>
    </div>

    <br /><br />
    <br /><br />
    <br /><br />
    <br /><br />

    <!-- place QPageScroller at end of page -->
    <q-page-scroller
      position="bottom-right"
      :scroll-offset="150"
      :offset="[18, 18]"
    >
      <q-btn fab icon="keyboard_arrow_up" color="black" />
    </q-page-scroller>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "IndexPage",
  setup() {
    const urls = ref(["https://picsum.photos/500/300"]);

    return {
      urls,
      slide: ref(1),
      autoplay: ref(true),
      refresh() {
        urls.value.push("https://picsum.photos/500/300?t=" + Math.random());
      },
    };
  },
});
</script>

<style scoped>
.my-card {
  width: 100%;
}

/* Changeur d'image */
.changeur-d-image {
  height: auto;
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

.test1 {
  left: 50%;
  top: 50%;
}

/* Who Row */

.who-part {
  min-height: 500px;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #6f722f;
  color: #fff;
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

.how-text {
  padding: 20px 12px;
}

/* Vidéo Part */
.video-part {
  text-align: center;
}

.how h6,
.video-part h6 {
  color: #0d1f22;
}

.how p {
  color: #3c5233;
}
</style>
