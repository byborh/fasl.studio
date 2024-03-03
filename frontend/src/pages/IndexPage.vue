<template>
  <div id="app">
    <!--BODY DU SITE-->
    <!-- Changeur d'image -->
    <img class="logo-fasl.studio" src="../../public/logo-green-red.png" alt="Logo Fasl.studio">
    <br /><br />
    <!-- Who Part -->
    <div class="who-part">
      <div class="who-part-img">
        <img
          src="../../public/img1.jpg"
          alt="test"
        />
      </div>
      <div class="who-part-text">
        <p>
          Tous les détails sont fait avec soin et du coeur.
        </p>
      </div>
    </div>
    <div class="who-part">
      <div class="who-part-text">
        <p>
          À travers l'écran émerge une esthétique qui transcende l'éphémère.
        </p>
      </div>
      <div class="who-part-img">
        <img
          src="../../public/img2.jpg"
          alt="test"
        />
      </div>
    </div>
    <br /><br />
    <!-- How Text -->
    <div class="how">
      <div class="how-text">
        <h6>Il y'en a qui regardent et Il y'en a qui <u>portent</u></h6>
        <p>
          Bienvenue chez Fasl Studio, où l'élégance et la tradition se rencontrent pour créer une expérience vestimentaire unique. Inspirée par la richesse de la culture arabe, notre marque incarne l'union entre la modernité et les racines profondes, offrant des vêtements qui reflètent la diversité et la sophistication.  Chez Fasl Studio, chaque pièce est soigneusement conçue pour capturer l'esprit des saisons arabes, évoquant un mélange harmonieux de textures, de motifs et de couleurs. Nous croyons en l'authenticité et la qualité, plaçant l'artisanat au cœur de notre processus de création. Rejoignez-nous dans ce voyage où chaque tenue raconte une histoire, où la mode devient une célébration de l'héritage arabe. Fasl Studio, bien plus qu'une marque de vêtements, une déclaration de style qui transcende les frontières culturelles.
        </p>
      </div>
      <!-- <div class="how-text">
        <h6>Lorem</h6>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
          excepturi veritatis neque, voluptate minus repudiandae, eaque amet
          consequatur odit ab reiciendis sed labore non delectus similique
          deleniti nesciunt itaque repellendus!
        </p>
      </div> -->
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
          src="../../public/video1.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>

    <br /><br />

    <div class="q-pa-md">
      <q-card class="my-card">
        <q-parallax
          src="../../public/img3.jpg"
          :height="400"
        />

        <q-card-section>
          <div class="text-h6">Our Changing Style</div>
          <div class="text-subtitle2">
            Bienvenue chez Fasl Studio, où l'élégance et la tradition se rencontrent pour créer une expérience vestimentaire unique. Inspirée par la richesse de la culture arabe, notre marque incarne l'union entre la modernité et les racines profondes, offrant des vêtements qui reflètent la diversité et la sophistication.  Chez Fasl Studio, chaque pièce est soigneusement conçue pour capturer l'esprit des saisons arabes, évoquant un mélange harmonieux de textures, de motifs et de couleurs. Nous croyons en l'authenticité et la qualité, plaçant l'artisanat au cœur de notre processus de création. Rejoignez-nous dans ce voyage où chaque tenue raconte une histoire, où la mode devient une célébration de l'héritage arabe. Fasl Studio, bien plus qu'une marque de vêtements, une déclaration de style qui transcende les frontières culturelles.
          </div>
        </q-card-section>
      </q-card>
    </div>

    <div class="q-pa-md">
      <div class="q-col-gutter-md row items-start">
        <div class="col-6">
          <q-img
            src="../../public/img4.jpg"
            class="img-4-style"
          >
            <div class="absolute-full text-subtitle2 flex flex-center">
              Fasl.Studio
            </div>
          </q-img>
        </div>
        <div class="col-6">
          <q-img
            src="../../public/img2.jpg"
            class="img-4-style"
          />
        </div>
        <div class="col-6">
          <q-img
            src="../../public/img2.jpg"
            class="img-4-style"
          />
        </div>
        <div class="col-6">
          <q-img
            src="../../public/img1.jpg"
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

/* */
img .logo-fasl.studio {
  width: 200px;
  height: 600px;
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
