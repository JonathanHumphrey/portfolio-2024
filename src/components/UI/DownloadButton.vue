<script setup>
// Components
import Button from '@/components/UI/Button.vue'

// 
import { usePrimaryStore } from '@/stores/primaryStore';
import { storeToRefs } from 'pinia'
const { getLocation } = usePrimaryStore()
const {logAnalytics} = usePrimaryStore()


const downloadResume = () => {
    const pdfUrl = new URL('@/assets/resume.pdf', import.meta.url).href;
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Jonathan_Humphrey_FrontEnd.pdf';
    link.click();
    getLocation()
    logAnalytics('cv_download')

}



</script>

<template>
    <div class="relative h-10 m-2 overflow-hidden rounded-md cursor-pointer w-1/8 top-2 group hover:drop-shadow-md">
        <!-- Sliding Background -->
        <span
            class="absolute inset-0 w-full p-6 transition-transform duration-300 origin-left transform scale-x-0 dark:bg-cardBackgroundDark bg-cardBackground group-hover:scale-x-100"
        ></span>

        <Button 
            text="Download My CV" 
            button-class="relative w-full h-10 border-none flex-ic-jc group-hover:bg-opacity-0 group-hover:padding-3"
            @click="downloadResume()"
        />
    </div>
</template>