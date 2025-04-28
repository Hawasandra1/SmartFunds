<script setup>
// Remove import related to translation props
// import { defineProps } from 'vue';

// Remove props definition
// const props = defineProps({ translatedText: Object });
</script>

<template>
    <section id="features" class="py-16 md:py-24 bg-white px-6">
        <div class="container mx-auto">
            <div class="text-center mb-12 md:mb-16">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Everything You Need, Intelligently Managed</h2>
                <p class="text-lg text-gray-600 max-w-2xl mx-auto">SmartFunds combines powerful features with AI to simplify your financial life.</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div class="feature-card">
                    <div class="feature-icon"> <i class="fas fa-lightbulb fa-lg"></i> </div>
                    <h3 class="text-xl font-semibold text-gray-800 mb-2">AI-Powered Insights</h3>
                    <p class="text-gray-600">Get personalized recommendations, spending alerts, and savings opportunities delivered automatically.</p>
                </div>

                <div class="feature-card">
                    <div class="feature-icon"> <i class="fas fa-chart-line fa-lg"></i> </div>
                    <h3 class="text-xl font-semibold text-gray-800 mb-2">Effortless Tracking</h3>
                    <p class="text-gray-600">Connect your accounts securely and see all your transactions, balances, and trends in one place.</p>
                </div>

                <div class="feature-card">
                    <div class="feature-icon"> <i class="fas fa-piggy-bank fa-lg"></i> </div>
                    <h3 class="text-xl font-semibold text-gray-800 mb-2">Smart Budgeting</h3>
                    <p class="text-gray-600">Create realistic budgets, track your progress visually, and stay motivated to reach your goals.</p>
                </div>

                 <div class="feature-card">
                    <div class="feature-icon"> <i class="fas fa-shield-alt fa-lg"></i> </div>
                    <h3 class="text-xl font-semibold text-gray-800 mb-2">Secure & Private</h3>
                    <p class="text-gray-600">Bank-level security and encryption protect your data. Your privacy is our top priority.</p>
                </div>

                 <div class="feature-card">
                    <div class="feature-icon"> <i class="fas fa-bullseye fa-lg"></i> </div>
                    <h3 class="text-xl font-semibold text-gray-800 mb-2">Goal Setting</h3>
                    <p class="text-gray-600">Define your financial goals, track your progress, and get AI tips to achieve them faster.</p>
                </div>

                 <div class="feature-card">
                    <div class="feature-icon"> <i class="fas fa-file-invoice-dollar fa-lg"></i> </div>
                    <h3 class="text-xl font-semibold text-gray-800 mb-2">Customizable Reports</h3>
                    <p class="text-gray-600">Generate insightful reports on your spending, income, net worth, and more.</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
/* Add component-specific styles here if needed */
/* Feature card styles are in index.html <style> or global CSS file for now */
</style>
