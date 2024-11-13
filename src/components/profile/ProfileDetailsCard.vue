<script setup>
import { ref, onMounted } from 'vue'
// Components
import Avatar from '@/components/UI/Avatar.vue'
import Button from '@/components/UI/Button.vue'
import Card from '@/components/UI/Card.vue'
import TextBlock from '@/components/UI/TextBlock.vue'
// Utils
import { handleFormat } from '@/utils/formatText'
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
    <Card container-class="relative w-full py-3 mx-auto md:w-2/3">
        <section class="w-full gap-2 text-left flex-col-ic-jc">
            <Avatar :username="user.name" avatar-class="text-xl size-20" />
            <TextBlock
                text-content="Jonathan Humphrey"
                container-class="flex-col-ic-jc"
                content-class="my-2 text-2xl"
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
            
        </section>
    </Card>
</template>
