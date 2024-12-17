import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useToggle } from '@vueuse/core'

export const usePrimaryStore = defineStore('primary', () => {
    const showSidebar = ref(false)
    const toggleSidebar = useToggle(showSidebar)

    const actions = {
        toggleSidebar,
        getLocation,
        logAnalytics
    }
    const values = {
        showSidebar,
    }
    async function getLocation(){
        const IPINFO_TOKEN = import.meta.env.VITE_IPINFO_TOKEN
        
        const response = await fetch('http://localhost:5000/api/v1/server/get-location');
        if (response.ok) {
            const data = await response.json();
            return {
                //ip: data.ip,
                //city: data.city || "Unknown",
                region: data.region || "Unknown",
                //country: data.country || "Unknown",
            };
        } else {
            console.error("Failed to fetch location data");
            return null;
        }
    }
    async function logAnalytics(event, metadata = {}) {
        try {
            const location = await getLocation();
            //const location = 
            console.log(location)
            const payload = {
                event: event,                      // Name of the event (e.g., 'page_view')
                path: window.location.pathname,    // Current page path
                metadata: metadata,                // Additional metadata (e.g., button ID)
                timestamp: new Date().toISOString(), // Current timestamp
                location: location,                // Location data from getLocation()
            };
    
            const response = await fetch('http://localhost:5000/api/v1/server/analytics', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });
    
            if (response.ok) {
                console.log('Analytics logged successfully');
            } else {
                console.error('Failed to log analytics');
            }
        } catch (error) {
            console.error('Error logging analytics:', error);
        }
    }
    return { ...actions, ...values }
})
