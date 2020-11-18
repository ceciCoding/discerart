<template>
    <section>
        FILTERS
    </section>
    <section>
        <ul v-if="hasTeachers">
                <teacher-item v-for="teacher in filteredTeachers" 
                    :key="teacher.id" 
                    :id="teacher.id" 
                    :name="teacher.name"
                    :area="teacher.area"
                    :description="teacher.description"
                    :fee="teacher.fee">
                </teacher-item>
        </ul>
        <h3 v-else>No teachers were found</h3>
    </section>
</template>

<script>
import TeacherItem from '../../components/teachers/TeacherItem.vue';

export default {
    components: {
        TeacherItem
    },
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