<script setup>

import router from '@/router';
// Components
import MetricCard from '@/components/cards/MetricCard.vue'


</script>

<template>
    <section
        class="w-full max-w-[75rem] mx-auto primary-text px-2 font-display flex-col-ic-js"
    >
        <section class="grid w-1/2 grid-cols-2 gap-2 mt-8">
            <MetricCard
                metric-title="Jobs"
                :metric-value="2"
                metric-type="number"
            />
            <MetricCard
                metric-title="Revenue"
                :metric-value="12078"
                metric-type="currency"
            />
            
        </section>
        
    </section>
</template>