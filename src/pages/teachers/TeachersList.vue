<template>
    <section>
        FILTERS
    </section>
    <section>
        <ul v-if="hasTeachers">
            <li v-for="teacher in filteredTeachers" :key="teacher.id">
                {{ teacher.name }}
            </li>
        </ul>
        <h3 v-else>No teachers were found</h3>
    </section>
</template>

<script>
export default {
    computed: {
        filteredTeachers() {
            return this.$store.getters['teachers/teachers'];
        },
        hasTeachers() {
            return this.$store.getters['teachers/hasTeachers']
        }
    }
}
</script>