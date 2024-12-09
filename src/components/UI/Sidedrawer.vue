<script setup>
import { storeToRefs } from 'pinia'
import { RouterLink } from 'vue-router'
import { useWindowSize } from '@vueuse/core'
import { computed } from 'vue'

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
const isDesktop = computed(() => {
    return window.innerWidth <= 768; // Or use a breakpoint utility

})

</script>

<template>
    <transition name="fade">
        <section>
            <div
                v-if="showSidebar"
                id="backdrop"
                :class="classes.backdropClass"
                @click="toggleSidebar()"
            ></div>

            <section 
                v-if="showSidebar" 
                :class="[
                    classes.containerClass, 
                    { 'fixed top-0 left-0': !isDesktop, 'md:relative': isDesktop }
                ]"
            >
                <h3 :class="classes.titleClass">Jonathan Humphrey</h3>
                <div :class="classes.navContainerClass">
                    
                    <div class="relative inline-block w-3/4 m-2 overflow-hidden rounded-md cursor-pointer top-2 w-1/8 group">
                        <!-- Sliding Background -->
                        <span
                            class="absolute inset-0 w-full p-6 transition-transform origin-left transform scale-x-0 bg-gray-500 group-hover:scale-x-100"
                        ></span>

                        <RouterLink
                            to="/"
                            :class="[classes.navLinkClass, 'relative z-10 flex-is-js w-full']"

                            @click="handleNavigation"
                            >Home</RouterLink
                        >
                    </div>
                    <div class="relative inline-block w-3/4 m-2 overflow-hidden rounded-md cursor-pointer top-2 w-1/8 group">
                        <!-- Sliding Background -->
                        <span
                            class="absolute inset-0 p-6 transition-transform duration-300 origin-left transform scale-x-0 bg-gray-500 group-hover:scale-x-100"
                        ></span>

                        <RouterLink
                            to="/projects"
                            :class="[classes.navLinkClass, 'relative z-10 flex-is-js w-full']"

                            @click="handleNavigation"
                            >Projects</RouterLink
                        >
                    </div>
                    <div class="relative inline-block w-3/4 m-2 overflow-hidden rounded-md cursor-pointer top-2 w-1/8 group">
                        <!-- Sliding Background -->
                        <span
                            class="absolute inset-0 p-6 transition-transform origin-left transform scale-x-0 bg-gray-500 group-hover:scale-x-100"
                        ></span>

                        <RouterLink
                            to="/profile"
                            :class="[classes.navLinkClass, 'relative z-10 flex-is-js w-full']"

                            @click="handleNavigation"
                            >Profile</RouterLink
                        >
                    </div>
                </div>
            </section>
        </section>
    </transition>
</template>
