<template>
    <base-modal :show="!!error" title="There has been an error" @close="handleError">
        <p>{{ error }}</p>
    </base-modal>
    <hero-image id="hero-img"></hero-image>
    <section class="main-section">
        <header>
            <h1> Messages</h1>
        </header>
        <base-spinner v-if="isLoading"></base-spinner>
        <ul v-else-if="hasMessages">
            <message-item v-for="message in receivedMessages" 
            :key="message.id" 
            :email="message.userEmail"
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

    data() {
        return {
            isLoading: false,
            error: null
        }
    },

    computed: {
        receivedMessages() {
            return this.$store.getters['messages/messages'];
        },
        hasMessages() {
            return !this.isLoading && this.$store.getters['messages/hasMessages'];
        }
    },

    created() {
        this.loadMessages();
    },

    methods: {
        async loadMessages() {
            this.isLoading = true;
            try {
                await this.$store.dispatch('messages/fetchMessages');               
            } catch(error) {
                this.error = error.message || 'Something went wrong';
            }
            this.isLoading = false;
        },
        handleError() {
            this.error = null;
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