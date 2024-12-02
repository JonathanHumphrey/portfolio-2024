<script setup>
import { RouterView, useRoute } from 'vue-router'
import router from '@/router'
// Components
// Assets
import { ArrowLeftCircleIcon } from '@heroicons/vue/24/outline'
// const props = defineProps({})
// const emit = defineEmits()
const route = useRoute()

const goBack = () => {
    router.back()
}
</script>

<template>
    <main
        class="relative w-full h-full max-w-[75rem] mx-auto pt-4 px-2 flex-col-is-js"
    >
        <ArrowLeftCircleIcon
            v-if="route.name !== 'Manage Profiles'"
            class="absolute z-10 cursor-pointer left-5 size-8 primary-text"
            @click="goBack"
        />
        <RouterView />
    </main>
</template>
