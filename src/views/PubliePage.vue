<template>
    <ion-page>
        <header-component />
        <ion-content :fullscreen="true">
            <div style="display: flex; align-items: center;">
                <div  @click=" step ? step-- : router.back()" style="padding: .5rem 1rem; font-size: 1.7rem">
                    <ion-icon :icon="arrowBack" style="position: relative; top: .3rem; "  ></ion-icon>
                </div>
                <div style=" flex-grow: 1; padding: 1rem;text-align: center; font-weight: bold; font-size: 1.5rem;">
                    Publier un voyage
                </div>

            </div>
            <div v-if="!step">

                <div style="padding: .5rem 1rem;">
                    <div @click="lOpen = true"
                        style="padding: .8rem .8rem;display: flex;align-items: center; justify-content: space-between; border-style: solid;border-width: 2px; border-color: rgb(215, 215, 215);border-radius: 10px;">
                        <div v-if="!depart" style="font-size: 1.1rem;" class="placeholder">Lieu de départ</div>
                        <div v-else style="font-size: 1.1rem;"> {{ depart.name }} </div>
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
                        <div v-else style="font-size: 1.1rem;"> {{ arrivee.name }} </div>
                        <div style="font-size: 1.4rem;">
                            <ion-icon :icon="location" style="position: relative; top: .1rem; color: #19549E; ">

                            </ion-icon>
                        </div>
                    </div>
                </div>

                <div style="padding: .5rem 1rem;">
                    <div style="padding: .6rem .5rem; font-size: 1.1rem; font-weight: bold;">Choisir une date</div>
                    <ion-datetime @ion-change="e => time = (e.detail.value as string)">

                    </ion-datetime>
                </div>
                <div style="padding: .5rem 1rem; margin-bottom: 1rem; ">
                    <button @click="go_next()" class="demande"
                        style=" border-radius: 10px; padding: .6rem .8rem; width: 100%; display: flex; align-items: center; justify-content: center;">
                        <div style="font-size: 1rem; font-weight: bold; margin-right: .6rem; ">
                            Suivant
                        </div>

                        <div style="font-size: 1.3rem;  ">
                            <ion-icon :icon="arrowForward" style="position: relative; color: white; top: .1rem; ">

                            </ion-icon>
                        </div>
                    </button>
                </div>
            </div>
            <div v-else>

                <div style="display: flex; justify-content: center; padding: 2rem ; ">
                    <img :src="'../../assets/images/ca.svg'" alt="search" style="width: 60vw;">

                </div>
                <form @submit.prevent="go_next()">
                    <div style="padding: .5rem 1rem;">
                        <input type="number" v-model="price"
                            style="padding: .8rem .8rem; border-style: solid;border-width: 2px; border-color: rgb(215, 215, 215);border-radius: 10px; width: 100% "
                            placeholder="Prix en FCFA" />
                    </div>

                    <div style="padding: .5rem 1rem;">
                        <input type="number" v-model="places"
                            style="padding: .8rem .8rem; border-style: solid;border-width: 2px; border-color: rgb(215, 215, 215);border-radius: 10px; width: 100% "
                            placeholder="Nombre de place" />
                    </div>

                    <div style="padding: .5rem 1rem; margin-bottom: 1rem; ">
                        <button class="demande" type="submit"
                            style=" border-radius: 10px; padding: .6rem .8rem; width: 100%; display: flex; align-items: center; justify-content: center;">

                            <div style="font-size: 1rem; font-weight: bold; ">
                                Valider
                            </div>

                        </button>
                    </div>
                </form>
            </div>

        </ion-content>
        <location-picker :is-open="lOpen" :typ="'depart'" @close="lOpen = false"
            @done="quart => (depart = quart, lOpen = false)">

        </location-picker>
        <location-picker :is-open="aOpen" :typ="'arrivee'" @close="aOpen = false"
            @done="quart => (arrivee = quart, aOpen = false)">

        </location-picker>
    </ion-page>
</template>

<style scoped>
div {
    font-family: 'PT Serif' !important;
}

*:focus {
    outline: none
}
</style>

<script setup lang="ts">

import { IonPage, IonContent, IonDatetime, IonIcon } from "@ionic/vue";
import HeaderComponent from '@/components/HeaderComponent.vue'
import { alarm, location, search, arrowForward, paperPlane, arrowBack } from "ionicons/icons";
import LocationPicker from "@/components/LocationPicker.vue";
import { ref, watch } from "vue";
import { access_tok, show_alert, showLoading, store_obj } from "@/global/utils";
import axios from "axios";
import router from "@/router";


const lOpen = ref(false)

const depart = ref()
const arrivee = ref()
const aOpen = ref(false)
const time = ref()

const price = ref()
const places = ref()

const step = ref(0)

const create_voyage = async () => {
    const load = await showLoading('Publication...')
    try {
        const resp = await axios.post('api/create_voyage/', {
            depart: JSON.stringify(depart.value),
            arrivee: JSON.stringify(arrivee.value),
            date: time.value,
            price: price.value,
            places: places.value
        }, {
            headers: {
                Authorization: `Bearer ${await access_tok(router, undefined)}`
            }
        })
        if (resp.data['done']) {
            load.dismiss()
            //router.push('/tabs/tab3/?target=offre:' + resp.data['result'])
            await store_obj('add_pub', `${resp.data['result']}`)
            router.replace('/mypub')
        }
    } catch (e) {
        console.log(e);
        load.dismiss();
        await show_alert('', 'Une erreur est survenue, veuillez reessayer!');
    }

}

const go_next = async () => {
    if (!step.value) {
        if (!(depart.value && arrivee.value && time.value))
            return await show_alert('', 'Veuillez remplir tous les champs de recherche avant de continuer')

        step.value++;
    } else {
        if (places.value && price.value) {
            await create_voyage()
        } else {
            await show_alert('', "Veuillez entrer un prix et un nombre de place valide.")
        }
    }
}

</script>