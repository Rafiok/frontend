<template>
    <div class="audio">
        <button @click="toogle_playing(), is_playing = !is_playing" :style="{
            color
        }" class="plays">
            <ion-icon :icon="is_playing ? pause : play" style="position: relative; top: .1rem;" />
        </button>
        <div class="range">
            <ion-range :style="{
                '--bar-background-active': color,
                '--knob-background': color,
                '--knob-size': '12px'
            }" :value="parseInt(myval as string)"
                @ionChange="e => (set_current((e.detail.value as unknown) as string))" mode="md"></ion-range>
            <div class="details" :style="{
                color
            }" >
                <div>{{ current_a }}</div>
                <div>{{ total_a }}</div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.details {
    display: flex;
    justify-content: space-between;
    font-size: 0.73rem;
    margin-top: -10px;
}


.range {
    flex-grow: 1;
    padding: 0.4rem;
}

.plays {
    width: 45px;
    height: 45px;
    min-width: 45px;
    min-height: 45px;
    border-radius: 100%;
    font-size: 1.8rem;
    background-color: rgba(255, 255, 255, 0.058);

}

.audio {
    margin-top: 0rem;
    padding-left: 0.4rem;
    padding-right: 0.4rem;
    display: flex;
    align-items: center;
}
</style>

<script setup lang="ts">

import { micCircle, close as clos, play, pause } from "ionicons/icons";
import { IonRange, IonIcon } from "@ionic/vue";
import { AudioPlayer } from "@/global/types"
import { computed, ref, watch } from "vue"

const props = defineProps({
    url: String,
    size: String,
    color: String
})


const myval = ref("0");
const is_playing = ref(false);
const current_a = ref("00:00");
const duration = ref(0);
let audio_interval: NodeJS.Timer | number = 0;
const total_a = computed(() => {
    return get_time_format(duration.value);
});
const get_time_format = (time: number) => {
    let minutes: string | number = Math.floor(time / 60);
    let seconds: string | number = Math.floor(time - minutes * 60);
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;
    return `${minutes}:${seconds}`;
};
const audio = ref<HTMLAudioElement>();
duration.value = parseInt(props.size as string)
setTimeout(() => {
    const audi = new Audio(props.url);
    audio.value = audi;
    audio.value.addEventListener("pause", () => {
        is_playing.value = false;
    });
    audio.value.addEventListener("ended", () => {
        is_playing.value = false;
        current_a.value = "00:00";
    });
    audio.value.addEventListener("play", () => {
        is_playing.value = true;
    });
    audio.value.addEventListener("playing", () => {
        is_playing.value = true;
    });
    // audio.value.addEventListener("loadedmetadata", () => {
    //  setTimeout(() => {
    //    audio.value?.play()
    //}, 400) 
    //});
    audio.value.addEventListener("durationchange", () => {

        if (audio.value?.duration != Infinity && audio.value) {
            duration.value = audio.value.duration;
        }
    });
}, 50);

audio_interval = setInterval(() => {
    if (is_playing.value && audio.value) {
        current_a.value = get_time_format(audio.value.currentTime as number);
        myval.value = (
            (audio.value.currentTime / duration.value) *
            100
        ).toString();
    }
}, 1000);
const set_current = (val: string) => {
    if (audio.value) {
        audio.value.currentTime = (parseInt(val) / 100) * duration.value;
    }
};
const toogle_playing = () => {
    if (audio.value) {
        if (!is_playing.value) audio.value.play();
        else {
            audio.value.pause();
        }
    }
};
const handleChange = (e: any) => {
    const { detail } = e
    set_current(detail.value)
}



</script>
