<template>
    <li>
        <base-card>
            <div>
                <a :href="emailLink">{{ email }}</a>
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