<script setup>
// Remove imports related to translation state and logic
// import { ref, computed } from 'vue'; // These are no longer needed if no reactive state is in App.vue

// Import the Navbar component (it remains global)
import Navbar from './components/Navbar.vue';

// Note: HeroSection, FeaturesSection, FooterSection are now typically imported in HomeView.vue
// Remove these imports from App.vue
// import HeroSection from './components/HeroSection.vue';
// import FeaturesSection from './components/FeaturesSection.vue';
// import FooterSection from './components/FooterSection.vue';

// --- Language Logic (Removed) ---
// Remove: const currentLang = ref('en');
// Remove: const translations = { ... };
// Remove: const translatedText = computed(() => { ... });
// Remove: function changeLanguage(lang) { ... }

// If you are using provide/inject for other things, keep that import.
// If not, you can remove the provide import as well.
// import { provide } from 'vue';
// Remove provide calls if they were only for translations
// provide('translatedText', translatedText);
// provide('changeLanguage', changeLanguage);

</script>

<template>
  <Navbar />

  <router-view></router-view>
</template>

<style scoped>
/* Component-specific styles for App.vue (usually minimal for a simple layout) */
/* Global styles like fixed navbar positioning should be in index.html <style> or a global CSS file */
</style>
