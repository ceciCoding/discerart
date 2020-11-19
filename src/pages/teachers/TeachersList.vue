<template>
    <section class="hero">
        <hero-image></hero-image>
        <div id="search">
            <base-input name="search" inpt-placeholder="search"></base-input>
            <filter-teachers @change-filter="setFilters"></filter-teachers>
        </div>
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
import FilterTeachers from '../../components/teachers/FilterTeachers.vue';

export default {
    components: {
        TeacherItem,
        FilterTeachers
    },

    data() {
        return {
            activeFilters:  {
                music: true,
                plastic: true,
                writting: true,
                acting: true
            }            
        }
    },

    computed: {
        filteredTeachers() {
            const teachers = this.$store.getters['teachers/teachers'];
            return teachers.filter(teacher => {
                if (this.activeFilters.music && teacher.area === 'Music') {
                    return true;
                }
                else if (this.activeFilters.writting && teacher.area === 'Writting') {
                    return true;
                }
                else if (this.activeFilters.acting && teacher.area === 'Acting') {
                    return true;
                }
                else if (this.activeFilters.plastic && teacher.area === 'Plastic Arts') {
                    return true;
                } else return false;
            })
        },
        hasTeachers() {
            return this.$store.getters['teachers/hasTeachers']
        }
    },

    methods: {
        setFilters(updatedFilters) {
            this.activeFilters = updatedFilters;
        }
    }
}
</script>

<style scoped>
.teachers-container ul {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
}

.teachers-container h1 {
    display: none;
}

.hero {
    grid-column: 1/4;
}

#search {
    margin: 3rem 0;
}


@media screen and (min-width: 800px) {
    .hero {
        display: flex;
        flex-flow: column-reverse;
        justify-content: flex-end;
    }

    #search {
        margin: 0;
        margin-bottom: 3rem;
    }

    .teachers-container {
        grid-column: 5/13;
    
}

    .teachers-container ul {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1.2rem;
    }

    .teachers-container h1 {
        display: inline-block;
}
}


</style>