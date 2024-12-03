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
        class="relative w-full h-full py-5 max-w-[75rem] flex-col-ic-jc p-3"
    >
    <div class="absolute inline-block overflow-hidden rounded-md top-10 w-1/8 group left-10">
        <!-- Sliding Background -->
        <span
            class="absolute inset-0 p-6 transition-transform origin-left transform scale-x-0 bg-cardBackgroundDark group-hover:scale-x-100"
        ></span>

        <!-- Arrow Icon -->
        <ArrowLeftCircleIcon
            v-if="route.name !== 'Manage Profiles'"
            class="relative z-10 cursor-pointer size-8 primary-text"
            @click="goBack"
        />
    </div>
        
        <RouterView />
    </main>
</template>
