export default {
    async registerTeacher(context, data) {
        const userId = context.rootGetters.userId;
        const teacherData = {
            name: data.name,
            description: data.description,
            fee: data.fee,
            area: data.area
        }

        const response = await fetch(`https://discerart.firebaseio.com/teachers/${userId}.json`, {
            method: 'PUT',
            body: JSON.stringify(teacherData)
        });

        const responseData = await response.json();

        if (!response.ok) {
            const error = new Error(responseData.message || 'Failed to fetch');
            throw error;
        }

        context.commit('registerTeacher', {
            ...teacherData,
            id: userId
        });
    },

    async loadTeachers(context) {
        //for handling cached data
        if (!context.getters.shouldUpdate) return;

        const response = await fetch(`https://discerart.firebaseio.com/teachers.json`);
        const responseData = await response.json();

        if (!response.ok) {
            const error = new Error(responseData.message || 'Failed to fetch');
            throw error;
        }

        const teachers = [];

        for (const key in responseData) {
            const teacher = {
                id: key,
                name: responseData[key].name,
                description: responseData[key].description,
                fee: responseData[key].fee,
                area: responseData[key].area
            }
            teachers.push(teacher);
        }

        context.commit('setTeachers', teachers);
        context.commit('setLastFetchDate');
    }
};