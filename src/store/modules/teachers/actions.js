export default {
    registerTeacher(context, data) {
        const teacherData = {
            id: context.rootGetters.userId,
            name: data.name,
            description: data.description,
            fee: data.fee,
            area: data.area
        }

        context.commit('registerTeacher', teacherData);
    }
};