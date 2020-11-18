<template>
    <div class="form-control">
        <label :for="name">
            <slot></slot>
        </label>
        <input 
            :type="typeOfInpt" 
            :name="name" 
            :placeholder="inptPlaceholder">
        <span v-if="isSearchBar" class="material-icons">search</span>
    </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true,
        },
        typeOfInpt: {
            type: String,
            required: true,
            default: 'text'
        },
        inptPlaceholder: {
            type: String,
            required: false
        }
    },

    computed: {
        isSearchBar() {
            return this.name === 'search';
        }
    }
}
</script>

<style scoped>
.form-control {
    position: relative;
    display: flex;
    justify-content: flex-start;
}

input {
    background-color: var(--app-white);
    padding: 1rem;
    -webkit-box-shadow: 5px 5px 0px 0px var(--app-green);
    -moz-box-shadow: 5px 5px 0px 0px var(--app-green);
    box-shadow: 5px 5px 0px 0px var(--app-green);
    margin-bottom: 2rem;
    width: 80%;
    margin: 0 auto;
    font-family: inherit;
    color: inherit;
}

.material-icons {
    position: absolute;
    right: 12%;
    top: .6rem;
    cursor: pointer;
}

@media screen and (min-width: 800px) {
    input {
        width: 100%;
    }

    .material-icons {
        right: 1rem;
    }
}
</style>