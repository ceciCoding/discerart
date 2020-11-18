import { createApp } from 'vue';

import router from './router.js';
import store from './store/index.js';
import App from './App.vue';
import BaseCard from './components/bases/BaseCard.vue';
import BaseButton from './components/bases/BaseButton.vue';
import BaseInput from './components/bases/BaseInput.vue';

const app = createApp(App);

app.use(router);
app.use(store);
app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-input', BaseInput);
app.mount('#app');
