<script setup>
// Components
import Card from '@/components/UI/Card.vue'
import TextBlock from '@/components/UI/TextBlock.vue';
import image1 from "@/assets/image1.png"

const projects = [
    {
        title: 'Project 1',
        explanation: 'Some explanation of the project',
        date: '01/01/2024'
    },
    {
        title: 'Project 2',
        explanation: 'Some explanation of the project',
        date: '01/01/2024'
    },
    {
        title: 'Project 3',
        explanation: 'Some explanation of the project',
        date: '01/01/2024'
    }
]
</script>

<template>
    <section
        class="w-full max-w-[75rem] mx-auto primary-text px-2 font-display flex-col-ic-js overflow-hidden"
    >
        
        <section class="grid w-full h-full grid-cols-1 gap-2 mt-1">
            <TextBlock text-content="Projects"/>
            <div v-for="project in projects">
                <Card
                    :card-title="project.title"
                    card-title-class="text-xl font-bold"
                    container-class=""
                >
                <section class="w-full m-1 flex-ic-js">
                    <img :src="image1" class="w-1/2 rounded-md"/>
                    <div>
                        <TextBlock text-content="Some explanation of the project"/>
                        <TextBlock :label="project.date" text-content=""/>
                    </div>
                </section>
                </Card>
            </div>
            
        
        </section>
    </section>
</template>
