<template>
    <hero-image id="hero-img"></hero-image>
    <section id="register" class="main-section">
        <h1>Register as a teacher</h1>
        <register-form @save-data="saveData"></register-form>
    </section>
</template>

<script>
import RegisterForm from '../../components/teachers/RegisterForm.vue';

export default {
    components: {
        RegisterForm
    },

    methods: {
        saveData(data) {
            this.$store.dispatch('teachers/registerTeacher', data);
            this.$router.replace('/');
        }
    }
}
</script>
