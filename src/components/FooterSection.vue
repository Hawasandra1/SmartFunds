<script setup>
// Remove import related to translation props
// import { defineProps } from 'vue';
import { computed } from 'vue'; // Keep computed for the year

// Remove props definition
// const props = defineProps({ translatedText: Object });

// Keep computed property for the current year
const currentYear = computed(() => {
    return new Date().getFullYear();
});

// Footer styles are in index.html <style> or global CSS file for now.
</script>

<template>
    <footer id="contact" class="pt-12 pb-8 px-6">
        <div class="container mx-auto text-center">
            <div class="mb-6">
                <p class="mb-2">Have questions? Reach out!</p>
                <a href="mailto:hawasandra.m@gmail.com" class="text-lg font-medium hover:underline">hawasandra.m@gmail.com</a>
            </div>

            <div class="mb-6 flex justify-center items-center space-x-2">
                <i class="fas fa-map-marker-alt"></i>
                <span>Location</span>
            </div>

            <p class="text-sm">&copy; {{ currentYear }} SmartFunds. All rights reserved.</p>
        </div>
    </footer>
</template>

<style scoped>
/* Add component-specific styles here if needed */
/* Footer styles are in index.html <style> or global CSS file for now */
</style>
