<script setup>
// Remove import related to translation props
// import { defineProps } from 'vue';

// Remove props definition
// const props = defineProps({ translatedText: Object });

// Styles for mockup animation, mockup structure, etc. are in index.html <style> or global CSS file for now.
</script>

<template>
    <section class="hero-gradient pt-32 pb-16 md:pt-40 md:pb-24 px-6">
        <div class="container mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div class="text-center md:text-left">
                <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 leading-tight">
                    Take Control of Your Finances with <span class="text-blue-700">SmartFunds</span>.
                </h1>
                <p class="text-lg md:text-xl text-gray-600 mb-8">
                    SmartFunds provides intelligent insights and effortless tracking to help you achieve your financial goals faster.
                </p>
                <div class="space-x-4">
                    <RouterLink to="/login" class="btn btn-primary">Get Started Free</RouterLink>
                    <a href="#features" class="btn btn-secondary">Learn More</a>
                </div>
            </div>

            <div class="flex justify-center md:justify-end">
                <div class="tablet-mockup w-full max-w-sm h-80 md:h-96">
                    <div class="tablet-screen">
                        <div class="mock-header"> <span>Dashboard</span> <i class="fas fa-user-circle" style="font-size: 0.8rem;"></i> </div>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; margin-bottom: 0.5rem;">
                            <div class="mock-card"> <div class="mock-card-title"> <span>Balance</span> <i class="fas fa-wallet" style="font-size: 0.7rem; color: #63b3ed;"></i> </div> <div class="mock-card-value">$12.3k</div> </div>
                            <div class="mock-card"> <div class="mock-card-title"> <span>Income</span> <i class="fas fa-arrow-up" style="font-size: 0.7rem; color: #48bb78;"></i> </div> <div class="mock-card-value">$4.5k</div> </div>
                             <div class="mock-card"> <div class="mock-card-title"> <span>Expenses</span> <i class="fas fa-arrow-down" style="font-size: 0.7rem; color: #f56565;"></i> </div> <div class="mock-card-value">$1.8k</div> </div>
                             <div class="mock-card"> <div class="mock-card-title"> <span>Savings</span> <i class="fas fa-piggy-bank" style="font-size: 0.7rem; color: #a0aec0;"></i> </div> <div class="mock-card-value">65%</div> </div>
                         </div>
                        <div class="mock-table">
                             <div class="mock-table-header"> <span>Recent</span> <span>Amount</span> </div>
                             <div class="mock-table-row"> <span>Coffee Shop</span> <span>-$5.50</span> </div>
                              <div class="mock-table-row"> <span>Salary</span> <span>+$2250</span> </div>
                              <div class="mock-table-row"> <span>Groceries</span> <span>-$85.30</span> </div>
                          </div>
                        <div class="mock-graph">
                             <div class="mock-graph-bar" style="height: 60%;"></div> <div class="mock-graph-bar" style="height: 80%;"></div> <div class="mock-graph-bar" style="height: 40%;"></div> <div class="mock-graph-bar" style="height: 70%;"></div> <div class="mock-graph-bar" style="height: 55%;"></div>
                         </div>
                     </div>
                    <div class="absolute top-3 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-800 rounded-full"></div>
                 </div>
             </div>
         </div>
     </section>
 </template>

<style scoped>
/* Add component-specific styles here if needed */
/* Mockup styles are in index.html <style> or global CSS file for now */
</style>
