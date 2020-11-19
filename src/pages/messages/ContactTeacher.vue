<template>
    <h1>Contact Teacher</h1>
    <form action="">
        <div class="form-control">
            <label for="name">Your Name</label>
            <input type="text" name="name">
        </div>
        <div class="form-control">
            <label for="email">Your Email</label>
            <input type="text" name="email">
        </div>
        <div class="form-control">
            <label for="message">Your message</label>
            <textarea  rows="5" name="message"></textarea>
        </div>
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