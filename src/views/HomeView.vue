<script setup>

import router from '@/router';
// Components

import Button from '@/components/UI/Button.vue'
import Card from '@/components/UI/Card.vue';
import TextBlock from '@/components/UI/TextBlock.vue';
import portrait from '@/assets/portrait.jpg'

// Constants
import {Personal} from '@/constants/Information.js'

const skills = 
    [
        'HTML',
        'CSS',
        'Javascript',
        'C++',
        'Python'

    ]

</script>

<template>
    
    <section
        class="w-full max-w-[75rem] mx-auto primary-text px-2 font-display flex-col-ic-js "
    >
        <div class="grid w-full border border-black md:grid-cols-2 sm:grid-cols-1">
            <img :src="portrait" alt="" class="sticky object-cover m-4 mt-4 rounded-full md:w-1/2 sm:w-1/2 h-3/4" />
            <Card container-class="md:w-1/2 sm:w-full">
                <TextBlock label="Hard Skills" text-content="" container-class="mb-0 ml-4" />
                <ul class="w-1/2 m-5 list-disk" v-for="skill in skills">
                    <li class="text-white" >{{ skill }}</li>
                </ul>
            </Card>
        </div>
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

