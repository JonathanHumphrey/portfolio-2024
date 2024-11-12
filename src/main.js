import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueApexCharts from "vue3-apexcharts";
import router from '@/router'
import './style.css'
import App from './App.vue'

const pinia = createPinia()
createApp(App).use(pinia).use(router).use(VueApexCharts).mount('#app')
