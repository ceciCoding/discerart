<template>
    <button v-if="!link">
        <slot></slot>
    </button>
    <router-link v-else :to="to">
        <slot></slot>
    </router-link>
</template>

<script>
export default {
    props: {
        link: {
            type: Boolean,
            required: false,
            default: false
        },
        to: {
            type: String,
            required: false,
            default: '/'
        }
    }
}
</script>

<style scoped>
button, a {
    background-color: var(--app-green);
    color: var(--app-yellow);
    font-family: var(--secondary-font);
    padding: .5rem 2rem;
    border-radius: 25px;
}
</style>