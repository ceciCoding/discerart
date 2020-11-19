export default {
    registerTeacher(context, data) {
        const teacherData = {
            id: 'c3',
            name: data.name,
            description: data.description,
            fee: data.fee,
            area: data.area
        }

        context.commit('registerTeacher', teacherData);
    }
};