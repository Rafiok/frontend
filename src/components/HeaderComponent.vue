<template>
    <div
        style=" background-color: white; width: 100%;padding: 0.8rem 1rem;display: flex;align-items: center;justify-content: space-between; z-index: 100; ">
        <div style="display: flex; align-items: center;">
            <div style="background-size:cover ; margin-right: .6rem; background-position: top center; width: 2.5rem;height: 2.5rem; border-radius: 100%;"
                :style="{
                    backgroundImage: `url('${'../../assets/images/log.png'}')`
                }">

            </div>
            <div style="font-size: 1.5rem; font-weight: bold;">
               <i>Vroom</i>  
            </div>
        </div>
        <div style="display: flex; align-items: center;">
            <button @click="router.push('/aide')"
                style="display: flex;align-items: center;padding: .2rem .9rem; padding-left: .8rem; padding-top: .4rem !important; border-radius: 15px;  font-size: 1.1rem; "
                class="aide">
                <div style="font-size: 1.3rem;"></div>
                <div style="margin-right: .2rem; font-size: 1.5rem;">
                    <ion-icon :icon="alertCircleOutline">

                    </ion-icon>
                </div>
                <div>
                    Aide
                </div>
            </button>


        </div>

    </div>
</template>

<script lang="ts" setup>
import { IonIcon } from "@ionic/vue"
import { alertCircle, alertCircleOutline, notificationsOutline } from "ionicons/icons"
import { useRouter } from "vue-router";

const router = useRouter()

</script>