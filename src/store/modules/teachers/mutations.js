export default {
    registerTeacher(state, data) {
        state.teachers.push(data);
    },
    setTeachers(state, data) {
        state.teachers = data;
    }
};