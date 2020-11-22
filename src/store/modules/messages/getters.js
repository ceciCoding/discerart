export default {
    messages(state, _, _2, rootGetters) {
        const teacherId = rootGetters.userId;
        return state.messages.filter(message => message.teacherId === teacherId);
    },
    hasMessages(_, getters) {
        return getters.messages
            // && getters.messages.lenght > 0;
    }
};