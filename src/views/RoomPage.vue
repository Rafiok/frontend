<template>
    <ion-page>

        <ion-content :fullscreen="true">
            <div style="display: flex; flex-direction: column; justify-content: space-between; height: 100%;">
                <div>
                    <div style="display: flex;align-items: center;justify-content: space-between;">
                        <div style="padding: .5rem .5rem; width: 100; display: flex; align-items: center;">
                            <button
                                style="width: 3rem; height: 3rem; min-width: 3rem;border-radius: 15px; font-size: 1.3rem; color: gray; background-color: transparent; ">
                                <ion-icon :icon="chevronBack"
                                    style="position: relative; top: .15rem; right: .12rem;"></ion-icon>
                            </button>
                            <div style="padding-top: 0rem; ">
                                <div style="font-weight: bold;">Vincent Monwanou</div>
                                <div style="font-size: .75rem;color: gray;margin-top: .08rem; ">Temps de réponse: 1h
                                </div>
                            </div>


                        </div>
                        <button
                            style="width: 3rem; height: 3rem; min-width: 3rem;border-radius: 15px; font-size: 1.3rem; color: gray; background-color: transparent; ">
                            <ion-icon :icon="ellipsisHorizontal"
                                style="position: relative; top: .15rem; right: .12rem;"></ion-icon>
                        </button>
                    </div>
                    <div style="width: 100%; height: 1px; background-color: #ebe8e8;"></div>
                </div>
                <div>
                    <div style="padding: .7rem 1.2rem; display: flex; ">

                        <div style="background-size:cover ; background-position: top center; width: 3rem; min-width: 3rem; height: 3rem; border-radius: 15px; margin-right: .6rem;"
                            :style="{
                                backgroundImage: `url('${'../../assets/images/rr.jpg'}')`
                            }">

                        </div>
                        <div style="padding-top: 0rem;">
                            <div style="font-size: 1rem; font-weight: bold; ">
                                Porto-Novo - Cotonou
                            </div>
                            <div style="margin-top: .1rem;   font-size: .9rem;color: gray;  ">
                                Heure de départ: <strong>Lun. 08/02 à 14h00</strong>
                            </div>
                            <div
                                style="display: flex; align-items: center; margin-top: .5rem; font-size: .8rem; border-color: gray; border-width: 1px; border-style: solid; width: max-content; padding: .2rem .7rem; border-radius: 10px; ">

                                <div
                                    style="width: .4rem; height: .4rem; min-width: .4rem; border-radius: 100%; background-color: green; margin-right: .4rem;">
                                </div>
                                <div style="font-size: .8rem;  ">
                                    Acceptée

                                </div>
                            </div>
                        </div>

                    </div>
                    <div style="width: 100%; height: 1px; background-color: #ebe8e8;"></div>

                </div>
                <div  style="padding: .9rem .8rem; flex-grow: 1; min-width: 0%; overflow-y: scroll;">
                    <div style="padding: .6rem 0rem;">
                        <div style="font-size: 0.9rem; text-align: center; font-weight: bold; margin: .7rem 0rem;">
                            Aujourd'hui

                        </div>

                        <div
                            style="font-size: 0.9rem; background-color: rgb(245, 245, 245); color: gray; margin: .5rem 0rem; padding: .6rem 1rem; border-radius: 20px; display: flex; ">
                            <div style="font-size: 1.3rem; margin-right: .6rem; ">
                                <ion-icon :icon="informationCircleOutline"></ion-icon>
                            </div>
                            <div>Votre demande de covoiturage a été envoyé avec succès</div>
                        </div>
                        <div>
                            <div style="display: flex; font-size: .8rem; padding: .3rem .5rem; color: gray; ">
                                <div>Vincent &bull; 09:41</div>
                            </div>
                            <div style="padding: .7rem;  border-radius: 15px; max-width: 70vw; width: max-content; font-size: .9rem; "
                                class="you_mess" v-if="false"> Bonjour Monsieur! Où pouvons-nous nous rencontrer. </div>
                            <div style="padding: .3rem; width: max-content; border-radius: 15px;" class="you_mess"
                                v-if="false"><img :src="'../../assets/images/rr.jpg'" alt=""
                                    style="width: 50vw; border-radius: 15px;"></div>
                            <div style="padding: .2rem;  border-radius: 15px; width: 80vw; font-size: .9rem; "
                                class="you_mess" v-if="true">
                                <div><audio-reader :url="'../../public/assets/images/sss.mp3'"></audio-reader></div>
                            </div>
                            <div style="display: flex; font-size: .7rem; padding: .3rem .5rem; color: gray; ">
                                <div>Lu par Georis</div>
                            </div>

                        </div>
                    </div>
                    <div style="padding: .6rem 0rem;">
                        <div v-if="false"
                            style="font-size: 0.9rem; text-align: center; font-weight: bold; margin: .7rem 0rem;">
                            Aujourd'hui

                        </div>

                        <div v-if="false"
                            style="font-size: 0.9rem; background-color: rgb(245, 245, 245); color: gray; margin: .5rem 0rem; padding: .6rem 1rem; border-radius: 20px; display: flex; ">
                            <div style="font-size: 1.3rem; margin-right: .6rem; ">
                                <ion-icon :icon="informationCircleOutline"></ion-icon>
                            </div>
                            <div>Votre demande de covoiturage a été envoyé avec succès</div>
                        </div>
                        <div>
                            <div class="is_me"
                                style="display: flex; font-size: .8rem; padding: .3rem .5rem; color: gray; ">
                                <div>Vincent &bull; 09:41</div>
                            </div>
                            <div style="display: flex;  " class="is_me">
                                <div style="padding: .7rem;  border-radius: 15px; max-width: 70vw; width: max-content; font-size: .9rem; "
                                    class="me_mess " v-if="false"> Bonjour Monsieur! Où pouvons-nous nous rencontrer.
                                </div>
                                <div style="padding: .3rem; width: max-content; border-radius: 15px;" class="me_mess"
                                    v-if="true"><img :src="'../../assets/images/rr.jpg'" alt=""
                                        style="width: 50vw; border-radius: 15px;"></div>
                                <div style="padding: .2rem;  border-radius: 15px; width: 80vw; font-size: .9rem; "
                                    class="me_mess" v-if="false">
                                    <div><audio-reader :url="'../../public/assets/images/sss.mp3'"
                                            :color="'white'"></audio-reader></div>
                                </div>
                            </div>
                            <div class="is_me"
                                style="display: flex; font-size: .7rem; padding: .3rem .5rem; color: gray; ">
                                <div>Lu par Georis</div>
                            </div>

                        </div>
                    </div>
                </div>

                <div style="display: flex; align-items: center; justify-content: space-between; padding: .5rem .5rem; background-color: white; z-index: 500;">
                    <div style="padding: .7rem 1rem; border-style: solid;margin-right: .6rem; border-width: 2px; border-color: rgb(208, 208, 208); border-radius: 20px;flex-grow: 1; max-height: 10rem; overflow: scroll; " data-placeholder="Ecrivez un message" contenteditable id="my_input" ></div>
                    <button style="width: 2.5rem; height: 2.5rem; min-width: 2.5rem; border-radius: 100%;" class="demande">
                        <ion-icon :icon="sendOutline" style="font-size: 1.15rem; position: relative; left: .1rem; " ></ion-icon>
                    </button>

                </div>
            </div>

        </ion-content>
    </ion-page>
</template>

<style scoped>
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
#my_input:empty::before{
content: attr(data-placeholder);
color: gray;
pointer-events: none;

}
</style>

<script setup lang="ts">

import { IonPage, IonContent, IonDatetime, IonIcon } from "@ionic/vue";
import { alarm, location, search, arrowForward, paperPlane, arrowBack, chevronBack, ellipsisHorizontal, chevronDownOutline, caretDownOutline, information, informationCircle, informationCircleOutline, send, sendOutline, } from "ionicons/icons";
import LocationPicker from "@/components/LocationPicker.vue";
import { ref } from "vue";
import AudioReader from "@/components/AudioReader.vue";


const lOpen = ref(false)

const depart = ref()
const arrivee = ref()
const aOpen = ref(false)

const step = ref(0)

</script>