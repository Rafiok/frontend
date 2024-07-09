<template>
  <ion-page>

    <header-component />
    <ion-content :fullscreen="true">
      <div style="padding: .7rem 1rem; ">
        <ion-segment value="default" mode="ios">
          <ion-segment-button value="default">
            <ion-label>Mes demandes</ion-label>
          </ion-segment-button>
          <ion-segment-button value="segment">
            <ion-label>Mes offres</ion-label>
          </ion-segment-button>
        </ion-segment>
      </div>
      <div style="padding: .05rem .3rem; margin-top: -.4rem; ">
        <ion-searchbar :animated="true" mode="ios">

        </ion-searchbar>
      </div>

      <div>
        <div>
          <div style="width: 100%; height: 1px; background-color: #ebe8e8;">

          </div>
          <div style="width: 100%; padding: 1rem 1rem; display: flex;">
            <div
              style="background-size:cover ; background-position: top center; width: 3.2rem; height: 3.2rem; border-radius: 100%; min-width: 3.2rem; margin-right: .8rem; "
              :style="{
                backgroundImage: `url('${'../../assets/images/rr.jpg'}')`
              }">

            </div>
            <div style="flex-grow: 1; padding-top: .2rem; ">
              <div style="font-size: 1rem; font-weight: bold; ">
                Vincent MONWANOU
              </div>
              <div
                style="margin: .4rem 0rem; font-size: .9rem; color: gray; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae nostrum amet excepturi pariatur
                perspiciatis itaque porro consequuntur placeat! Esse sint aspernatur laudantium molestiae officiis illo
                similique maxime minus eveniet illum.

              </div>
              <div style="display: flex; align-items: center;">

                <div
                  style="width: .4rem; height: .4rem; min-width: .4rem; border-radius: 100%; background-color: green; margin-right: .6rem;">
                </div>
                <div style="font-size: 1rem;  ">
                  Acceptée

                </div>
              </div>
            </div>

          </div>
        </div>
        <div>
          <div style="width: 100%; height: 1px; background-color: #ebe8e8;">

          </div>
          <div style="width: 100%; padding: 1rem 1rem; display: flex;">
            <div
              style="background-size:cover ; background-position: top center; width: 3.2rem; height: 3.2rem; border-radius: 100%; min-width: 3.2rem; margin-right: .8rem; "
              :style="{
                backgroundImage: `url('${'../../assets/images/rr.jpg'}')`
              }">

            </div>
            <div style="flex-grow: 1; padding-top: .2rem; ">
              <div style="font-size: 1rem; font-weight: bold; display: flex; align-items: center; justify-content: space-between; ">
                <div>Vincent MONWANOU</div>
                <button style=" width: 1.5rem; height: 1.5rem; min-width: 1.5rem; font-size: .8rem; border-radius: 100%; background-color: #19549E; color: white; position: relative; bottom: .1rem; " >
                  1
                </button>
              </div>
              <div
                style="margin: .4rem 0rem; font-size: .9rem; color: gray; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; font-weight: 600; ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae nostrum amet excepturi pariatur
                perspiciatis itaque porro consequuntur placeat! Esse sint aspernatur laudantium molestiae officiis illo
                similique maxime minus eveniet illum.

              </div>
              <div style="display: flex; align-items: center;">

                <div
                  style="width: .4rem; height: .4rem; min-width: .4rem; border-radius: 100%; background-color: red; margin-right: .6rem;">
                </div>
                <div style="font-size: 1rem;  ">
                  Refusée

                </div>
              </div>
            </div>

          </div>
        </div>
        <div>
          <div style="width: 100%; height: 1px; background-color: #ebe8e8;">

          </div>
          <div style="width: 100%; padding: 1rem 1rem; display: flex;">
            <div
              style="background-size:cover ; background-position: top center; width: 3.2rem; height: 3.2rem; border-radius: 100%; min-width: 3.2rem; margin-right: .8rem; "
              :style="{
                backgroundImage: `url('${'../../assets/images/rr.jpg'}')`
              }">

            </div>
            <div style="flex-grow: 1; padding-top: .2rem; ">
              <div style="font-size: 1rem; font-weight: bold; ">
                Vincent MONWANOU
              </div>
              <div
                style="margin: .4rem 0rem; font-size: .9rem; color: gray; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae nostrum amet excepturi pariatur
                perspiciatis itaque porro consequuntur placeat! Esse sint aspernatur laudantium molestiae officiis illo
                similique maxime minus eveniet illum.

              </div>
              <div style="display: flex; align-items: center;">

                <div
                  style="width: .4rem; height: .4rem; min-width: .4rem; border-radius: 100%; background-color: gray; margin-right: .6rem;">
                </div>
                <div style="font-size: 1rem;  ">
                  En attente

                </div>
              </div>
            </div>

          </div>
        </div>
        <div>
          <div style="width: 100%; height: 1px; background-color: #ebe8e8;">

          </div>
          <div style="width: 100%; padding: 1rem 1rem; display: flex;">
            <div
              style="background-size:cover ; background-position: top center; width: 3.2rem; height: 3.2rem; border-radius: 100%; min-width: 3.2rem; margin-right: .8rem; "
              :style="{
                backgroundImage: `url('${'../../assets/images/rr.jpg'}')`
              }">

            </div>
            <div style="flex-grow: 1; padding-top: .2rem; ">
              <div style="font-size: 1rem; font-weight: bold; ">
                Vincent MONWANOU
              </div>
              <div
                style="margin: .4rem 0rem; font-size: .9rem; color: gray; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae nostrum amet excepturi pariatur
                perspiciatis itaque porro consequuntur placeat! Esse sint aspernatur laudantium molestiae officiis illo
                similique maxime minus eveniet illum.

              </div>
              <div style="display: flex; align-items: center;">

                <div
                  style="width: .4rem; height: .4rem; min-width: .4rem; border-radius: 100%; background-color: green; margin-right: .6rem;">
                </div>
                <div style="font-size: 1rem;  ">
                  Acceptée

                </div>
              </div>
            </div>

          </div>
        </div>
        <div>
          <div style="width: 100%; height: 1px; background-color: #ebe8e8;">

          </div>
          <div style="width: 100%; padding: 1rem 1rem; display: flex;">
            <div
              style="background-size:cover ; background-position: top center; width: 3.2rem; height: 3.2rem; border-radius: 100%; min-width: 3.2rem; margin-right: .8rem; "
              :style="{
                backgroundImage: `url('${'../../assets/images/rr.jpg'}')`
              }">

            </div>
            <div style="flex-grow: 1; padding-top: .2rem; ">
              <div style="font-size: 1rem; font-weight: bold; ">
                Vincent MONWANOU
              </div>
              <div
                style="margin: .4rem 0rem; font-size: .9rem; color: gray; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae nostrum amet excepturi pariatur
                perspiciatis itaque porro consequuntur placeat! Esse sint aspernatur laudantium molestiae officiis illo
                similique maxime minus eveniet illum.

              </div>
              <div style="display: flex; align-items: center;">

                <div
                  style="width: .4rem; height: .4rem; min-width: .4rem; border-radius: 100%; background-color: green; margin-right: .6rem;">
                </div>
                <div style="font-size: 1rem;  ">
                  Acceptée

                </div>
              </div>
            </div>

          </div>
        </div>
      </div>


    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonSegment, IonSegmentButton, IonLabel, IonSearchbar } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import { paperPlane } from 'ionicons/icons';
import HeaderComponent from '@/components/HeaderComponent.vue'
</script>
