<script setup>
// Import the components that make up the home page content
import HeroSection from '../components/HeroSection.vue';
import FeaturesSection from '../components/FeaturesSection.vue';
import FooterSection from '../components/FooterSection.vue';

// No translation logic or props needed here anymore
</script>

<template>
  <div class="container mx-auto px-6 pt-16 md:pt-0">
    <HeroSection />
    <FeaturesSection />
    <FooterSection />
  </div>
</template>

<style scoped>
/* Component-specific styles for the Home view */
/* Ensure no styles here are hiding the footer */
</style>
