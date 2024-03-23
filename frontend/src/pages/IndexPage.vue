<template>
  <div id="app">
    <br><br>
    <!--BODY DU SITE-->
    <!-- <img class="logo-fasl.studio" src="../../public/logo-green-red.png" alt="Logo Fasl.studio"> -->
    <div class="affiche">
      <div class="aff-img">
          <img src="../../public/logo-green-red.png" alt="Logo Fasl.studio">
      </div>
      <div class="aff-text">
          <h2>Fasl.Studio</h2>
          <p>Il y en a qui regardent et Il y'en a qui portent</p>
      </div>
    </div>
    <br /><br />
    <div class="q-pa-md">
      <q-card class="my-card">
        <q-card-section>
          <div class="text-h6">Our Changing Style</div>
          <div class="text-subtitle2">
            Bienvenue chez Fasl Studio, où l'élégance et la tradition se rencontrent pour créer une expérience vestimentaire unique. Inspirée par la richesse de la culture arabe, notre marque incarne l'union entre la modernité et les racines profondes, offrant des vêtements qui reflètent la diversité et la sophistication.  Chez Fasl Studio, chaque pièce est soigneusement conçue pour capturer l'esprit des saisons arabes, évoquant un mélange harmonieux de textures, de motifs et de couleurs. Nous croyons en l'authenticité et la qualité, plaçant l'artisanat au cœur de notre processus de création. Rejoignez-nous dans ce voyage où chaque tenue raconte une histoire, où la mode devient une célébration de l'héritage arabe. Fasl Studio, bien plus qu'une marque de vêtements, une déclaration de style qui transcende les frontières culturelles.
          </div>
        </q-card-section>
      </q-card>
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

.affiche {height: 800px;}

.aff-img {
  position: absolute;
  width: 100%;
  /* height: 100%; */
}
.aff-img img {
  width: 100%;
  height: 100%;
  opacity: 0.7;
}
.aff-text {
  color: black;
  top: 300px;
  position: absolute;
  width: 600px;
  left: 10%;
  font-size: 200%;
  min-height: 150px;
}

.aligner-centre {
  margin-top: 15px;
  opacity: 0.7;
  text-align: center;
}
</style>
