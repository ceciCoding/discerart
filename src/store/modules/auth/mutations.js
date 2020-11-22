export default {
    setUser(state, data) {
        state.token = data.token;
        state.userId = data.userId;
        state.tokenExpiration = data.tokenExpiration;    
    }
}