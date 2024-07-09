<template>
    <ion-page>

        <ion-content :fullscreen="true">
            <div style="padding: .0rem .6rem;">
                <button
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
                    <ion-accordion value="first">
                        <ion-item slot="header">
                            <ion-label>
                                First Accodeon
                            </ion-label>
                        </ion-item>
                        <div class="ion-padding" slot="content">First content</div>
                    </ion-accordion>
                    <ion-accordion value="second">
                        <ion-item slot="header">
                            <ion-label>
                                Second Accodeon
                            </ion-label>
                        </ion-item>
                        <div class="ion-padding" slot="content">Second content</div>
                    </ion-accordion>
                    <ion-accordion value="third">
                        <ion-item slot="header">
                            <ion-label>
                                Third Accodeon
                            </ion-label>
                        </ion-item>
                        <div class="ion-padding" slot="content">third content</div>
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
</script>