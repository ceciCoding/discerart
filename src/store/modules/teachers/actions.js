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
            body: JSON.stringify(teacherData);
        });

        //const responseData = await response.json();

        if (!response.ok) {
            //error ...
        }

        context.commit('registerTeacher', {
            ...teacherData,
            id: userId
        });
    }
};