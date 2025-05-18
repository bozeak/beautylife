
export default defineNuxtPlugin(() => {
    const config = useRuntimeConfig()
    if (typeof window !== 'undefined' && !window.google) {
        const script = document.createElement('script')
        script.src = `https://maps.googleapis.com/maps/api/js?key=${config.public.googleMapsApiKey}`
        script.async = true
        script.defer = true
        document.head.appendChild(script)
    }
})