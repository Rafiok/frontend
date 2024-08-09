<template>
  <ion-page>
    <header-component />
    <ion-content :fullscreen="true">
      <div style="display: flex; flex-direction: column; justify-content: space-between;  ">
        <div>
          <div style="padding: 0.8rem 1rem;">
            <button style="display: flex;align-items: center; padding: 0.6rem 1rem; width: 100%;  "
              class="demande" @click="router.push('/tabs/tab3/?target=offre')">
              <div style="font-size: 1.4rem; margin-right: .6rem;">
                <div><img src="../../public/assets/images/volant.png" alt="volant.png" style="height: 1.4rem;"></div>
              </div>
              <div style="font-size: 1.1rem; text-align: center; flex-grow: 1;">
                Consulter mes demandes
              </div>
            </button>
            <button style="display: flex;align-items: center; padding: 0.6rem 1rem; width: 100%;  "
              class="demande" @click="router.push('/mypub')">
              <div style="font-size: 1.4rem; margin-right: .6rem;">
                <ion-icon :icon="personOutline" style="position: relative;  ">

                </ion-icon>
              </div>
              <div style="font-size: 1.1rem; text-align: center; flex-grow: 1;">
                Mes publications
              </div>
            </button>
          </div>
          <div style="text-align: center; padding: 3rem 2rem; font-size: 1.4rem; ">
            Tu voyages quelques part?<br> A plusieurs <span style="font-weight: bold; color: #19549E;">c'est
              mieux!</span>

          </div>
          <div style="padding: 0.8rem 1rem;">
            <button @click="router.push('/publie')"
              style="display: flex;align-items: center; padding: 0.6rem 1rem; border-radius: 10px; width: 100%;  "
              class="succes">
              <div style="font-size: 1.4rem; margin-right: .6rem;">

              </div>
              <div style="font-size: 1.1rem; text-align: center; flex-grow: 1;">
                Je publie un covoiturage
              </div>
            </button>
          </div>
        </div>
        <div
          style="display: flex; align-items: center; justify-content: center; padding-top: 3rem; /* padding-bottom: 3rem; */">
          <img src="../../public/assets/images/cars.svg" alt="car.svg" style="width: 90vw;">
        </div>
      </div>


    </ion-content>
  </ion-page>
</template>

<style scoped>
div {
  font-family: 'PT Serif' !important;
}
</style>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import { paperPlane, personOutline } from 'ionicons/icons';
import HeaderComponent from '@/components/HeaderComponent.vue'
import router from '@/router';
</script>
