<template>
    <li class="teacher-item">
            <router-link :to="teacherDetailsLink">
                <base-card>
                    <h3>{{ name }}</h3>
                    <h5>{{ area }}</h5>
                    <div class="teacher-descr">
                        <p>{{ description }}</p>
                    </div>
                    <h4>{{ fee }}€/hour</h4>
                    <base-button link :to="contactTeacherLink">Contact</base-button>
                </base-card>
            </router-link>
    </li>
</template>

<script>
export default {
    props: ['id', 'name', 'area', 'description', 'fee'],
    computed: {
        contactTeacherLink() {
            return this.$route.path + '/' + this.id + '/contact';
        },
        teacherDetailsLink() {
            return this.$route.path  + '/' + this.id;
        }
    }
}
</script>

<style scoped>
a {
    text-decoration: none;
    color: inherit;
}

.teacher-item {
    width: 350px;
    height: 450px;
}

.teacher-descr {
    height: 150px;
    overflow-y: scroll;
}

</style>