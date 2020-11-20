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

        //const responseData = await response.json();

        if (!response.ok) {
            //error ...
        }

        context.commit('registerTeacher', {
            ...teacherData,
            id: userId
        });
    },

    async loadTeachers(context) {
        const response = await fetch(`https://discerart.firebaseio.com/teachers.json`);
        const responseData = await response.json();

        if (!response.ok) {
            //handle errors
        }

        const teachers = [];

        for (const key in responseData) {
            const teacher = {
                name: responseData[key].name,
                description: responseData[key].description,
                fee: responseData[key].fee,
                area: responseData[key].area
            }
            teachers.push(teacher);
        }

        context.commit('setTeachers', teachers);
    }
};