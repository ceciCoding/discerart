export default {
    contactTeacher(context, data) {
        const newMessage = {
            id: new Date().toISOString(),
            teacherId: data.teacherId,
            name: data.name,
            email: data.email,
            message: data.message
        }
        context.commit('addMessage', newMessage);
    }
}