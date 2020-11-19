import { createStore } from 'vuex';
import teachersModule from './modules/teachers/index.js';
import  messagesModule from './modules/messages/index.js';

const store = createStore({
    modules: {
        teachers: teachersModule,
        messages: messagesModule
    },
    state() {
        return {
            userId: 'c3'
        }
    },
    getters: {
        userId(state) {
            return state.userId;
        }
    }
});

export default store;