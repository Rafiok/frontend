<template>
  <ion-page>
    <header-component />
    <ion-content :fullscreen="true">

      <div style="padding: 0.8rem 1rem;">
        <button style="display: flex;align-items: center; padding: 0.6rem 1rem; border-radius: 10px; width: 100%;  "
          class="demande">
          <div style="font-size: 1.4rem; margin-right: .6rem;">
            <ion-icon :icon="personOutline" style="position: relative;  ">

            </ion-icon>
          </div>

          <div style="font-size: 1.1rem;">
            Consulter mes demandes
          </div>
        </button>
      </div>
      <div style="padding: 0rem 1rem;">
        <button
          style=" display: flex;align-items: center; padding: 0.6rem 1rem; border-radius: 10px; width: 100%; color: gray; ">
          <div style="font-size: 1.4rem; margin-right: .6rem;">
            <ion-icon :icon="search" style="position: relative;  ">

            </ion-icon>
          </div>

          <div style="font-size: 1.1rem;  ">
            Chercher un covoiturage
          </div>
        </button>
      </div>

      <div style="padding: .9rem; text-align: center;font-weight: bold; color: #19549e;">
        99 offres disponibles
      </div>
      <div>
        <div style="padding: 1.1rem; text-align: center;font-size: 1.3rem ;font-weight: bold;color: #ffb03f;">
          Toutes les offres
        </div>
        <div style="padding: .3rem .6rem;">
          <div
            style=" margin: .6rem 0rem; padding: .6rem .9rem; background-color: white; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.2); border-radius: 10px;">
            <div style="width:100%; display: flex; align-items: center; justify-content: space-between;">
              <div style="display: flex; align-items: center;">
                <div style="font-size: 1.3rem;color: #19549e;margin-right: .6rem;">
                  <ion-icon :icon="caretDownOutline" style="position: relative; top: .15rem; ">

                  </ion-icon>
                </div>
                <div>Porto-Novo</div>
              </div>
              <div style="color: gray;">
                Lun. 08/02 à 12h55
              </div>
            </div>
            <div style="padding: .1rem 0rem">
              <div
                style="width: .3rem; height: .3rem;border-radius: 100%; background-color: black;margin-left: .42rem;">
              </div>
            </div>
            <div style="padding: .6rem 0rem">
              <div
                style="width: .3rem; height: .3rem;border-radius: 100%; background-color: black;margin-left: .42rem;">
              </div>
            </div>
            <div
              style="width:100%; display: flex; align-items: center; justify-content: space-between; margin-top: -.3rem; ">
              <div style="display: flex; align-items: center;">
                <div style="font-size: 1.5rem;color: #ffb03f;margin-right: .6rem;">
                  <ion-icon :icon="chevronDownOutline" style="position: relative; top: .25rem; right: .1rem; ">

                  </ion-icon>
                </div>
                <div>Cotonou</div>
              </div>
              <div style="color: gray;">
                Lun. 08/02 à 14h00
              </div>
            </div>
            <div style="padding: .8rem 0rem; padding-bottom: 0rem !important; display: flex;align-items: center;justify-content: space-between;">
              <div style="display: flex; align-items: center;">
                <div
                  style="background-size:cover ; background-position: top center; width: 2.5rem; min-width: 2.5rem; height: 2.5rem; border-radius: 100%;margin-right: .6rem;"
                  :style="{
                    backgroundImage: `url('${'../../assets/images/rr.jpg'}')`
                  }">

                </div>
                <div style="padding-top: .2rem;" >
                  <div style="font-size: .9rem;" >
                    Vincent
                  </div>
                  <div style="padding-top: .1rem;display: flex; align-items: center;">
                    <div style="margin-right: .3rem ">
                      <ion-icon :icon="star" style="color: #ffb03f;font-size: 1.1rem; ">

                      </ion-icon>
                    </div>
                    <div style="font-size: .7rem;color: gray; text-wrap: nowrap; ">
                      4/5 - 5 Avis
                    </div>
                  </div>
                </div>
              </div>
              <div style="display: flex;align-items: center;">
                <button style="background-color: transparent; padding: .4rem; font-size: 1.6rem; margin-right: .4rem;">
                  <ion-icon :icon="flashOutline" style="color: #ffb03f;font-size: 1.4rem; "></ion-icon>
                </button>
                <button style="background-color: transparent; display: flex; align-items: center; ">
                  <div style="font-size: 1.2rem; font-weight: bold; margin-right: .2rem; ">3</div>
                  <div >
                    <ion-icon :icon="bodyOutline" style="color: #ffb03f;font-size: 1.2rem; color: #19549e;"></ion-icon>
                  </div>

                </button>
                <div style="margin-left: .6rem;font-size: 1.1rem;font-weight: bold; color: #19549e; ">600 XOF</div>
              </div>
            </div>
          </div>
          <div
            style=" margin: .6rem 0rem; padding: .6rem .9rem; background-color: white; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.2); border-radius: 10px;">
            <div style="width:100%; display: flex; align-items: center; justify-content: space-between;">
              <div style="display: flex; align-items: center;">
                <div style="font-size: 1.3rem;color: #19549e;margin-right: .6rem;">
                  <ion-icon :icon="caretDownOutline" style="position: relative; top: .15rem; ">

                  </ion-icon>
                </div>
                <div>Porto-Novo</div>
              </div>
              <div style="color: gray;">
                Lun. 08/02 à 12h55
              </div>
            </div>
            <div style="padding: .1rem 0rem">
              <div
                style="width: .3rem; height: .3rem;border-radius: 100%; background-color: black;margin-left: .42rem;">
              </div>
            </div>
            <div style="padding: .6rem 0rem">
              <div
                style="width: .3rem; height: .3rem;border-radius: 100%; background-color: black;margin-left: .42rem;">
              </div>
            </div>
            <div
              style="width:100%; display: flex; align-items: center; justify-content: space-between; margin-top: -.3rem; ">
              <div style="display: flex; align-items: center;">
                <div style="font-size: 1.5rem;color: #ffb03f;margin-right: .6rem;">
                  <ion-icon :icon="chevronDownOutline" style="position: relative; top: .25rem; right: .1rem; ">

                  </ion-icon>
                </div>
                <div>Cotonou</div>
              </div>
              <div style="color: gray;">
                Lun. 08/02 à 14h00
              </div>
            </div>
            <div style="padding: .8rem 0rem; padding-bottom: 0rem !important; display: flex;align-items: center;justify-content: space-between;">
              <div style="display: flex; align-items: center;">
                <div
                  style="background-size:cover ; background-position: top center; width: 2.5rem; min-width: 2.5rem; height: 2.5rem; border-radius: 100%;margin-right: .6rem;"
                  :style="{
                    backgroundImage: `url('${'../../assets/images/rr.jpg'}')`
                  }">

                </div>
                <div style="padding-top: .2rem;" >
                  <div style="font-size: .9rem;" >
                    Vincent
                  </div>
                  <div style="padding-top: .1rem;display: flex; align-items: center;">
                    <div style="margin-right: .3rem ">
                      <ion-icon :icon="star" style="color: #ffb03f;font-size: 1.1rem; ">

                      </ion-icon>
                    </div>
                    <div style="font-size: .7rem;color: gray; text-wrap: nowrap; ">
                      4/5 - 5 Avis
                    </div>
                  </div>
                </div>
              </div>
              <div style="display: flex;align-items: center;">
                <button style="background-color: transparent; padding: .4rem; font-size: 1.6rem; margin-right: .4rem;">
                  <ion-icon :icon="flashOutline" style="color: #ffb03f;font-size: 1.4rem; "></ion-icon>
                </button>
                <button style="background-color: transparent; display: flex; align-items: center; ">
                  <div style="font-size: 1.2rem; font-weight: bold; margin-right: .2rem; ">3</div>
                  <div >
                    <ion-icon :icon="bodyOutline" style="color: #ffb03f;font-size: 1.2rem; color: #19549e;"></ion-icon>
                  </div>

                </button>
                <div style="margin-left: .6rem;font-size: 1.1rem;font-weight: bold; color: #19549e; ">600 XOF</div>
              </div>
            </div>
          </div>
          <div
            style=" margin: .6rem 0rem; padding: .6rem .9rem; background-color: white; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.2); border-radius: 10px;">
            <div style="width:100%; display: flex; align-items: center; justify-content: space-between;">
              <div style="display: flex; align-items: center;">
                <div style="font-size: 1.3rem;color: #19549e;margin-right: .6rem;">
                  <ion-icon :icon="caretDownOutline" style="position: relative; top: .15rem; ">

                  </ion-icon>
                </div>
                <div>Porto-Novo</div>
              </div>
              <div style="color: gray;">
                Lun. 08/02 à 12h55
              </div>
            </div>
            <div style="padding: .1rem 0rem">
              <div
                style="width: .3rem; height: .3rem;border-radius: 100%; background-color: black;margin-left: .42rem;">
              </div>
            </div>
            <div style="padding: .6rem 0rem">
              <div
                style="width: .3rem; height: .3rem;border-radius: 100%; background-color: black;margin-left: .42rem;">
              </div>
            </div>
            <div
              style="width:100%; display: flex; align-items: center; justify-content: space-between; margin-top: -.3rem; ">
              <div style="display: flex; align-items: center;">
                <div style="font-size: 1.5rem;color: #ffb03f;margin-right: .6rem;">
                  <ion-icon :icon="chevronDownOutline" style="position: relative; top: .25rem; right: .1rem; ">

                  </ion-icon>
                </div>
                <div>Cotonou</div>
              </div>
              <div style="color: gray;">
                Lun. 08/02 à 14h00
              </div>
            </div>
            <div style="padding: .8rem 0rem; padding-bottom: 0rem !important; display: flex;align-items: center;justify-content: space-between;">
              <div style="display: flex; align-items: center;">
                <div
                  style="background-size:cover ; background-position: top center; width: 2.5rem; min-width: 2.5rem; height: 2.5rem; border-radius: 100%;margin-right: .6rem;"
                  :style="{
                    backgroundImage: `url('${'../../assets/images/rr.jpg'}')`
                  }">

                </div>
                <div style="padding-top: .2rem;" >
                  <div style="font-size: .9rem;" >
                    Vincent
                  </div>
                  <div style="padding-top: .1rem;display: flex; align-items: center;">
                    <div style="margin-right: .3rem ">
                      <ion-icon :icon="star" style="color: #ffb03f;font-size: 1.1rem; ">

                      </ion-icon>
                    </div>
                    <div style="font-size: .7rem;color: gray; text-wrap: nowrap; ">
                      4/5 - 5 Avis
                    </div>
                  </div>
                </div>
              </div>
              <div style="display: flex;align-items: center;">
                <button style="background-color: transparent; padding: .4rem; font-size: 1.6rem; margin-right: .4rem;">
                  <ion-icon :icon="flashOutline" style="color: #ffb03f;font-size: 1.4rem; "></ion-icon>
                </button>
                <button style="background-color: transparent; display: flex; align-items: center; ">
                  <div style="font-size: 1.2rem; font-weight: bold; margin-right: .2rem; ">3</div>
                  <div >
                    <ion-icon :icon="bodyOutline" style="color: #ffb03f;font-size: 1.2rem; color: #19549e;"></ion-icon>
                  </div>

                </button>
                <div style="margin-left: .6rem;font-size: 1.1rem;font-weight: bold; color: #19549e; ">600 XOF</div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div>

      </div>

      <ExploreContainer name="Tab 1 page" />
    </ion-content>

  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import HeaderComponent from '@/components/HeaderComponent.vue'
import { bodyOutline, caretDownOutline, chevronDownOutline, flash, flashOffOutline, flashOutline, personOutline, search, star } from 'ionicons/icons';

</script>
