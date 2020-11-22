import mutations from './mutations.js';
import actions from './auth_actions.js';
import getters from './getters.js';

export default {
    state() {
        return {
            userId: null,
            token: null,
            tokenExpiration: null
        }
    },
    mutations, 
    actions, 
    getters
}