<template>
    <ion-page>
        <header-component />
        <ion-content :fullscreen="true">
            <div style="display: flex; justify-content: center; padding: 2rem ; ">
                <img :src="'../../assets/images/search.svg'" alt="search" style="width: 60vw;">

            </div>
            <div style="padding: 1rem;text-align: center; font-weight: bold; font-size: 1.5rem;">Trouver un voyage</div>
            <div style="padding: .5rem 1rem;">
                <div @click="lOpen = true"
                    style="padding: .8rem .8rem;display: flex;align-items: center; justify-content: space-between; border-style: solid;border-width: 2px; border-color: rgb(215, 215, 215);border-radius: 10px;">
                    <div v-if="!depart" style="font-size: 1.1rem;" class="placeholder">Lieu de départ</div>
                    <div v-else style="font-size: 1.1rem;" > {{ depart.name }} </div>
                    <div style="font-size: 1.4rem;">
                        <ion-icon :icon="location" style="position: relative; top: .1rem; color: #19549E; ">

                        </ion-icon>
                    </div>
                </div>
            </div>

            <div style="padding: .5rem 1rem;">
                <div @click="aOpen = true"
                    style="padding: .8rem .8rem;display: flex;align-items: center; justify-content: space-between; border-style: solid;border-width: 2px; border-color: rgb(215, 215, 215);border-radius: 10px;">
                    <div v-if="!arrivee" style="font-size: 1.1rem;" class="placeholder">Lieu d'arrivée</div>
                    <div v-else style="font-size: 1.1rem;" > {{ arrivee.name }} </div>
                    <div style="font-size: 1.4rem;">
                        <ion-icon :icon="location" style="position: relative; top: .1rem; color: #19549E; ">

                        </ion-icon>
                    </div>
                </div>
            </div>

            <div style="padding: .5rem 1rem;">
                <div style="padding: .6rem .5rem; font-size: 1.1rem; font-weight: bold;">Choisir une date</div>
                <ion-datetime
                            @ion-change="e => time = (e.detail.value as string)"></ion-datetime>
            </div>
            <div style="padding: .5rem 1rem; margin-bottom: 1rem; " >
                <button @click="send_search" class="demande" style=" border-radius: 10px; padding: .6rem .8rem; width: 100%; display: flex; align-items: center; justify-content: center;">
                    <div style="font-size: 1.3rem; margin-right: .6rem; ">
                        <ion-icon :icon="search" style="position: relative; color: white; ">

                        </ion-icon>
                    </div>
                        <div style="font-size: 1rem; font-weight: bold; ">
                            Rechercher
                        </div>
                </button>
            </div>
        </ion-content>
        <location-picker :is-open="lOpen" :typ="'depart'" @close="lOpen= false" @done="quart => (depart = quart, lOpen = false)" >
            
        </location-picker>
        <location-picker :is-open="aOpen" :typ="'arrivee'" @close="aOpen= false" @done="quart => (arrivee = quart, aOpen = false)" >
            
        </location-picker>
    </ion-page>
</template>

<style scoped >
div {
    font-family: 'PT Serif' !important;
}
</style>

<script setup lang="ts">
    
import { IonPage, IonContent, IonDatetime } from "@ionic/vue";
import HeaderComponent from '@/components/HeaderComponent.vue'
import { alarm, location, search } from "ionicons/icons";
import  LocationPicker from "@/components/LocationPicker.vue";
import { ref } from "vue";
import { show_alert, store_obj } from "@/global/utils";
import router from "@/router";


const lOpen = ref(false)

const depart = ref()
const arrivee = ref()
const time = ref()
const aOpen = ref(false)

const send_search = async () => {
    if(!(depart.value && arrivee.value && time.value))
        return await show_alert('', 'Veuillez remplir tous les champs de recherche avant de continuer')
    const search_obj = {
        depart : depart.value,
        arrivee : arrivee.value,
        time : time.value
    }
    await store_obj('search_obj', JSON.stringify(search_obj))

    return router.back()
}

</script>