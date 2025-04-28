import { createRouter, createWebHistory } from 'vue-router';

// Import your view components
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue';
import SignupView from '../views/SignUpView.vue';
import DashboardView from '../views/DashboardView.vue'; // <-- Import the new DashboardView

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login', // Path for the login page
      name: 'login',
      component: LoginView
    },
    {
      path: '/signup', // Path for the sign-up page
      name: 'signup',
      component: SignupView
    },
    {
      path: '/dashboard', // <-- New path for the dashboard page
      name: 'dashboard',
      component: DashboardView // <-- The component to render for the dashboard path
    }
    // Add more route objects here for additional pages
  ],
  // Add the scrollBehavior option
  scrollBehavior(to, from, savedPosition) {
    // If a saved position exists (e.g., from using the browser's back/forward buttons)
    if (savedPosition) {
      return savedPosition;
    }
    // If the target route has a hash (e.g., #features, #contact)
    else if (to.hash) {
      // Scroll to the element with the matching ID
      return {
        el: to.hash, // el: '#section-id'
        behavior: 'smooth' // Optional: Add smooth scrolling
      };
    }
    // Otherwise, scroll to the top of the page
    else {
      return { top: 0 };
    }
  }
});

export default router;
