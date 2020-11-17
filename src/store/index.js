import { createStore } from 'vuex';
import usersModule from './modules/users/index.js';

const store = createStore({
    modules: {
        users: usersModule
    }
});

export default store;