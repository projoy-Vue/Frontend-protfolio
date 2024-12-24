// src/plugins/FontAwesome.js or in main.js or App.vue
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faCode, faLaptopCode, faUserTie } from '@fortawesome/free-solid-svg-icons';

// Add icons to the library
library.add(faCode, faLaptopCode, faUserTie);

// Register the component globally
Vue.component('font-awesome-icon', FontAwesomeIcon);
