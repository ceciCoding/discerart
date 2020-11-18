export default {
    teachers(state) {
        return state.teachers;
    },

    hasTeachers(state) {
        return state.teachers && state.teachers.length > 0;
    }
}