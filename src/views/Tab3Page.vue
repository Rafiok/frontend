<template>
  <ion-page>

    <header-component />
    <ion-content :fullscreen="true">
      <div style="padding: .7rem 1rem; ">
        <ion-segment :value="typ" mode="ios" @ion-change="e => typ = e.detail.value as string">
          <ion-segment-button value="demande">
            <ion-label>Mes offres</ion-label>
          </ion-segment-button>
          <ion-segment-button value="offre">
            <ion-label>Mes demandes</ion-label>
          </ion-segment-button>
        </ion-segment>
      </div>
      <div style="padding: .05rem .3rem; margin-top: -.4rem; ">
        <ion-searchbar :value="search_w" @ion-input="e => search_w = e.detail.value as string" :animated="true" mode="ios">

        </ion-searchbar>
      </div>

      <div v-if="requetes.length">
        <div v-for="req in requetes" :key="req.id" @click="router.push('/room/' + typ + '/' + req.id + '/')" class="ripple-parent ion-activatable" >
          <ion-ripple-effect ></ion-ripple-effect>
          <div style="width: 100%; height: 1px; background-color: #ebe8e8;">

          </div>
          <div style="width: 100%; padding: 1rem 1rem; display: flex;">
            <div
              style="background-size:cover ; background-position: top center; width: 3.2rem; height: 3.2rem; border-radius: 100%; min-width: 3.2rem; margin-right: .8rem; "
              :style="{
                backgroundImage: `url('${right_profile(req).get_profil}')`
              }">

            </div>
            <div style="flex-grow: 1; padding-top: .2rem; ">
              <div style="font-size: 1.1rem; font-weight: bold; ">
                {{ right_profile(req).nom }}
              </div>
              <div v-if="req.last_message.get_image"
                style="margin: .4rem 0rem; font-size: .9rem; color: gray; display: flex; align-items: center;  ">
                <div style="font-size: 1.4rem; margin-right: .2rem;" >
                  <ion-icon :icon="image" ></ion-icon>
                </div>
                <div >
                  Image
                </div>
              </div>
              <div v-if="req.last_message.get_audio"
                style="margin: .4rem 0rem; font-size: .9rem; color: gray; display: flex; align-items: center;  ">
                <div style="font-size: 1.4rem; margin-right: .2rem;" >
                  <ion-icon :icon="mic" ></ion-icon>
                </div>
                <div >
                  Audio
                </div>
              </div>
              <div v-else
                style="margin: .4rem 0rem; font-size: .9rem; color: gray; display: -webkit-box; -webkit-line-clamp: 2; line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; ">

                {{ req.last_message.text }}
              </div>
              <div style="font-size: .9rem; font-weight: bold;"  >
                {{ req.lieux_depart.nom }} - {{ req.lieux_arrive.nom }}
              </div>
              <div style="display: flex; align-items: center;">

                <div
                  style="width: .4rem; height: .4rem; min-width: .4rem; border-radius: 100%; margin-right: .6rem; font-size: .8rem; " :style="{
                    backgroundColor : req.state == 'en attente' ? 'gray' : (req.state == 'refusé' ? 'red' : 'green') ,
                  }" >
                </div>
                <div style="font-size: 1rem;  ">
                  {{ req.state }}

                </div>
              </div>
            </div>

          </div>
        </div>
        
      </div>
      <div v-else-if="has_done" style="padding: 4rem;">
        <div style="display: flex; justify-content: center; " >
          <img :src="'../../assets/images/nodata.svg'" style="width: 40vw;"  />
        </div>
        <div style="padding-top: 1.2rem; text-align: center;" >
          Aucun voyage correspondant
        </div>

      </div>
      <div style="padding: 3rem; display: flex; align-items: center; justify-content: center; " v-else>
        <div>
          <ion-spinner :name="'crescent'"></ion-spinner>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>
 
<style scoped >
div {
    font-family: 'PT Serif' !important;
}
</style>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonSegment, IonSegmentButton, IonLabel, IonSearchbar, onIonViewDidEnter, IonSpinner, IonIcon, IonRippleEffect } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import { image, mic, paperPlane, search } from 'ionicons/icons';
import HeaderComponent from '@/components/HeaderComponent.vue'
import { computed, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import router from '@/router';
import axios from 'axios';
import { access_tok } from '@/global/utils';

const typ = ref('demande')
const offres = ref([] as any[])
const demandes = ref([] as any[])
const search_w = ref('')
const has_done = ref(false)
const requetes = computed(() => {
  const reqs = typ.value == 'offre' ? offres.value : demandes.value;
  return reqs.filter(e => (e.lieux_depart.nom.includes(search_w.value) || e.lieux_arrive.nom.includes(search_w.value) ))
})

const right_profile = (r: any) => typ.value == 'demande' ? r.voyage_correspondant.user : r.voyageur

const get_requetes = async () => {
  has_done.value = false
  const resp = await axios.get('api/get_requetes/', {
    headers : {
      Authorization : `Bearer ${await access_tok(router, undefined)}`
    }
  })
  if(resp.data['done']) demandes.value = resp.data['result']['demandes'], offres.value = resp.data['result']['offres'];
  if(!resp.data['result'].length) has_done.value = true

}

const target_pk = ref(0)
const route = useRoute()


onIonViewDidEnter(() => {
  try {
    const target = route.query['target'] as string;
  const target_list = target.split(':')
  target_pk.value = parseInt(target_list[1]);
  typ.value = target_list[0];
  } catch (e) {
    console.log(e)
  }
  get_requetes();
})

</script>
