<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <div
                style="display: flex; justify-content: space-between;  flex-direction: column; width: 100%;  height: 100%; ">
                <div>
                    <div style="padding: 2rem; display: flex; align-items: center;justify-content: center;">
                        <img :src="'../../assets/images/log.png'" alt="log.png" style="width: 15vw;">
                    </div>
                    <div style="font-size: 1.6rem;font-weight: bold;text-align: center;">Inscription</div>
                </div>
                <div v-if="!isValid" style="padding: 1.5rem 1rem;">
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
                        <div @click="input_typ = (input_typ == 'password' ? 'text' : 'password')"
                            style="font-size: 1.4rem;">
                            <ion-icon :icon="input_typ == 'password' ? eye : eyeOff"></ion-icon>
                        </div>
                    </div>


                </div>
                <div v-else>
                    <div
                        style="padding: 1.5rem 1rem; display: flex; justify-content: space-around; padding-bottom: .8rem;">
                        <div style="width: 5.5rem; min-width: 5.58rem; height: 5.5rem; margin-right: .8rem; background-size: cover; background-position: center; border-radius: 100%; position: relative;"
                            :style="{
                                backgroundImage: `url('${get_img}')`
                            }">

                            <button class="ion-activatable ripple-parent" @click="click_id('photo_input')"
                                style="width: 2.1rem; height: 2.1rem; border-radius: 100%; background-color: #19549E; color: white;position: absolute; bottom: 0; right: 0%;">
                                <ion-ripple-effect></ion-ripple-effect>
                                <ion-icon :icon="camera" style="font-size: 1.1rem;"></ion-icon>
                            </button>

                        </div>

                    </div>
                    <div style="padding: .6rem 1rem;">
                        <div style="padding: .7rem 1rem; display: flex; justify-content: space-between;align-items: center; border-radius: 10px; background-color: rgb(245,245,245);"
                            class="s_input">
                            <div>
                                <div style="font-size: .6rem; color: black;">Nom et Prénom</div>
                                <input type="text" v-model="name"
                                    style="padding: .4rem 0rem; font-size: .9rem; color: black; width: 100%; background-color: transparent; border: none; box-sizing: border-box;"
                                    placeholder="ecrivez...">
                            </div>
                            <div style="font-size: 1.4rem;">
                                <ion-icon :icon="person"></ion-icon>
                            </div>
                        </div>
                    </div>
                    <div style="padding: .6rem 1rem;">
                        <div style="padding: .7rem 1rem; display: flex; justify-content: space-between;align-items: center; border-radius: 10px; background-color: rgb(245,245,245);"
                            class="s_input">
                            <div>
                                <div style="font-size: .6rem; color: black;">Sexe</div>
                                <input type="text" v-model="sex"
                                    style="padding: .4rem 0rem; font-size: .9rem; color: black; width: 100%; background-color: transparent; border: none; box-sizing: border-box;"
                                    placeholder="ecrivez...">
                            </div>
                            <div style="font-size: 1.4rem;">
                                <ion-icon :icon="maleFemale"></ion-icon>
                            </div>
                        </div>
                    </div>
                </div>

                <div style="padding: 1rem; display: flex; justify-content: center;">

                    <button @click="go_forward()"
                        style="padding: .7rem; border-radius: 20px;width: 100%; font-size: 1rem; font-weight: bold; background-image: linear-gradient(to right,#19549E, #236dc8); color: white; display: flex; align-items: center; justify-content: center; ">

                        <div style="margin-right: .5rem;">Suivant</div>
                        <div style="font-size: 1.4rem;">
                            <ion-icon :icon="arrowForward" style="position: relative; top: .1rem;">

                            </ion-icon>
                        </div>
                    </button>

                </div>
            </div>
            <div style="display: none;">
                <input type="file" accept="image/*" id="photo_input" @change="charge_file" />
            </div>
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

import { arrowForward, bodyOutline, call, camera, caretDownOutline, chevronDownOutline, eye, eyeOff, flash, flashOffOutline, flashOutline, images, maleFemale, person, personOutline, search, star } from 'ionicons/icons';
import { computed, ref } from 'vue';
const ident = ref('')
const password = ref('')
const isValid = ref(false)

const img = ref({
    id: 0,
    url: ''
})
const name = ref('')
const sex = ref('')

const get_img = computed(() => {
    return img.value.id ? img.value.url : '../../assets/images/yyy.jpeg'
})

const go_forward = async () => {
    if (!isValid.value) {
        if (!isValidEmailOrPhone(ident.value)) {
            return await show_alert('Email ou Téléphone incorrecte', "Veuillez entrer un email ou un numéro de téléphone correcte avant de continuer")

        }

        if (password.value.length < 8) {
            return await show_alert('', "Le mot de passe doit etre d'au moins 8 caractères")
        }
        isValid.value = true
    }

    else {
        await register_user()
    }


}

const click_id = (id: string) => {
    document.getElementById(id)?.click()
}

const input_typ = ref('password')

const charge_file = async (event: any) => {
    const load = await showLoading("Patientez...")

    const form = new FormData()
    form.append('file', event.target.files[0])
    try {
        const resp = await axios.post('api/charge_file/', form, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })

        if (resp.data['done']) img.value = resp.data['result']

    } catch (error) {
        await show_alert('', "Une erreur est survenue l'ors du chargement du fichier, veuillez réessayer")
    }
    load.dismiss()
}

const connect = async () => {
    if (!isValidEmailOrPhone(ident.value)) {
        return await show_alert('Email ou Téléphone incorrecte', "veuillez entrer un nom d'utilisation correcte avant de continuer");
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

const register_user = async () => {


    const load = await showLoading("Inscription...")

    try {
        const resp = await axios.post('api/register_user/', {
            ident: ident.value,
            password: password.value,
            name: name.value,
            sex: sex.value,
            img: img.value.id
        })

        if (resp.data['done']) {
            load.dismiss()
            await connect()
        } else {
            load.dismiss()
            await show_alert('Compte existant', "Les identifiants ont déjà été utilisé pour un autre compte.")
        }
    } catch (e) {
        load.dismiss()
        await show_alert('', "Une erreur est survenue, veuillez réessayer plus tard.")
    }
}

</script>