<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>
<style >
.aide {
  background-color: #FFBD25;
  color: white;
}

.demande{
  background-color: #19549E;
  color: white;
}

.placeholder {
  color: gray;
}

.succes{
  background-color: #57ad6e;
  color: white;
}
</style>
<script setup lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
</script>
