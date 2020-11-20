<template>
    <hero-image id="hero-img"></hero-image>
    <section class="main-section">
        <header>
            <h1> Messages</h1>
        </header>
        <ul v-if="hasMessages">
            <message-item v-for="message in receivedMessages" 
            :key="message.id" 
            :email="message.email"
            :message="message.message"></message-item>
        </ul>
        <h3 v-else>You haven't recieved any messages yet</h3>
    </section>
</template>

<script>
import MessageItem from '../../components/messages/MessageItem.vue';

export default {
    components: {
        MessageItem
    },

    computed: {
        receivedMessages() {
            return this.$store.getters['messages/messages'];
        },
        hasMessages() {
            return this.$store.getters['messages/hasMessages'];
        }
    }
}
</script>

<style scoped>
h3 {
    font-family: var(--main-font);
    margin-top: 3rem;
}
</style>