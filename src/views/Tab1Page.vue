<template>
  <ion-page>
    <header-component />
    <ion-content :fullscreen="true">

      <div style="padding: 0.8rem 1rem;">
        <button @click="router.push('/tabs/tab3/?target=demande')"
          style="display: flex;align-items: center; padding: 0.6rem 1rem; border-radius: 10px; width: 100%;  "
          class="demande">
          <div style="font-size: 1.4rem; margin-right: .6rem;">
            <ion-icon :icon="personOutline" style="position: relative;  ">

            </ion-icon>
          </div>

          <div style="font-size: 1.1rem;">
            Consulter mes offres
          </div>
        </button>
      </div>
      <div style="padding: 0rem 1rem;">

        <button @click="router.push('/search')"
          style=" display: flex;align-items: center; padding: 0.6rem 1rem; border-radius: 10px; width: 100%; color: gray; ">
          <div style="font-size: 1.4rem; margin-right: .6rem;">
            <ion-icon :icon="search" style="position: relative;  ">

            </ion-icon>
          </div>

          <div style="font-size: 1.1rem;  ">
            {{ date_depart ? `${date_depart.name} - ${date_darrivee.name}` :"Chercher un covoiturage"}}
          </div>
        </button>
      </div>

      <div v-if="voyages.length">
        <div style="padding: .9rem; text-align: center;font-weight: bold; color: #19549e;">
          {{ total_count }} offre{{ total_count > 1 ? 's' : '' }} disponible{{ total_count > 1 ? 's' : '' }}
        </div>
        <div>
          <div style="padding: 1.1rem; text-align: center;font-size: 1.3rem ;font-weight: bold;color: #ffb03f;">
            Toutes les offres
          </div>
          <div style="padding: .3rem .6rem;">
            <div v-for="voy in voyages" :key="voy.id" 
              style=" margin: .6rem 0rem; padding: .6rem .9rem; background-color: white; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.2); border-radius: 10px;" @click="warn(voy.id)" >
              <div style="width:100%; display: flex; align-items: center; justify-content: space-between;">
                <div style="display: flex; align-items: center;">
                  <div style="font-size: 1.3rem;color: #19549e;margin-right: .6rem;">
                    <ion-icon :icon="caretDownOutline" style="position: relative; top: .15rem; ">

                    </ion-icon>
                  </div>
                  <div style="font-size: 1.1rem;" >{{ voy.lieux_depart.nom }}</div>
                </div>
                <div style="color: gray;  ">
                  {{ toVoyTime(voy.date_depart) }}
                </div>
              </div>
              <div style="padding: .6rem 0rem">
                <div
                  style="width: .3rem; height: .3rem;border-radius: 100%; background-color: black;margin-left: .42rem;">
                </div>
              </div>
              <div style="width:100%; display: flex; align-items: center; margin-top: -.3rem; ">
                <div style="display: flex; align-items: center;">
                  <div style="font-size: 1.5rem;color: #ffb03f;margin-right: .6rem;">
                    <ion-icon :icon="chevronDownOutline" style="position: relative; top: .25rem; right: .1rem; ">

                    </ion-icon>
                  </div>
                  <div style="font-size: 1.1rem;" >{{ voy.lieux_arrive.nom }}</div>
                </div>
              </div>
              <div
                style="padding: .8rem 0rem; padding-bottom: 0rem !important; display: flex;align-items: center;justify-content: space-between;">
                <div style="display: flex; align-items: center;">
                  <div
                    style="background-size:cover ; background-position: top center; width: 2.5rem; min-width: 2.5rem; height: 2.5rem; border-radius: 100%;margin-right: .6rem;"
                    :style="{
                      backgroundImage: `url('${voy.user.get_profil}')`
                    }">

                  </div>
                  <div style="padding-top: .2rem;">
                    <div style="font-size: .9rem;">
                      {{ voy.user.nom }}
                    </div>
                    <div style="padding-top: .1rem;display: flex; align-items: center;">
                      <div style="margin-right: .3rem ">
                        <ion-icon :icon="star" style="color: #ffb03f;font-size: 1.1rem; ">

                        </ion-icon>
                      </div>
                      <div style="font-size: .7rem;color: gray; text-wrap: nowrap; ">
                        {{ voy.user.get_feedbacks }}/5 - {{ voy.user.user_feeds }} Avis
                      </div>
                    </div>
                  </div>
                </div>
                <div style="display: flex;align-items: center;">
                  <button
                    style="background-color: transparent; padding: .4rem; font-size: 1.6rem; margin-right: .4rem;">
                    <ion-icon :icon="flashOutline" style="font-size: 1.4rem; " :style="{
                      color: voy.user.get_feedbacks < 3 ? '#ffb03f' : 'green'
                    }"></ion-icon>
                  </button>
                  <button style="background-color: transparent; display: flex; align-items: center; ">
                    <div style="font-size: 1.2rem; font-weight: bold; margin-right: .2rem; ">{{ voy.user.places_number
                      }}</div>
                    <div>
                      <ion-icon :icon="bodyOutline"
                        style="color: #ffb03f;font-size: 1.2rem; color: #19549e;"></ion-icon>
                    </div>

                  </button>
                  <div style="margin-left: .6rem;font-size: 1.1rem;font-weight: bold; color: #19549e; ">{{ voy.price }}
                    XOF</div>
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
      <div style="padding: 2rem; display: flex; align-items: center; justify-content: center; width: 100%; " v-else>
        <div>
          <ion-spinner :name="'crescent'"></ion-spinner>
        </div>
      </div>
    </ion-content>

  </ion-page>
</template>

<style scoped >

div {
  font-family: 'PT Serif';
}
</style>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonSpinner, IonInfiniteScroll, IonInfiniteScrollContent, onIonViewDidEnter } from '@ionic/vue';
import HeaderComponent from '@/components/HeaderComponent.vue'
import { bodyOutline, caretDownOutline, chevronDownOutline, flash, flashOffOutline, flashOutline, personOutline, search, star } from 'ionicons/icons';
import { useRouter } from 'vue-router';
import { computed, ref } from 'vue';
import axios from 'axios';
import { access_tok, get_obj, remove_obj, show_warn, showLoading } from '@/global/utils';
import { toVoyTime } from "@/global/utils"

const router = useRouter()

const voyages = ref([] as any[])
const total_count = ref(0)

const date_depart = ref()
const date_darrivee = ref()
const date = ref()
const current_pk = ref(0)

const excepts = computed(() => {
  const pks = [] as number[]
  for(const voy of voyages.value) pks.push(voy.id)
  return pks
})

const warn = (pk : number) => {
  show_warn("Confirmation requise", "Voulez-vous vraiment envoyer une demande pour ce voyage?", "Oui", () => create_dem(pk), undefined, "Non")
}

const create_dem = async (pk : number) => {
  const load = await showLoading('Patientez...');
  const resp = await axios.post('api/create_dem/', {
    pk,
    depart: date_depart.value ? JSON.stringify(date_depart.value) : undefined,
    arrivee: date_darrivee.value ? JSON.stringify(date_darrivee.value) : undefined,
    date: date.value,
  }, {
    headers : {
      Authorization : `Bearer ${await access_tok(router, load)}`
    }
  })
  if(resp.data['done']) {
    load.dismiss()
    return router.push('/room/demande/' + resp.data['result'] + '/')
  }
  load.dismiss()
}

const has_done = ref(false)
const get_voyages = async () => {
  has_done.value = false
  const resp = await axios.post('api/get_voyages/', {
    depart: date_depart.value ? JSON.stringify(date_depart.value) : undefined,
    arrivee: date_darrivee.value ? JSON.stringify(date_darrivee.value) : undefined,
    date: date.value,
    excepts : JSON.stringify(excepts.value)
  }, {
    headers: {
      Authorization: `Bearer ${await access_tok(router, undefined)}`
    }
  })
  if (resp.data['done']){

    voyages.value = voyages.value.concat(resp.data['result']), total_count.value = resp.data['other'];
    if(resp.data['result'].length == 0) has_done.value = true 
  }
}

get_voyages()

onIonViewDidEnter( async () => {
  let search = await get_obj('search_obj')
  if(search) {

    voyages.value = [] as any[];
    search = JSON.parse(search);
    console.log(search);
    date_depart.value = search.depart
    date_darrivee.value = search.arrivee
    date.value = search.time
    get_voyages()
    remove_obj('search_obj')
  }
})

</script>
