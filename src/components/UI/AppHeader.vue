<script setup>
import { watch, onMounted } from 'vue'
import { getStyles } from '@/composables/getStyles'

import { useDark, useToggle, useWindowSize } from '@vueuse/core'
// Components
import Button from '@/components/UI/Button.vue'
import Avatar from '@/components/UI/Avatar.vue'
import DownloadButton from '@/components/UI/DownloadButton.vue'

// Pinia
import { storeToRefs } from 'pinia'
import { usePrimaryStore } from '@/stores/primaryStore'
const props = defineProps({
    textClass: {
        type: String,
        default: '',
    },
    containerClass: {
        type: String,
        default: '',
    },
    iconClass: {
        type: String,
        default: '',
    },
})
const isDark = useDark()
const toggleDark = useToggle(isDark)
const { showSidebar } = storeToRefs(usePrimaryStore())
const { toggleSidebar } = usePrimaryStore()
const { width } = useWindowSize()

watch(width, (newWidth) => {
    if (newWidth > 768) {
        showSidebar.value = true
    } else {
        showSidebar.value = false
    }
})

onMounted(() => {
    if (width.value > 768) {
        showSidebar.value = true
    } else {
        showSidebar.value = false
    }
})

import { useModalStore } from '@/stores/modalStore'
const { avatarModal } = storeToRefs(
    useModalStore()
)
const { notificationModalContent, notificationModal } = storeToRefs(
    useModalStore()
)
const classes = getStyles(props, 'notificationModal')
</script>

<template>
    <section class="p-2 border-b border-gray-600 shadow-md flex-ie-jend ">
        <h3 class="w-full text-xl font-bold primary-text md:hidden">
            Jonathan Humphrey
        </h3>
        <div class="gap-2 flex-ic-jc">
            <Avatar avatar-class="cursor-pointer size-10" 
                @click="avatarModal.toggle"
            />
            <Button v-if="width < 768" @click="toggleSidebar()" text="&#9776;" />
            <Button
                @click="toggleDark()"
                :text="isDark ? '&#9788;' : '&#9789;'"
            />
            
        </div>
        
    </section>
</template>
