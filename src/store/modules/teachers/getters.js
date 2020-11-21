export default {
    teachers(state) {
        return state.teachers;
    },

    hasTeachers(state) {
        return state.teachers && state.teachers.length > 0;
    },

    isTeacher(_, getters, _2, rootGetters) {
        const teachers = getters.teachers;
        const userId = rootGetters.userId;
        return teachers.some(teacher => teacher.id === userId);
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