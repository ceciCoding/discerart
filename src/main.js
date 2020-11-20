import { createApp } from 'vue';

import router from './router.js';
import store from './store/index.js';
import App from './App.vue';
import BaseCard from './components/bases/BaseCard.vue';
import BaseButton from './components/bases/BaseButton.vue';
import HeroImage from './components/layout/HeroImage.vue';
import BaseSpinner from './components/bases/BaseSpinner.vue';
import BaseModal from './components/bases/BaseModal.vue';

const app = createApp(App);

app.use(router);
app.use(store);
app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('hero-image', HeroImage);
app.component('base-spinner', BaseSpinner);
app.component('base-modal', BaseModal);

app.mount('#app');
