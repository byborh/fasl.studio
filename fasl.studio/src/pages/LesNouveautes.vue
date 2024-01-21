<template>
    <div class="app">
        <h4 style="text-align: center;">Les Nouveautés</h4>
        <div class="news-part">

            <q-card class="my-card news-width">
                <img src="https://cdn.quasar.dev/img/mountains.jpg" class="img-min-height-120px">

                <q-card-section>
                    <div class="text-h6">Our Changing Planet</div>
                    <div class="text-subtitle2">by John Doe</div>
                </q-card-section>

                <q-card-section class="q-pt-none">
                    {{ lorem }}

                </q-card-section>
            </q-card>

            <q-card class="my-card news-width">
                <img src="https://cdn.quasar.dev/img/mountains.jpg" class="img-min-height-120px">

                <q-card-section>
                    <div class="text-h6">Our Changing Planet</div>
                    <div class="text-subtitle2">by John Doe</div>
                </q-card-section>

                <q-card-section class="q-pt-none">
                    {{ lorem }}

                </q-card-section>
            </q-card>
        </div>
        <div class="news-part q-pb-xl">

            <q-card class="my-card news-width">
                <img src="https://cdn.quasar.dev/img/mountains.jpg" class="img-min-height-120px">

                <q-card-section>
                    <div class="text-h6">Our Changing Planet</div>
                    <div class="text-subtitle2">by John Doe</div>
                </q-card-section>

                <q-card-section class="q-pt-none">
                    {{ lorem }}

                </q-card-section>
            </q-card>

            <q-card class="my-card news-width">
                <img src="https://cdn.quasar.dev/img/mountains.jpg" class="img-min-height-120px">

                <q-card-section>
                    <div class="text-h6">Our Changing Planet</div>
                    <div class="text-subtitle2">by John Doe</div>
                </q-card-section>

                <q-card-section class="q-pt-none">
                    {{ lorem }}

                </q-card-section>
            </q-card>
        </div>
        <br><br><br><br>
        <br><br><br><br>
    </div>

</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent ({
    setup () {
        return {
            lorem : "sum text about idk broo, ily cr7"
        }
    }

})
</script>

<style scoped>

.app {
    min-height: 1000px;
}
.news-part {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 400px;
}

.img-min-height-120px {
    min-height: 120px;
}
.news-width {
    justify-content: center;
    align-items: center;
    min-width: 110px;
    max-width: 70%;
    /* width: auto; */
    padding: 5%;
}

@media only screen and (max-width: 1024px) and (min-width: 240px)  {
    .news-width {
    }
}
</style>