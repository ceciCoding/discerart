import { createStore } from 'vuex';
import teachersModule from './modules/teachers/index.js';

const store = createStore({
    modules: {
        teachers: teachersModule
    }
});

export default store;