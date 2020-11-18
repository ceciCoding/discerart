<template>
    <section>
        <base-input name="search" inpt-placeholder="search"></base-input>
    </section>
    <section class="teachers-container">
        <h1>Teachers</h1>
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

<style scoped>
.teachers-container {
    grid-column: 4/13;
    
}

.teachers-container ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}

.teachers-container h1 {
    margin-bottom: 4rem;
    margin-top: 0;
}
</style>