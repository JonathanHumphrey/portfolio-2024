<script setup>

import router from '@/router';
// Components

import Button from '@/components/UI/Button.vue'
import Card from '@/components/UI/Card.vue';
import TextBlock from '@/components/UI/TextBlock.vue';
import DownloadButton from '@/components/UI/DownloadButton.vue'
import portrait from '@/assets/portrait.jpg'

// Constants
import { Personal } from '@/constants/Information.js'

const hardSkills = 
    [
        'HTML',
        'CSS',
        'Javascript',
        'C++',
        'Python'

    ]
const softSkills = [
    'Problem Solving',
    'API Design',
    'Database Design'
]
const downloadResume = () => {
    const pdfUrl = new URL('@/assets/resume.pdf', import.meta.url).href;
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Jonathan_Humphrey_FrontEnd.pdf';
    link.click();
}



</script>

<template>
    
    <section
        class="w-full min-h-screen py-5 max-w-[75rem] primary-text px-4 font-display flex-col-ic-js "
    >
        <div class="grid md:grid-cols-2 sm:grid-cols-1">
            <section class="">
                <Card container-class="mt-2 md:w-11/12 sm:w-full">
                    <TextBlock  text-content="Jonathan Humphrey - Frontend Developer" content-class="md:text-xl sm:text-sm" container-class="h-full m-2" />
                </Card>
                <img :src="portrait" alt="" class="sticky z-0 object-cover mt-0 rounded-full md:w-full sm:w-1/2 h-3/4" />

            </section>
            <Card container-class="mt-2 z-8 ">
                <section class="w-full flex-is-jb">
                    
                    <div class="m-5">
                        <TextBlock label="Hard Skills" text-content="" container-class="mb-0 ml-2" />

                        <ul class="m-5 list-disk" v-for="skill in hardSkills">
                            <li class="text-white" >{{ skill }}</li>
                        </ul>
                    </div>
                    <div class="m-5">
                        <TextBlock label="Soft Skills" text-content="" container-class="mb-0 ml-2" />

                        <ul class="m-5 list-disk" v-for="skill in softSkills">
                            <li class="text-white" >{{ skill }}</li>
                        </ul>   
                    </div>
                </section>
            </Card>
        </div>
        
        <DownloadButton />
        
        <section class="grid w-full grid-cols-1 gap-2 mt-8">
            <Card
                card-title="About Me"
                card-title-class="text-xl font-bold"
                container-class=""
            >
                <TextBlock :text-content="Personal[0].aboutMe" container-class="m-4" />
            </Card>
            
        </section>
        
    </section>
</template>

