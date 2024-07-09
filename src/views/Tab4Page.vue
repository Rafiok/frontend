<template>
    <ion-page>
        <header-component />
        <ion-content :fullscreen="true">
            <div style="padding: 1.5rem .5rem; background-color: rgb(226, 226, 226);">
                <div style="text-align: center; font-size: 1.2rem; color: gray; font-weight: 600;">Ton solde est de:
                </div>
                <div style="padding: 1.3rem; color: #19549E;text-align: center;">
                    <span style="font-weight: bolder; font-size: 3rem; position: relative; right: .2rem;">5000</span>
                    <span style="font-size: 2rem; position: relative; left: .2rem;">XOF</span>
                </div>
                <div style="padding: .6rem 0rem; display: flex; align-items: center;  ">
                    <button
                        style="padding: .6rem; background-color: white; font-size: 1rem; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.2); flex-grow: 1; border-radius: 10px; margin-right: .6rem;">Recharger
                        mon compte</button>
                    <button
                        style="padding: .6rem; background-color: white; font-size: 1rem; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.2); flex-grow: 1; border-radius: 10px;">Récupérer
                        mon argent</button>
                </div>
                <div style="margin-bottom: 2rem;">
                    <button
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
                    <ion-segment value="paye" mode="ios">
                        <ion-segment-button value="paye">
                            <ion-label>Payé</ion-label>
                        </ion-segment-button>
                        <ion-segment-button value="encaisse">
                            <ion-label>Encaissé</ion-label>
                        </ion-segment-button>
                        <ion-segment-button value="attente">
                            <ion-label>En attente</ion-label>
                        </ion-segment-button>
                    </ion-segment>
                </div>
                <div >
                    <div style="display: flex;justify-content: space-between;padding: .8rem .8rem; border-radius: 10px; background-color: rgb(245, 245, 245); margin: .6rem 0rem; ">
                        <div style="margin-right: .6rem;">
                            <ion-icon :icon="checkbox" style="color: green; font-size: 2rem;"></ion-icon>
                        </div>
                        <div style="flex-grow: 1; margin-right: .6rem;" >
                            <div style="font-weight: bold; font-size: 1rem; ">
                                Montant payé pour le covoiturage de Porto-Novo à Cotonou le 27/11/2020 à 17:43.
                            </div>
                            <div style="padding-top: .5rem; font-size: .9rem;" >
                                Ce montant sera transmis au conducteur une fois qu'il aura scanné ton QR code
                            </div>
                        </div>
                        

                        <div style="color: #19549E; text-wrap: nowrap; "> 
                                500 XOF

                            </div>
                        
                    </div>
                    <div style="display: flex;justify-content: space-between;padding: .8rem .8rem; border-radius: 10px; background-color: rgb(245, 245, 245); margin: .6rem 0rem; ">
                        <div style="margin-right: .6rem;">
                            <ion-icon :icon="checkbox" style="color: green; font-size: 2rem;"></ion-icon>
                        </div>
                        <div style="flex-grow: 1; margin-right: .6rem;" >
                            <div style="font-weight: bold; font-size: 1rem; ">
                                Montant payé pour le covoiturage de Porto-Novo à Cotonou le 27/11/2020 à 17:43.
                            </div>
                            <div style="padding-top: .5rem; font-size: .9rem;" >
                                Ce montant sera transmis au conducteur une fois qu'il aura scanné ton QR code
                            </div>
                        </div>
                        

                        <div style="color: #19549E; text-wrap: nowrap; "> 
                                500 XOF

                            </div>
                        
                    </div>
                    <div style="display: flex;justify-content: space-between;padding: .8rem .8rem; border-radius: 10px; background-color: rgb(245, 245, 245); margin: .6rem 0rem; ">
                        <div style="margin-right: .6rem;">
                            <ion-icon :icon="checkbox" style="color: green; font-size: 2rem;"></ion-icon>
                        </div>
                        <div style="flex-grow: 1; margin-right: .6rem;" >
                            <div style="font-weight: bold; font-size: 1rem; ">
                                Montant payé pour le covoiturage de Porto-Novo à Cotonou le 27/11/2020 à 17:43.
                            </div>
                            <div style="padding-top: .5rem; font-size: .9rem;" >
                                Ce montant sera transmis au conducteur une fois qu'il aura scanné ton QR code
                            </div>
                        </div>
                        

                        <div style="color: #19549E; text-wrap: nowrap; "> 
                                500 XOF

                            </div>
                        
                    </div>
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
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonSegment, IonSegmentButton, IonLabel, IonSearchbar } from '@ionic/vue';
import { checkbox, checkboxOutline, logoWhatsapp, paperPlane } from 'ionicons/icons';
import HeaderComponent from '@/components/HeaderComponent.vue'
import { Icon } from 'ionicons/dist/types/components/icon/icon';
</script>