<script setup>
import { ref } from 'vue'
import { getStyles } from '@/composables/getStyles'


// Components
const props = defineProps({
    containerClass: {
        type: String,
        default: '',
    },
    cardTitleClass: {
        type: String,
        default: '',
    },
    cardTitle: {
        type: String,
        default: '',
    },
})

const classes = ref(getStyles(props, 'cardStyles'))
</script>

<template>
    <div :class="classes.containerClass">
        <div class="w-full py-2 custom-gradient">
            <header v-if="cardTitle" class="px-2">
                <h4 :class="classes.cardTitleClass">
                    {{ cardTitle }}
                </h4>
            </header>
            <slot> </slot>
        </div>
    </div>
</template>

<style>
.box-glow{
    box-shadow: inset 0 0 15px rgba(255, 255, 255, 0.3), /* Soft white inner glow */
              inset 0 0 30px rgba(240, 234, 234, 0.6); 
}
.custom-gradient{
    background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
    background-size: 100% 2px, 3px 100%;
    border-radius: .25rem;
    position: relative;
    z-index: 5;

}
.custom-gradient::before {
    z-index: 5;
    position: absolute; /* Position the pseudo-element */
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}
.custom-gradient::after{
    background: rgba(38, 34, 34, 0.033);
    opacity: 0; /* Initial opacity */
    z-index: 5;
    pointer-events: none;
    animation: flicker 0.25s infinite;
    content: ""; /* Required for ::after pseudo-element to work */
    position: absolute; /* Position it correctly */
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

}
@keyframes flicker {
  0% {
    opacity: 0.20637;
  }
  5% {
    opacity: 0.54678;
  }
  10% {
    opacity: 0.98314;
  }
  15% {
    opacity: 0.9103;
  }
  20% {
    opacity: 0.66523;
  }
  25% {
    opacity: 0.98079;
  }
  30% {
    opacity: 0.76129;
  }
  35% {
    opacity: 0.11882;
  }
  40% {
    opacity: 0.41832;
  }
  45% {
    opacity: 0.79238;
  }
  50% {
    opacity: 0.01054;
  }
  55% {
    opacity: 0.38548;
  }
  60% {
    opacity: 0.07903;
  }
  65% {
    opacity: 0.12325;
  }
  70% {
    opacity: 0.89615;
  }
  75% {
    opacity: 0.3374;
  }
  80% {
    opacity: 0.98487;
  }
  85% {
    opacity: 0.32846;
  }
  90% {
    opacity: 0.78562;
  }
  95% {
    opacity: 0.73206;
  }
  100% {
    opacity: 0.46644;
  }
}
</style>
