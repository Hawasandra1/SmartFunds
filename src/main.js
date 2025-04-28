import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // <-- Import the router instance

// Import your global styles (assuming you moved them out of index.html)
import './assets/main.css'; // Adjust path if needed

const app = createApp(App);

// Tell the Vue application to use the router
app.use(router);

// Mount the application to the #app div in index.html
app.mount('#app');
