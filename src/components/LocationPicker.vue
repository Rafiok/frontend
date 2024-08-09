Pi<template>
  <ion-modal mode="ios" :is-open="isOpen">
    <ion-header>
      <ion-toolbar>
        <ion-title>Place et Lieu</ion-title>
        <ion-buttons slot="start">
          <ion-button color="danger" @click="close()">Fermer</ion-button>
        </ion-buttons>
        <ion-buttons v-if="quart.name != ''" slot="end">
          <ion-button color="primary" @click="done(quart)">Valider</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <div v-if="typ == 'depart' " style="color: #120c2b; padding-bottom: 1rem">
        Entrez et recherchez le lieu de départ
      </div>

      <div v-else style="color: #120c2b; padding-bottom: 1rem">
        Entrez et recherchez le lieu d'arrivée
      </div>

      <ion-searchbar @ionInput="(e) => (place =( e.target.value as string))" placeholder="entrez..."
        @keyup.enter="get_quart()"></ion-searchbar>
      <div v-show="false" style="display: flex; justify-content: space-around; width: 100%; padding: 0rem .7rem; " >
        <button @click="get_quart()" style="padding: .7rem; text-align: center; width: 100%; border-radius: 10px; font-size: 1.1rem; " class="demande">Rechercher</button>
      </div>
      <div v-if="place == ''">
        <div style="
              display: flex;
              justify-content: space-around;
              padding-top: 3rem;
              padding-bottom: 1rem;
            ">
          <img :src="'../../assets/images/locat.svg'" style="width: 100%" />
        </div>
        <div style="text-align: center; padding: 0.7rem">
          Entrez le nom d'une place...
        </div>
      </div>
      <div v-if="place != '' && not_found">
        <div>
          <div style="
                display: flex;
                justify-content: space-around;
                padding-top: 3rem;
                padding-bottom: 1rem;
              ">
            <img :src="'../../assets/images/locat.svg'" style="width: 100%" />
          </div>
          <div style="text-align: center; padding: 0.7rem">
            Aucun lieu trouvé correspondant à votre recherche
          </div>
        </div>
      </div>
      <div style="padding: 5rem;  " v-if="is_searching">
        <div style="display: flex; justify-content: space-around">
          <div>
            <ion-spinner name="lines"></ion-spinner>
          </div>
        </div>
        <div>
          <div style="text-align: center; margin-top: 0.9rem">
            Patienter quelques secondes...
          </div>
        </div>
      </div>
      <div v-if="quarts.length" style="padding-top: 1rem">
        <ion-item v-for="q in quarts" :key="`${q.name}:${q.lat}`" @click.stop="includes_quart(q)" button>
          <ion-checkbox @click.prevent="" :checked="q.name == quart.name && q.lat == quart.lat && q.lng == quart.lng
            "  slot="start"></ion-checkbox>
          <ion-label class="ion-text-wrap">{{ q.name }}</ion-label>
          <ion-avatar slot="end">
            <img :alt="q.name" :src="q.icon" />
          </ion-avatar>
        </ion-item>
      </div>
      <div v-if="quart.name != ''" style="padding: 1rem">
        <ion-button @click="done(quart)" mode="md" expand="full">Valider</ion-button>
      </div>
    </ion-content>
  </ion-modal>
</template>

<script lang="ts">
import { defineComponent, defineProps, ref, defineEmits, watch } from "vue";
import {
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonModal,
  IonIcon,
  IonAvatar,
  IonCheckbox,
  IonSearchbar,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton
} from "@ionic/vue";
import { location } from "ionicons/icons";
import axios from "axios";

export default defineComponent({
  props: {
    isOpen: Boolean,

    typ: String
  },
  components: {
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    IonModal,
    IonIcon,
    IonAvatar,
    IonCheckbox,
    IonSearchbar,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonButton
  },
  setup(prop, { emit }) {
    const country = ref();
    const emits = defineEmits(["close", "done"]);
    const close = () => {
      emit("close");
    };
    const done = (quart: any) => {
      emit("done", quart);
    };
    const place = ref("");
    const quarts = ref<any[]>([]);
    const quart = ref<any>({
      name: "",
    });
    const is_searching = ref(false);
    const not_found = ref(false);
    const includes_quart = (q: any) => {
      if (
        quart.value.name == q.name &&
        quart.value.lat == q.lat &&
        quart.value.lng == q.lng
      ) {
        quart.value = {
          name: "",
        };
      } else {
        quart.value = q;
      }
    };
    const get_quart = () => {
      if (place.value) {
        quarts.value = [];
        is_searching.value = true;
        not_found.value = false;
        axios.get(`api/search_place/${place.value}/`)
          .then((resp) => {
            if (resp.data["done"]) {
              const results = resp.data["result"];
              if (results.length) {
                for (const elt of results) {
                  quarts.value.push({
                    name: elt.name,
                    lat: elt.geometry.location.lat,
                    lng: elt.geometry.location.lng,
                    icon: elt.icon,
                  });
                }
              } else {
                not_found.value = true;
              }
            }
            is_searching.value = false;
          })
          .catch((err) => {
            console.log(err);
          });
      }
    };

    watch(place, (newp, oldp) => {
      if (newp == "") {
        quart.value = {
          name: "",
        }
        quarts.value = [];
        is_searching.value = false;
        not_found.value = false
      }
    });

    return {
      close,
      done,
      place,
      quarts,
      location,
      is_searching,
      get_quart,
      not_found,
      quart,
      includes_quart,
    };
  },
});
</script>
