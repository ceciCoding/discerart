<template>
    <hero-image id="hero-img"></hero-image>
    <section id="register">
        <h1>Register as a teacher</h1>
        <register-form></register-form>
    </section>
</template>

<script>
import RegisterForm from '../../components/teachers/RegisterForm.vue';

export default {
    components: {
        RegisterForm
    }
}
</script>

<style scoped>
#hero-img {
    display: none;
}

@media screen and (min-width: 800px) {
    #hero-img {
        display: block;
    }

    #register {
        grid-column: 6/12;
    }
}
</style>