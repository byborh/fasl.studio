<template>
    <div class="app">
        <h3>Les Nouveautés</h3>
        <div class="news-part">

            <q-card class="my-card w300px">
            <img src="https://cdn.quasar.dev/img/mountains.jpg">

            <q-card-section>
                <div class="text-h6">Our Changing Planet</div>
                <div class="text-subtitle2">by John Doe</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
                {{ lorem }}

            </q-card-section>
            </q-card>
            <q-card class="my-card w300px">
            <img src="https://cdn.quasar.dev/img/mountains.jpg">

            <q-card-section>
                <div class="text-h6">Our Changing Planet</div>
                <div class="text-subtitle2">by John Doe</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
                {{ lorem }}
            </q-card-section>
            </q-card>

        </div>
    </div>

</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent ({
    data () {
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
.w300px {
    min-width: 200px;
    max-width: 70%;
    padding: 5%;
}

@media only screen and (max-width: 1024px) and (min-width: 240px)  {
    .w300px {
        background-color: red;
    }
}
</style>