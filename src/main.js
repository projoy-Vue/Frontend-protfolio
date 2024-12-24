import './assets/main.css'; // Import global styles

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Import Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faCode, faLaptopCode, faUserTie } from '@fortawesome/free-solid-svg-icons'; // Import your icons

// Import AOS for animations
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS CSS file

// Add Font Awesome icons to the library
library.add(faCode, faLaptopCode, faUserTie);

const app = createApp(App);

// Register global components and plugins
app.component('font-awesome-icon', FontAwesomeIcon); // Register FontAwesomeIcon component globally
app.use(router);

// Initialize AOS
app.directive('aos', {
  mounted(el, binding) {
    AOS.init();
    if (binding.value) {
      el.setAttribute('data-aos', binding.value); // Set AOS data attribute for custom animations
    }
  }
});

app.mount('#app');


