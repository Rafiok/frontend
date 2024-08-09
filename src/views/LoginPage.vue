<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <div style="padding: 4rem; display: flex; align-items: center;justify-content: center;">
                <img :src="'../../assets/images/log.png'" alt="log.png" style="width: 20vw;">
            </div>
            <div style="font-size: 1.6rem;font-weight: bold;text-align: center;">Connectez-vous</div>
            <form @submit.prevent="connect" style="padding: 1.5rem 1rem;">
                <div style="padding: .7rem 1rem; display: flex; justify-content: space-between;align-items: center; border-radius: 10px; background-color: rgb(245,245,245);"
                    class="s_input">
                    <div>
                        <div style="font-size: .6rem; color: black;">Email ou Téléphone</div>
                        <input type="text" v-model="ident" required
                            style="padding: .4rem 0rem; font-size: .9rem; color: black; width: 100%; background-color: transparent; border: none; box-sizing: border-box;"
                            placeholder="ecrivez...">
                    </div>
                    <div style="font-size: 1.4rem;">
                        <ion-icon :icon="call"></ion-icon>
                    </div>
                </div>
                <div style="margin-top: 1rem; padding: .7rem 1rem; display: flex; justify-content: space-between;align-items: center; border-radius: 10px; background-color: rgb(245,245,245);"
                    class="s_input">
                    <div>
                        <div style="font-size: .6rem; color: black;">Mot de passe</div>
                        <input :type="input_typ" v-model="password" required
                            style="padding: .4rem 0rem; font-size: .9rem; color: black; width: 100%; background-color: transparent; border: none; box-sizing: border-box;"
                            placeholder="ecrivez...">
                    </div>
                    <div @click="input_typ = (input_typ == 'password' ? 'text' : 'password')" style="font-size: 1.4rem;">
                        <ion-icon :icon="input_typ == 'password' ? eye : eyeOff"></ion-icon>
                    </div>
                </div>
                <div style="padding: 1rem; display: flex; justify-content: center;">

                    <button type="submit"
                        style="padding: 1rem; border-radius: 20px;width: 60vw; font-size: 1rem; font-weight: bold; background-image: linear-gradient(to right,#19549E, #236dc8); color: white;">Connexion</button>

                </div>
                <div style="text-align: center; ">Nouveau ici?
                    <span @click="router.push('/register')" style="font-weight: bold; color: #19549E;">inscrivez-vous</span>
                </div>

            </form >

        </ion-content>
    </ion-page>
</template>
<style scoped>
*:focus {
    outline: none;
}

.s_input:hover {
    border-style: solid;
    border-color: #19549E;
    border-width: 2px;
    background-color: transparent;
    color: #19549E;
}
</style>
<script setup lang="ts">
import { isValidEmailOrPhone, showLoading, show_alert, store_obj } from '@/global/utils';
import router from '@/router';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import axios from 'axios';

import { bodyOutline, call, caretDownOutline, chevronDownOutline, eye, eyeOff, flash, flashOffOutline, flashOutline, images, personOutline, search, star } from 'ionicons/icons';
import { ref } from 'vue';

const ident = ref('')
const password = ref('')
const input_typ = ref('password')

const connect = async () => {
    if (!isValidEmailOrPhone(ident.value)) {
        return await show_alert('', "veuillez entrer un nom d'utilisation correcte avant de continuer")

    }

    if (password.value.length < 8) {
        return await show_alert('', "Le mot de passe doit etre d'au moins 8 caractères")
    }
    const load = await showLoading('Connexion....')

    try {
        const resp = await axios.post('token/', {
            username: ident.value,
            password: password.value
        })
        await store_obj('tokens', JSON.stringify(resp.data))
        load.dismiss()
        router.push('/tabs/');

    } catch (error) {
        load.dismiss()
        await show_alert('Erreur de connexion', "Une erreur est survenue lors de la connexion, veuillez verifier vos identifiants.")
    }
}

</script>