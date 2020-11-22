<template>
    <li>
        <base-card>
            <div class="message-container">
                <a :href="emailLink"><span>From: </span>{{ email }}</a>
            </div>
            <p>{{ message }}</p>
        </base-card>
    </li>
</template>

<script>
export default {
    props: ['email', 'message'],

    computed: {
        emailLink() {
            return 'mailto:' + this.email;
        }
    }
}
</script>

<style scoped>
.message-container span {
    font-weight: 700;
}
</style>