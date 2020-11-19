<template>
    <div class="filters-container">
        <span class="filter-option">
            <input type="checkbox" id="music" checked @change="setFilter">
            <label for="music">Music</label>
        </span>
        <span class="filter-option">
            <input type="checkbox" id="writting" checked @change="setFilter">
            <label for="writting">Writting</label>
        </span>
        <span class="filter-option">
            <input type="checkbox" id="plastic" checked @change="setFilter">
            <label for="plastic">Plastic Arts</label>
        </span>
        <span class="filter-option">
            <input type="checkbox" id="acting" checked @change="setFilter">
            <label for="acting">Acting</label>
        </span>
    </div>
</template>

<script>
export default {
    emits: ['change-filter'],

    data() {
        return {
            filters: {
                music: true,
                plastic: true,
                writting: true,
                acting: true
            }
        }
    },

    methods: {
        setFilter(event) {
            const inputId = event.target.id;
            const isActive = event.target.checked;
            const updatedFilters = {
              ...this.filters,
              [inputId]: isActive
            };
            this.filters = updatedFilters;
            this.$emit('change-filter', updatedFilters);
        }
    }
}
</script>

<style scoped>
.filters-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 0 auto;
    margin-top: 1rem;
}

.filter-option label {
    font-size: .8rem;
}

@media screen and (min-width: 800px) {
    .filters-container {
        width: 100%;
    }
}

</style>