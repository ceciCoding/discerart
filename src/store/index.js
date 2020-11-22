import { createStore } from 'vuex';
import teachersModule from './modules/teachers/index.js';
import messagesModule from './modules/messages/index.js';
import authModule from './modules/auth/index.js';

const store = createStore({
    modules: {
        teachers: teachersModule,
        messages: messagesModule,
        auth: authModule
    }
});

export default store;