<script setup>
// Components
import Card from '@/components/UI/Card.vue'
import TextBlock from '@/components/UI/TextBlock.vue';
import image1 from "@/assets/image1.png"
import image2 from "@/assets/image2.png"
import image3 from "@/assets/image3.png"

const projects = [
    {
        title: 'Dungeon Master Toolkit',
        explanation: 'Dungeon Master Toolkit is an inititive/status effect tracker for people running games of Dungeons and Dragons. ',
        date: '07/2024', 
        link: 'https://dungeonmastertoolkit.netlify.app/',
        image: image1,
        tags: ["JSON", "Autosave", "State Management", "Markdown Editor", "Statistics Tracking", "Local Storage", "Data Indexing"]

    },
    {
        title: 'Falling Sand',
        explanation: 'Falling Sand is a classic falling particle simulation to recreate a long lost flash game that I played as a kid. This application simulates different interactions between sand, water and stone.',
        date: '8/2024',
        link: 'https://effortless-tanuki-45ea01.netlify.app/',
        image: image2,
        tags: ["Canvas drawing", "Particle simulation", "Elemental interactions", "Collision detection", "Gravity effects", "Efficient rendering", "User interface design"]

    },
    {
        title: 'Template/Component Library',
        explanation: 'This is a preview of a page layout template and component library project I worked on alongside another engineer to have a scalable and tested platform to build websites for clients. ',
        date: '10/2024',
        image: image3,
        tags: ["Vue3", "Web development", "Responsive design", "Component-based architecture", "Figma integration", "Mobile-friendly design", "Development efficiency"]

    }
]
</script>

<template>
    <section
        class="w-full py-5 max-w-[75rem] primary-text px-4 font-display flex-col-ic-js overflow-hidden"
    >
        
        <section class="grid w-full h-full grid-cols-1 gap-2 mt-1">
            <TextBlock text-content="Projects" content-class="font-bold text-black dark:text-white" />
            <div v-for="project in projects" class="mb-2">
                <Card
                    :card-title="project.title"
                    card-title-class="text-xl font-bold "
                    container-class=""
                >
                <section class="grid w-full p-2 md:grid-cols-2 md:grid-rows-1 sm:grid-rows-1 ">
                    <div class="p-4 md:w-full">
                        <a :href="project.link" target="_blank" class="w-full">
                            <img :src="project.image" class="w-full rounded-md"/>
                        </a>
                    </div>
                    <div class="w-full p-4" >
                        <TextBlock :text-content="project.explanation"/>
                        <TextBlock :label="project.date" text-content=""/>
                    </div>
                </section>
                <section class="ml-6 md:flex-is-js sm:flex-row-is-js">
                    <TextBlock text-content="" label="Tags: " label-class="mr-1 text-sm sm:text-xs"/>
                    <TextBlock
                        v-for="(tag, index) in project.tags"
                        :key="index"
                        :label="index < project.tags.length - 1 ? tag + ', ' : tag"
                        label-class="text-sm sm:text-xs"
                        text-content=""
                        container-class="mr-1"
                        
                    />
                </section>
                </Card>
            </div>
            
        
        </section>
    </section>
</template>
