<script setup>
// Script logic for fetching and displaying dashboard data goes here.
// You'll likely need to import state management (like Pinia)
// or make API calls to get the user's financial data.

// Example:
// import { ref, onMounted } from 'vue';
// import { useFinancialStore } from '../stores/financialStore'; // Assuming you have a store

// const financialData = ref(null);
// const financialStore = useFinancialStore();

// onMounted(async () => {
//   financialData.value = await financialStore.fetchDashboardData();
// });

// You would also add computed properties here to process and format the data
// for display in the template.

// To display a dynamic username, you would typically fetch it
// as part of the user's data or from a user authentication store.
// For now, let's add a placeholder.
// const username = ref('User'); // Replace with actual user data

// You might add a ref here to hold the AI advice once loaded
// const aiAdvice = ref('Loading Financial Advice...');
// Or a loading state
// const isLoadingAdvice = ref(true); // Use this to conditionally show loading vs actual advice
</script>

<template>
  <div class="container mx-auto py-12 px-6 pt-16 md:pt-0">
    <div class="text-center mb-8">
      <p class="text-xl text-gray-700 mb-2">Hi User 👋</p>
      <h1 class="text-3xl font-bold text-gray-900">Your Financial Dashboard</h1>
    </div>


    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <div class="bg-white p-6 rounded-lg shadow-md">
        <div class="flex items-center justify-between mb-2">
          <h3 class="text-lg font-semibold text-gray-700">Total Balance</h3>
          <i class="fas fa-wallet text-blue-500 text-xl"></i>
        </div>
        <p class="text-2xl font-bold text-gray-900">TZS 3,500,000.00</p>
        <p class="text-sm text-gray-500 mt-1">+5% since last month</p>
      </div>

      <div class="bg-white p-6 rounded-lg shadow-md">
        <div class="flex items-center justify-between mb-2">
          <h3 class="text-lg font-semibold text-gray-700">Monthly Income</h3>
          <i class="fas fa-arrow-up text-green-500 text-xl"></i>
        </div>
         <p class="text-2xl font-bold text-gray-900">TZS 1,200,000.00</p>
        <p class="text-sm text-gray-500 mt-1">Last received on 25th</p>
      </div>

       <div class="bg-white p-6 rounded-lg shadow-md">
        <div class="flex items-center justify-between mb-2">
          <h3 class="text-lg font-semibold text-gray-700">Monthly Expenses</h3>
          <i class="fas fa-arrow-down text-red-500 text-xl"></i>
        </div>
         <p class="text-2xl font-bold text-gray-900">TZS 850,000.00</p>
        <p class="text-sm text-gray-500 mt-1">-10% since last month</p>
      </div>

       <div class="bg-white p-6 rounded-lg shadow-md">
        <div class="flex items-center justify-between mb-2">
          <h3 class="text-lg font-semibold text-gray-700">Savings Goal</h3>
          <i class="fas fa-piggy-bank text-purple-500 text-xl"></i>
        </div>
         <p class="text-2xl font-bold text-gray-900">75% Achieved</p>
        <p class="text-sm text-gray-500 mt-1">Target: TZS 5,000,000</p>
      </div>
    </div>

    <div class="bg-white p-6 rounded-lg shadow-md mb-8">
      <h3 class="text-xl font-semibold text-gray-700 mb-4">AI Financial Advice</h3>
      <div class="text-blue-400 italic ai-advice-placeholder">
        Loading Financial Advice...
      </div>
      </div>


    <div class="bg-white p-6 rounded-lg shadow-md mb-8">
      <h3 class="text-xl font-semibold text-gray-700 mb-4">Recent Transactions</h3>
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Description
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Category
              </th>
              <th scope="col" class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Amount
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                2025-04-27
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                Local Cafe
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Food & Dining
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-red-600 text-right">
                -TZS 8,500
              </td>
            </tr>
             <tr>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                2025-04-26
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                Monthly Salary
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Income
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-green-600 text-right">
                +TZS 1,200,000
              </td>
            </tr>
             <tr>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                2025-04-25
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                Supermarket
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Groceries
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-red-600 text-right">
                -TZS 150,000
              </td>
            </tr>
            </tbody>
        </table>
      </div>
    </div>

    <div class="bg-white p-6 rounded-lg shadow-md mb-8">
       <h3 class="text-xl font-semibold text-gray-700 mb-4">Spending Trends (Placeholder)</h3>
       <div class="h-64 bg-gray-100 rounded-md flex items-center justify-center text-gray-500">
         Chart or AI Insight Content Area
         </div>
     </div>

    </div>
</template>

<style scoped>
/* Add any component-specific styles for the dashboard layout here */
/* Most styling is handled by Tailwind classes in the template */

/* Define a simple pulse animation */
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

/* Apply the animation to the placeholder text */
.ai-advice-placeholder {
  animation: pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>
