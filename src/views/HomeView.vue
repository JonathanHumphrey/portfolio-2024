<script setup>

import router from '@/router';
// Components

import Button from '@/components/UI/Button.vue'
import Card from '@/components/UI/Card.vue';
import TextBlock from '@/components/UI/TextBlock.vue';
import portrait from '@/assets/portrait.jpg'

// Constants
import {Personal} from '@/constants/Information.js'
</script>

<template>
    
    <section
        class="w-full max-w-[75rem] mx-auto primary-text px-2 font-display flex-col-ic-js "
    >
        <img :src="portrait" alt="" class="sticky object-cover h-48 mt-4 rounded-full md:w-1/4 sm:w-1/2" />
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

