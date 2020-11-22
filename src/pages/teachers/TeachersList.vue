<template>
    <base-modal :show="!!error" title="There has been an error" @close="handleError">
        <p>{{ error }}</p>
    </base-modal>
    <section class="hero">
        <hero-image></hero-image>
        <div id="search">
            <div class="form-control">
                <input type="text" id="search-inpt" placeholder="search teachers" v-model="search">
                <span class="material-icons">search</span>
            </div>
            <filter-teachers @change-filter="setFilters"></filter-teachers>
        </div>
    </section>
    <section class="main-section teachers-container">
        <h1>Teachers</h1>
        <div v-if="isLoading">
            <base-spinner></base-spinner>
        </div>
        <ul v-else-if="hasTeachers">
                <teacher-item v-for="teacher in searchTeachers" 
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
            },
            search: '',
            isLoading: false,
            error: null            
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
            return !this.isLoading && this.$store.getters['teachers/hasTeachers']
        },
        searchTeachers() {
            return this.filteredTeachers.filter(teacher => {
                return teacher.name.toLowerCase().match(this.search) ||
                teacher.description.toLowerCase().match(this.search)
            })
        }
    },

    created() {
        this.loadTeachers();
    },

    methods: {
        setFilters(updatedFilters) {
            this.activeFilters = updatedFilters;
        },
        async loadTeachers() {
            this.isLoading = true;
            try {
                await this.$store.dispatch('teachers/loadTeachers');
            } catch(error) {
                this.error = error.message || 'Something went wrong';
            }
            this.isLoading = false;
        },
        handleError() {
            return this.error = null;
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
    margin: 0 auto;
    margin-bottom: 3rem;
    width: 80%;
}

#search-inpt {
    margin-bottom: .5rem;
    color: inherit;
}

.material-icons {
    position: absolute;
    right: 5%;
    top: .6rem;
    cursor: pointer;
}


@media screen and (min-width: 800px) {
    .hero {
        display: flex;
        flex-flow: column-reverse;
        justify-content: flex-end;
        margin-top: 1rem;
    }

    #search {
        width: 100%;
    }

    .teachers-container ul {
        /* display: grid;
        grid-auto-columns: auto;
        gap: 1.2rem; */
        display: flex;
        flex-flow: row wrap;
        gap: 2rem;
    }

    .teachers-container h1 {
        display: inline-block;
}
}


</style>