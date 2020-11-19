<template>
    <h1>Contact Teacher</h1>
    <form @submit.prevent="submitForm">
        <div class="form-control">
            <label for="name">Your Name</label>
            <input type="text" name="name" v-model="name">
        </div>
        <div class="form-control">
            <label for="email">Your Email</label>
            <input type="text" name="email" v-model.trim="email">
        </div>
        <div class="form-control">
            <label for="message">Your message</label>
            <textarea  rows="5" name="message" v-model="message"></textarea>
        </div>
        <p v-if="!formIsValid">You must provide a value for all the fields</p>
        <div class="actions">
            <base-button>Send</base-button>
        </div>
    </form>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            email: '',
            message: '',
            formIsValid: true
        }
    },

    methods: {
        submitForm() {
            this.formIsValid = true;
            if (this.email === '' || !this.email.includes('@') || this.message === '' || this.name === '') {
                this.formIsValid = false;
                return;
            } 
            
        }
    }
}
</script>

<style scoped>
form {
    width: 100%;
}

.actions {
    display: flex;
}
</style>