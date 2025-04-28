<script setup>
// Import the RouterLink component from vue-router
import { RouterLink } from 'vue-router';

// No translation props or events are present in this version
// No language switcher logic is present
</script>

<template>
    <nav class="navbar">
        <div class="container mx-auto px-6 py-3 flex justify-between items-center">
            <RouterLink to="/" class="flex items-center space-x-2">
                <svg class="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                <span class="text-xl font-bold text-gray-800">SmartFunds</span> </RouterLink>

            <div class="flex items-center flex-wrap justify-end gap-x-2 md:gap-x-5 gap-y-2">

                <RouterLink to="/dashboard" class="text-gray-600 hover:text-gray-900 font-medium md:block">Dashboard</RouterLink>

                <RouterLink to="/#features" class="text-gray-600 hover:text-gray-900 font-medium md:block">Features</RouterLink>
               <RouterLink to="/#contact" class="text-gray-600 hover:text-gray-900 font-medium hidden md:block">Contact</RouterLink>
                <div class="flex items-center space-x-2 text-gray-600 hidden md:flex">
                     <i class="fas fa-cog text-lg"></i> </div>

                <RouterLink to="/login" class="btn btn-primary text-sm">Login / Sign Up</RouterLink>
            </div>
        </div>
    </nav>
</template>

<style scoped>
/* Component-specific styles for Navbar */
/* Global navbar styles (like fixed position) are in index.html <style> or global CSS file */
</style>
