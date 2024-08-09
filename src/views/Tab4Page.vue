<template>
    <ion-page>
        <header-component />
        <ion-content v-if="portefeuille" :fullscreen="true">
            <div style="padding: 1.5rem .5rem; background-color: rgb(226, 226, 226);">
                <div style="text-align: center; font-size: 1.2rem; color: gray; font-weight: 600;">Ton solde est de:
                </div>
                <div style="padding: 1.3rem; color: #19549E;text-align: center;">
                    <span style="font-weight: bolder; font-size: 3rem; position: relative; right: .2rem;">{{
                        portefeuille.get_amount }}</span>
                    <span style="font-size: 2rem; position: relative; left: .2rem;">XOF</span>
                </div>
                <div style="padding: .6rem 0rem; display: flex; align-items: center;  ">
                    <button @click="cOpen = true"
                        style="padding: .6rem; background-color: white; font-size: 1rem; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.2); flex-grow: 1; border-radius: 10px; margin-right: .6rem;">Recharger
                        mon compte</button>
                    <button @click="make_payment(generate_unique_id(), -portefeuille.get_amount)"
                        style="padding: .6rem; background-color: white; font-size: 1rem; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.2); flex-grow: 1; border-radius: 10px;">Récupérer
                        mon argent</button>
                </div>
                <div style="margin-bottom: 2rem;">
                    <button @click="open_lnk(whatsapp_lnk)"
                        style="padding: .6rem; display: flex; align-items: center; justify-content: center; background-color: white; font-size: 1rem; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.2); width: 100%; border-radius: 10px; margin-right: .6rem;">
                        <div style="font-size: 1.3rem;margin-right: .5rem; color: green; ">
                            <ion-icon :icon="logoWhatsapp"></ion-icon>
                        </div>
                        <div>Nous contacter</div>
                    </button>
                </div>
            </div>

            <div
                style="width: 100%; height: 100%;background-color: white;padding: 1rem .8rem; border-top-left-radius: 25px; border-top-right-radius: 25px; margin-top: -2rem;">
                <div style="font-size: 1.2rem; text-align: center; font-weight: bold; color: gray;">Historique des
                    transactions</div>
                <div style="padding: .7rem .4rem; ">
                    <ion-segment :value="segment_typ" @ion-change="e => segment_typ = e.detail.value as string"
                        mode="ios">
                        <ion-segment-button value="Payé">
                            <ion-label>Payé</ion-label>
                        </ion-segment-button>
                        <ion-segment-button value="Encaissé">
                            <ion-label>Encaissé</ion-label>
                        </ion-segment-button>
                        <ion-segment-button value="En attente">
                            <ion-label>En attente</ion-label>
                        </ion-segment-button>
                    </ion-segment>
                </div>
                <div v-if="get_transactions.length">
                    <div v-for="t in get_transactions" :key="t.id"
                        style="display: flex;justify-content: space-between;padding: .8rem .8rem; border-radius: 10px; background-color: rgb(245, 245, 245); margin: .6rem 0rem; ">
                        <div style="margin-right: .6rem;">
                            <ion-icon :icon="checkbox" style=" font-size: 2rem;" :style="{
                                color : t.typ == 'En attente' ? 'gray' : 'green'
                            }" ></ion-icon>
                        </div>
                        <div style="flex-grow: 1; margin-right: .6rem;">
                            <div style="font-weight: bold; font-size: 1rem; ">
                                Montant {{ t.typ }} - {{ format_date((new Date(t.created_at))) + ' ' + format_mdate((new Date(t.created_at))) }}.
                            </div>
                            <div v-if="t.typ == 'En attente'" style="padding-top: .5rem; font-size: .9rem;">
                                Ce montant sera transmis des que l'opération sera terminé
                            </div>
                        </div>


                        <div style="color: #19549E; text-wrap: nowrap; ">
                            {{ t.amount }} XOF
                        </div>

                    </div>
                </div>
                <div v-else style="padding: 2rem;">
                    <div style="display: flex; justify-content: center; ">
                        <img :src="'../../assets/images/nodata.svg'" style="width: 40vw;" />
                    </div>
                    <div style="padding-top: 1.2rem; text-align: center;">
                        Aucune transaction pour le moment
                    </div>

                </div>
            </div>

            <charg-comp :is-open="cOpen" @done="e =>( portefeuille = e, cOpen = false)" @close="cOpen = false" :api_key="api_key" ></charg-comp>
        </ion-content>
        <ion-content v-else :fullscreen="true">
            <div style="padding: 3rem; display: flex; justify-content: center;  ">
                <div>
                    <ion-spinner :name="'crescent'"></ion-spinner>
                </div>
            </div>
        </ion-content>
    </ion-page>
</template>

<style scoped>
.test {
    color: rgb(226, 226, 226);
}
</style>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonSegment, IonSegmentButton, IonLabel, IonSearchbar, IonSpinner, onIonViewDidEnter } from '@ionic/vue';
import { checkbox, checkboxOutline, logoWhatsapp, paperPlane } from 'ionicons/icons';
import HeaderComponent from '@/components/HeaderComponent.vue'
import { computed, ref } from 'vue';
import { access_tok, showLoading } from '@/global/utils';
import axios from 'axios';
import router from '@/router';
import ChargComp from "@/components/ChargComp.vue"


const portefeuille = ref()

const generate_unique_id = () => {
    return ''
}
const whatsapp_lnk = ref('')
const open_lnk = (lnk: string) => {
    window.open(lnk, '_blank');
}

const get_transactions = computed(() => {
    return portefeuille.value.transactions.filter((e: any) => e.typ == segment_typ.value).reverse()
})

const segment_typ = ref("Payé")
const api_key = ref("")

const cOpen = ref(false)
const init_portefeuille = async () => {
    const resp = await axios.get('api/init_portefeuille/', {
        headers: {
            Authorization: `Bearer ${await access_tok(router, undefined)}`
        }
    })
    if (resp.data['done']) {
        portefeuille.value = resp.data['result']
        whatsapp_lnk.value = resp.data['oth']
        api_key.value = resp.data['api_link']
    }
}

const make_payment = async (transactionId: string | number, amount: number) => {
    if(amount < 0 && portefeuille.value.get_amount ==0) return;
    const load = await showLoading('Patientez...')
    const resp = await axios.post('api/create_transaction/', {
        transaction_id: transactionId,
        amount,
        typ: "En attente"
    }, {
        headers: {
            Authorization: `Bearer ${await access_tok(router, load)}`
        }
    })
    if (resp.data['done']) {
        load.dismiss()
        portefeuille.value = resp.data['result']
    }
}

const can_get = computed(() => {
    return portefeuille.value.transactions.filter((e: any) => e.typ == 'En attente').length > 0
})

function getMonthName(monthNumber: number) {
    if (monthNumber > 12) {
        return "Invalid month number";
    }

    const monthNames = [
        "Jan", "Fev", "Mar", "Avr",
        "Mai", "Jun", "Jul", "Aug",
        "Sept", "Oct", "Nov", "Dec"
    ];

    return monthNames[monthNumber];
}

const format_date = (date: Date) => {
    const now = new Date()
    const day = `${date.getDate()} ${getMonthName(date.getMonth())} ${(now.getFullYear() == date.getFullYear()) ? '' : date.getFullYear()}`

    return day
}

const format_mdate = (date: Date) => {
    const now = new Date()
    const day = `${(date.getHours() < 10 ? '0' : '') + date.getHours()}:${(date.getMinutes() < 10 ? '0' : '') + date.getMinutes()}`

    return day
}

onIonViewDidEnter(() => {
    init_portefeuille()
})

</script>