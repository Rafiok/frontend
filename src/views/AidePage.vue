<template>
    <ion-page>

        <ion-content :fullscreen="true">
            <div style="padding: .0rem .6rem;">
                <button @click="router.back()"
                    style="width: 3rem; height: 3rem; min-width: 3rem;border-radius: 15px; font-size: 1.3rem; color: gray; background-color: transparent; ">
                    <ion-icon :icon="chevronBack"
                        style="position: relative; top: .15rem; right: .12rem; font-size: 2rem;"></ion-icon>
                </button>
            </div>

            <div style="text-align: center; padding: 0rem; font-size: 2.5rem; font-weight: bolder;">
                Aide
            </div>
            <div style="width: 100%;padding: 1rem 0rem; ">
                <ion-accordion-group>
                    <ion-accordion v-for="aid in aides" :key="aid" :value="aid.question">
                        <ion-item slot="header">
                            <ion-label  >
                                {{ aid.question }}
                            </ion-label>
                        </ion-item>
                        <div class="ion-padding" slot="content" v-html="aid.answer" >
                            
                        </div>
                    </ion-accordion>
                </ion-accordion-group>
            </div>
        </ion-content>
    </ion-page>
</template>
<style scoped>
    ion-accordion{
        margin: 0 auto;
    }

    ion-accordion.accordion-expanding,
    ion-accordion.accordion-expanded {
        width: calc(100% - 32px);

        margin: 16px auto;
    }

    ion-accordion.accordion-collapsing ion-item[slot='header'],
    ion-accordion.accordion-collapsed ion-item[slot='header'] {
        --background:var(--ion-color-light);
        --color:var(--ion-color-light-contrast);
    }

    ion-accordion.accordion-expanding ion-item[slot='header'],
    ion-accordion.accordion-expanded ion-item[slot='header'] {
        --background:var(--ion-color-primary);
        --color:var(--ion-color-primary-contrast);
    }

    
</style>
<script setup lang="ts">
import { IonPage, IonContent, IonDatetime,IonAccordion,IonAccordionGroup,IonItem,IonLabel } from "@ionic/vue";
import HeaderComponent from '@/components/HeaderComponent.vue'
import { alarm, location, search, arrowForward, paperPlane, chevronBack } from "ionicons/icons";
import LocationPicker from "@/components/LocationPicker.vue";
import { ref } from "vue";
import { get_details } from "@/global/utils";
import router from "@/router";

const aides = ref<any[]>([])

const get_aides = async () => {
    aides.value = await get_details('aides')
}

get_aides()

</script>