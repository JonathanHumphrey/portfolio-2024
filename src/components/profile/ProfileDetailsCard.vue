<script setup>
import { ref, onMounted } from 'vue'
// Components
import Avatar from '@/components/UI/Avatar.vue'
import Button from '@/components/UI/Button.vue'
import Card from '@/components/UI/Card.vue'
import TextBlock from '@/components/UI/TextBlock.vue'
// Utils
import { handleFormat } from '@/utils/formatText'

// Assets
import Github from "@/assets/logos/github.svg"
import LinkedIn from "@/assets/logos/linkedin.svg"

const props = defineProps({
    user: {
        type: Object,
        default: {
            name: '',
            address_line_1: '',
            city: '',
            state: '',
            phone: '',
            email: '',
        },
    },
})
const emit = defineEmits(['toggle-editing'])
const address = ref('')
onMounted(() => {
    address.value = handleFormat(props.user, 'address')
})
</script>

<template>
    <Card container-class="w-full h-screen md:w-2/3">
        <section class="w-full gap-2 text-left flex-col-ic-jc">
            <Avatar :username="user.name" avatar-class="text-xl size-40" />
            <TextBlock
                text-content="Jonathan Humphrey"
                container-class="flex-col-ic-jc"
                content-class="my-2 text-2xl"
            />
            <TextBlock
                label="Frontend Developer"
                container-class="flex-col-ic-jc"
                text-content=""
                content-class="my-2 text-xl"
            />
            <TextBlock
                label="Location"
                text-content="Texas, USA"
                container-class="flex-col-ic-jc"
                content-class="text-left"
            />

            <TextBlock
                label="Email"
                text-content="jonathanhumphrey10@gmail.com"
                container-class="flex-col-ic-jc"
            />
            <TextBlock
                label="Links"
                text-content=""
                container-class="flex-col-ic-jc"
            />
            <div class="flex-ic-jc">
                <a href="https://github.com/JonathanHumphrey" target="_blank">
                    <img :src="Github" width="50" height="50" class="invert"/>
                </a>
                <a href="https://www.linkedin.com/in/jonathan-humphrey-97478223a/" target="_blank">
                    <img :src="LinkedIn" class="invert"/>
                </a>
                
            </div>
            
        </section>
    </Card>
</template>


<style scoped>
.invert {
    filter: invert(1);
}
</style>