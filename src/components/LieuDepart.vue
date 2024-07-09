<template>
    <ion-modal :is-open="isOpen" >
        <ion-content>

        </ion-content>
    </ion-modal>
</template>


<script lang="ts" setup>
import {IonContent, IonModal } from "@ionic/vue";
import { alertCircle, alertCircleOutline, notificationsOutline } from "ionicons/icons"

const props = defineProps({
    isOpen: Boolean
})
</script>