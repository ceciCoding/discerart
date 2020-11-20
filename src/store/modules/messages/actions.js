export default {
    contactTeacher(context, data) {
        const newMessage = {
            id: new Date().toISOString(),
            teacherId: data.teacherId,
            name: data.name,
            userEmail: data.email,
            message: data.message
        }
        console.log(newMessage);
        context.commit('addMessage', newMessage);
    }
}