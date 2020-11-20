export default {
    addMessage(state, data) {
        state.messages.push(data);
    },
    setMessages(state, data) {
        state.messages = data;
    }
}