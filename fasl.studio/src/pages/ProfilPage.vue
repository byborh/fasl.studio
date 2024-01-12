<template>
    <div class="profil first-div">
        <div class="create" v-show="createPage == true">
            <h5>test</h5>
            <input type="text" placeholder="username">
            <input type="mail" placeholder="email">
            <input type="password" placeholder="password">
            <button id="valider">Valider</button>
        </div>
        <div class="profil-page">
            <boutton>S'enregistrer avec un compte</boutton>
            <boutton @click="openCreatePage()">Créer un compte</boutton>
        </div>
    </div>
</template>

<script>
export default{
    data () {
        return {
            createPage: false

        }
    },
    methods : {
        openCreatePage() {
            if(this.createPage) {
                this.createPage = false
            } else {
                this.createPage = true
            }
        }
    }
}
</script>

<style scoped>
.profil {
    
}
.profil-page {
    min-height: 400px;
    display: flex;

    justify-content: center;
    align-items: center;
}

boutton {
    width: 120px;
    height: 100px;
    margin: 10px 10px;
    border: 1px solid #6f722f;
    cursor: pointer;
    color: white;
    background-color: black;
    justify-content: center;
    align-items: center;
}

boutton:hover {
    color: black;
    background-color: white;
}

.create {
    height: 300px;
    width: 100%;
    background-color: gray;
    color: white;
}

.create h5 {
    color: white;
}

#valider {
    cursor: pointer;
}

</style>