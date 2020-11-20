export default {
    teachers(state) {
        return state.teachers;
    },

    hasTeachers(state) {
        return state.teachers && state.teachers.length > 0;
    },

    isTeacher(state, getters, rootState, rootGetters) {
        const teachers = getters.teachers;
        const userId = rootGetters.userId;
        return teachers.some(teacher => teacher.id === userId);
    },

    //check if this works
    getUserId(state, rootGetters) {
        return rootGetters.userId;
    },

    shouldUpdate(state) {
        const lastFetch = state.lastFetch;
        if (!lastFetch) {
            return true;
        }
        const currentTime = new Date().getTime();
        return (currentTime - lastFetch) / 1000 > 60;
    }
}