<script setup>
import { storeToRefs } from 'pinia'
import { RouterLink } from 'vue-router'
import { useWindowSize } from '@vueuse/core'
// Components

// Pinia
import { usePrimaryStore } from '@/stores/primaryStore'
// Utils
import { getStyles } from '@/composables/getStyles'
const props = defineProps({
    textClass: {
        type: String,
        default: '',
    },
    backdropClass: {
        type: String,
        default: '',
    },
    containerClass: {
        type: String,
        default: '',
    },
    titleClass: {
        type: String,
        default: '',
    },
    navContainerClass: {
        type: String,
        default: '',
    },
    navLinkClass: {
        type: String,
        default: '',
    },
})
const { showSidebar } = storeToRefs(usePrimaryStore())
const { toggleSidebar } = usePrimaryStore()
const { width } = useWindowSize()

// const emit = defineEmits()

const handleNavigation = () => {
    if (width.value < 768) {
        toggleSidebar()
    }
}

const classes = getStyles(props, 'sidebar')
</script>

<template>
    <transition name="fade">
        <section >
            <div
                v-if="showSidebar"
                id="backdrop"
                :class="classes.backdropClass"
                @click="toggleSidebar()"
            ></div>

            <section v-if="showSidebar" :class="classes.containerClass">
                <h3 :class="classes.titleClass">Jonathan Humphrey</h3>
                <div :class="classes.navContainerClass">
                    <RouterLink
                        to="/"
                        :class="classes.navLinkClass"
                        @click="handleNavigation"
                        >Home</RouterLink
                    >
                    
                    <RouterLink
                        to="/projects"
                        :class="classes.navLinkClass"
                        @click="handleNavigation"
                        >Projects</RouterLink
                    >
                    
                </div>
            </section>
        </section>
    </transition>
</template>
