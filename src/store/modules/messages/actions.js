export default {
    async contactTeacher(context, data) {
        const newMessage = {
            name: data.name,
            userEmail: data.email,
            message: data.message
        }
        const response = await fetch(`https://discerart.firebaseio.com/messages/${data.teacherId}.json`, {
            method: 'POST',
            body: JSON.stringify(newMessage)
        });

        const responseData = await response.json();

        if (!response.ok) {
            const error = new Error(responseData.message || 'Failed to send data');
            throw error;
        }

        newMessage.id = responseData.name;
        newMessage.teacherId = data.teacherId;
        context.commit('addMessage', newMessage);
    },

    async fetchMessages(context) {
        const teacherId = context.rootGetters.userId;
        const token = context.rootGetters.token;
        const response = await fetch(`https://discerart.firebaseio.com/messages/${teacherId}.json=auth=${token}`);
        const responseData = await response.json();

        if (!response.ok) {
            const error = new Error(responseData.message || 'Failed to fetch data');
            throw error;
        }

        const messages = [];

        for (const key in responseData) {
            const message = {
                id: key,
                teacherId: teacherId,
                userEmail: responseData[key].userEmail,
                message: responseData[key].message
            }    
            messages.push(message);
        }

        context.commit('setMessages', messages);
    }
}