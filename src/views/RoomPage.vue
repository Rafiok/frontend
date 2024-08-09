<template>
    <ion-page>

        <ion-content :fullscreen="true">
            <div v-if="requete"
                style="display: flex; flex-direction: column; justify-content: space-between; height: 100%;">
                <div>
                    <div style="display: flex;align-items: center;justify-content: space-between;">
                        <div style="padding: .5rem .5rem; width: 100; display: flex; align-items: center;">
                            <button @click="router.back()"
                                style="width: 3rem; height: 3rem; min-width: 3rem;border-radius: 15px; font-size: 1.3rem; color: gray; background-color: transparent; ">
                                <ion-icon :icon="chevronBack"
                                    style="position: relative; top: .15rem; right: .12rem;"></ion-icon>
                            </button>
                            <div style="padding-top: 0rem; ">
                                <div style="font-weight: bold;">{{ right_profile(requete).nom }}</div>
                                <div style="font-size: .75rem;color: gray;margin-top: .08rem; "> {{
                                    right_profile(requete).get_feedbacks }}/5 - {{ right_profile(requete).user_feeds }}
                                    Avis
                                </div>
                            </div>


                        </div>
                        <button
                            style="width: 3rem; height: 3rem; min-width: 3rem;border-radius: 15px; font-size: 1.3rem; color: gray; background-color: transparent; ">
                            <ion-icon :icon="star"
                                style="position: relative; top: .15rem; right: .12rem; color: yellow; "></ion-icon>
                        </button>
                    </div>
                    <div style="width: 100%; height: 1px; background-color: #ebe8e8;"></div>
                </div>
                <div>
                    <div style="padding: .7rem 1.2rem; display: flex; ">

                        <div style="background-size:cover ; background-position: top center; width: 3rem; min-width: 3rem; height: 3rem; border-radius: 15px; margin-right: .6rem;"
                            :style="{
                                backgroundImage: `url('${right_profile(requete).get_profil}')`
                            }">

                        </div>
                        <div style="padding-top: 0rem; flex-grow: 1;">
                            <div style="font-size: 1rem; font-weight: bold; ">
                                {{ requete.lieux_depart.nom }} - {{ requete.lieux_arrive.nom }}
                            </div>
                            <div style="margin-top: .1rem;   font-size: .9rem;color: gray;  ">
                                Heure de départ: <strong> {{ toVoyTime(requete.date_depart) }} </strong>
                            </div>
                            <div
                                style="display: flex; align-items: center; margin-top: .5rem; font-size: .8rem; border-color: gray; border-width: 1px; border-style: solid; width: max-content; padding: .2rem .7rem; border-radius: 10px; ">

                                <div style="width: .4rem; height: .4rem; min-width: .4rem; border-radius: 100%; margin-right: .4rem;"
                                    :style="{
                                        backgroundColor: requete.state == 'en attente' ? 'gray' : (requete.state == 'refusé' ? 'red' :  'green'),
                                    }">
                                </div>
                                <div style="font-size: .8rem;  ">
                                    {{ requete.state }}
                                </div>
                            </div>
                            <div v-if="requete.voyageur.id == user.id && requete.has_accepted && requete.state == 'en attente' "
                                style="display: flex; align-items: center; padding: .7rem 0rem; ">
                                <button @click="set_decision('accepted')"
                                    style="padding: .6rem; font-size: 1rem; border-radius: 15px; margin-right: .6rem; width: 100%; "
                                    class="demande">
                                    Accepter
                                </button>
                                <button @click="set_decision('refused')"
                                    style="padding: .6rem; font-size: 1rem; border-radius: 15px; margin-right: .6rem; background-color: red; color: white; width: 100%;"
                                    class="demande">
                                    Refuser
                                </button>
                            </div>
                            <div v-if="requete.voyageur.id == user.id && requete.has_accepted && requete.state == 'accepté' && !requete.payed"
                                style="display: flex; align-items: center; padding: .7rem 0rem;">
                                <button @click="set_decision('finilized')"
                                    style="padding: .6rem; font-size: 1rem; font-weight: bold; border-radius: 8px; margin-right: .6rem; width: 100%; flex-grow: 1; "
                                    class="demande">
                                    Valider le payement
                                </button>
                            </div>
                            <div v-else-if="requete.voyageur.id != user.id && requete.state == 'en attente' && !requete.has_accepted"
                                style="display: flex; align-items: center; padding: .7rem 0rem; width: 100%; ">
                                <button @click="set_decision('launched')"
                                    style="padding: .6rem; font-size: 1rem; font-weight: bold; border-radius: 8px; margin-right: .6rem; width: 100%; flex-grow: 1; "
                                    class="demande">
                                    Valider la demande
                                </button>
                            </div>

                        </div>

                    </div>
                    <div style="width: 100%; height: 1px; background-color: #ebe8e8;"></div>

                </div>
                <div id="mess_cont" style="padding: .9rem .8rem; flex-grow: 1; min-width: 0%; overflow-y: scroll;">
                    <div v-for="mess in messages" :key="mess.id" style="padding: .6rem 0rem;">
                        <div v-if="is_first_for_day(mess)"
                            style="font-size: 0.9rem; text-align: center; font-weight: bold; margin: .7rem 0rem;">
                            {{ format_date(new Date(mess.created_at)) }}

                        </div>

                        <div v-if="mess.typ != 'norm'"
                            style="font-size: 0.85rem; background-color: rgb(160, 160, 160); color: gray; margin: .5rem 0rem; padding: .6rem 1rem; border-radius: 20px; display: flex; ">
                            <div style="font-size: 1.3rem; margin-right: .6rem; ">
                                <ion-icon :icon="informationCircleOutline"></ion-icon>
                            </div>
                            <div> {{ mess.text }} </div>
                        </div>
                        <div v-else>
                            <div :class="{
                                is_me: mess.user.id == user.id
                            }" style="display: flex; font-size: .8rem; padding: .3rem .5rem; color: gray; ">
                                <div> {{ mess.user.nom.split(' ')[0] }} &bull; {{ format_mdate(new
                                    Date(mess.created_at)) }}</div>
                            </div>
                            <div style="display: flex;  " :class="{
                                is_me: mess.user.id == user.id
                            }">
                                <div style="padding: .7rem;  border-radius: 15px; max-width: 70vw; width: max-content; font-size: .9rem; "
                                    :class="{
                                        me_mess: mess.user.id == user.id,
                                        you_mess: mess.user.id != user.id,
                                        is_bold : mess.user.id == user.id
                                    }" v-if="mess.text"> {{ mess.text }}
                                </div>
                                <div style="padding: .3rem; width: max-content; border-radius: 15px;" :class="{
                                    me_mess: mess.user.id == user.id,
                                    you_mess: mess.user.id != user.id
                                }" v-else-if="mess.get_image"><img :src="mess.get_image" alt=""
                                        style="width: 50vw; border-radius: 15px;"></div>
                                <div style="padding: .2rem;  border-radius: 15px; width: 80vw; font-size: .9rem; "
                                    :class="{
                                        me_mess: mess.user.id == user.id,
                                        you_mess: mess.user.id != user.id
                                    }" v-else-if="mess.get_audio">
                                    <div><audio-reader :url="mess.get_audio"
                                            :color="mess.user.id != user.id ? '#19549E' : 'white'"></audio-reader>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div
                    style="display: flex; align-items: center; justify-content: space-between; padding: .5rem .5rem; background-color: white; z-index: 500;">
                    <div @input="set_text" style="padding: .7rem 1rem; border-style: solid;margin-right: .6rem; border-width: 2px; border-color: rgb(208, 208, 208); border-radius: 20px;flex-grow: 1; max-height: 10rem; overflow: scroll; "
                        data-placeholder="Ecrivez un message" contenteditable id="my_input"></div>
                    <button @click="click_id('img')" style="width: 2.5rem; height: 2.5rem; min-width: 2.5rem; border-radius: 100%;  "
                        class="demande">
                        <ion-icon :icon="image"
                            style="font-size: 1.3rem; position: relative; "></ion-icon>
                    </button>
                    <button v-if="img || text != ''" @click="send_message()" style="width: 2.5rem; height: 2.5rem; min-width: 2.5rem; border-radius: 100%; margin-left: .6rem; "
                        class="demande">
                        <ion-icon v-if="!load_mess" :icon="sendOutline"
                            style="font-size: 1.15rem; position: relative; left: .1rem; "></ion-icon>
                        <ion-spinner v-else :name="'crescent'" :color="'light'" ></ion-spinner>
                    </button>

                </div>
            </div>

            <div style="display: flex; justify-content: center;  " v-else>
                <div style="padding: 3rem;">
                    <ion-spinner :name="'crescent'"></ion-spinner>
                </div>
            </div>

            <div v-show="false" >
                <input id="img" type="file" accept="image/*" @change="e => charg_files(e)" />
            </div>

        </ion-content>
    </ion-page>
</template>

<style scoped>
.is_bold {
    font-weight: bold;
}

div {
    font-family: 'PT Serif' !important;
}

*:focus {
    outline: none;
}

.is_me {
    justify-content: flex-end;
}

.me_mess {
    border-bottom-right-radius: 0px !important;
    background-color: #19549E;
    color: rgb(234, 234, 234);


}

.you_mess {
    border-bottom-left-radius: 0px !important;
    background-color: rgb(233, 233, 233);

}

#my_input:empty::before {
    content: attr(data-placeholder);
    color: gray;
    pointer-events: none;

}
</style>

<script setup lang="ts" >

import { IonPage, IonContent, IonDatetime, IonIcon, onIonViewDidEnter, IonSpinner } from "@ionic/vue";
import { alarm, location, search, arrowForward, paperPlane, arrowBack, chevronBack, ellipsisHorizontal, chevronDownOutline, caretDownOutline, information, informationCircle, informationCircleOutline,  sendOutline, star, images, image, } from "ionicons/icons";
import LocationPicker from "@/components/LocationPicker.vue";
import { ref, watch } from "vue";
import AudioReader from "@/components/AudioReader.vue";
import { useRoute } from "vue-router";
import axios from "axios";
import { access_tok, isScrolled, scroll_bot, show_alert, showLoading, toVoyTime } from "@/global/utils";
import router from "@/router";
import { useWebSocket } from "@vueuse/core";
import { WEB_SOCKET_URL } from "@/global/constants";

/**
 * 
 * Webscket 
 * 
 */

const socket_url = ref(WEB_SOCKET_URL)


const { send } = useWebSocket(socket_url, {
    autoReconnect: {
        delay : 500,
        retries : 500,
    },
    onConnected(ws) {
        console.log('Websocket connected successfully');
    },
    onDisconnected(ws, event) {
        console.error('Websocket disconnected...')
        access_tok(router, undefined).then(e => socket_url.value = WEB_SOCKET_URL + e).catch(e => console.error(e))

    },
    onMessage(ws, event) {
        const message = JSON.parse(event.data)
        if(message.type == 'echo') {
            requete.value = message.result
        } else if (message.type == 'message') {
        
            if(!messages.value.filter(e => e.id == message.result.id)[0]) messages.value.push(message.result)
            scroll_bot("mess_cont");
            load_mess.value = false
        }
        if(g_load.value) g_load.value.dismiss();
    },
})

/**
 * 
 * End
 */

const id = ref(0)
const typ = ref('')
const user = ref()
const requete = ref()
const messages = ref([] as any[])
const init_chat = async () => {
    const resp = await axios.get('api/init_chat/' + id.value, {
        headers: {
            Authorization: `Bearer ${await access_tok(router, undefined)}`
        }
    })
    if (resp.data['done']) {
        user.value = resp.data['result']['user'];
        messages.value = resp.data['result']['messages'].reverse();
        requete.value = resp.data['result']['requete'];
        setTimeout(() => {
            scroll_bot("mess_cont")
        }, 500)

    }
}
const route = useRoute()
const right_profile = (r: any) => typ.value == 'demande' ? r.voyage_correspondant.user : r.voyageur

const set_all = async () => {
    id.value = parseInt(route.params['id'] as string)
    typ.value = route.params['typ'] as string
    await init_chat()
}
set_all()
const g_load = ref()

const set_decision = async (decision: string) => {

    g_load.value = await showLoading('Patientez...')
    const resp = await axios.post('api/set_decision/', {
        decision,
        req: requete.value.id
    }, {
        headers : {
            Authorization : `Bearer ${await access_tok(router, g_load.value)}`
        }
    })
    if(!resp.data['done']) {
        g_load.value.dismiss()
        await show_alert( '','Votre solde est insuffisant, veuillez recharger votre compte.')
    }
}



onIonViewDidEnter(() => {
    access_tok(router, undefined).then(e => socket_url.value += e).catch(e => console.error(e))
})

const is_first_for_day = (m: any) => {
    return m.id == messages.value.filter(e => (format_date(new Date(e.created_at)) == format_date(new Date(m.created_at)))).sort(e => (new Date(e.created_at)).getTime())[0].id
}

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


//Messages sent

const text = ref('')
const img = ref(0)
watch(img, (newi, oldi) => {
    if(newi) send_message()
})

const set_text = (e : any) => {
    text.value = e.target.innerText;
}

const charg_files = async (e : any) => {
    const load = await showLoading('Télechargement...')
    const form = new FormData()
    form.append('file', e.target.files[0])
    const resp = await axios.post('api/charg_files/', form, {
        headers : {
            Authorization : `Bearer ${await access_tok(router, load)}`
        }
    })
    if(resp.data['done']) {
        img.value = resp.data['result']
        send_message()

    }
    load.dismiss()
}

const load_mess = ref(false)
const send_message = async () => {
    if(load_mess.value) return;
    load_mess.value = true
    const mess_obj : {[key : string] : any} = {
        'req' : requete.value.id,
    }
    if (text.value != '') mess_obj.text = text.value;
    if(img.value) mess_obj.image = img.value
    send(JSON.stringify({
        'type' : 'c_m',
        'result' : mess_obj
    }))
    text.value = ""
    clean_inp()
}

const click_id = (id : string) => {
    document.getElementById(id)?.click()
}

const clean_inp = () => {
    const inpt = document.getElementById("my_input");
    if(inpt) inpt.innerText = "";
}

</script>