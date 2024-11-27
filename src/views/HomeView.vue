<script setup>

import router from '@/router';
// Components

import Button from '@/components/UI/Button.vue'
import Card from '@/components/UI/Card.vue';
import TextBlock from '@/components/UI/TextBlock.vue';
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
        class="w-full max-w-[75rem] mx-auto primary-text px-2 font-display flex-col-ic-js "
    >
        <div class="grid md:grid-cols-2 sm:grid-cols-1">
            <img :src="portrait" alt="" class="sticky z-0 object-cover m-4 mt-4 rounded-full md:w-full sm:w-1/2 h-3/4" />
            <Card container-class="z-10 mt-2 ">
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
        <Button 
            text="Download My CV" 
            button-class="mt-5 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:animate-gradient-x hover:animate-gradient-hover"
            @click="downloadResume()"
        />
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

