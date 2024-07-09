<template>
    <ion-page>

        <ion-content :fullscreen="true">
            <div style="display: flex; justify-content: space-between;flex-direction: column;height: 100%;">
                <div style="background-color: rgb(245, 245, 245); padding: .7rem 0rem;">
                    <div style="display: flex;align-items: center; justify-content: center; padding: 1rem; ">
                        <img :src="'../../assets/images/log.png'" alt="log.png" style="height: 5rem; ">
                    </div>
                    <div style="display: flex;align-items: center; justify-content: center; padding: .5rem;  ">
                        <img :src="'../../assets/images/ttt.svg'" style="width: 80vw;" alt="ttt.svgs">
                    </div>
                </div>
                <div style="padding:1.2rem 1.8rem;flex-grow: 1; ">
                    <div style="text-align: center; font-size: 1.4rem;font-weight: bolder;">
                        Voyagez confortablement et au prix le plus bas
                    </div>
                    <div style="padding: .5rem 0rem; font-size: 1rem; text-align: center;">
                        Des centaines d'offres de covoiturages publiés chaque jour
                    </div>
                </div>
                <div style="width: 100%; padding: 1rem 3rem;">
                    <button @click="router.push('/login')" style="width: 100%; padding: .8rem 1rem; border-radius: 20px; font-size: 1.1rem; margin-bottom: .7rem;" class="demande">Se connecter</button>
                    <button @click="router.push('/register')" style="width: 100%; padding: .8rem 1rem; border-radius: 20px; font-size: 1.1rem; margin-bottom: .6rem;" >S'inscrire</button>
                </div>

            </div>
        </ion-content>
    </ion-page>

</template>
<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';

import { bodyOutline, caretDownOutline, chevronDownOutline, flash, flashOffOutline, flashOutline, personOutline, search, star } from 'ionicons/icons';
import { useRouter } from 'vue-router';

const router = useRouter()

</script>