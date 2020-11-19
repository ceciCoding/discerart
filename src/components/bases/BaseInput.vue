<template>
    <div class="form-control">
        <label :for="name" v-if="!isSearchBar">
            {{ labelText }}
        </label>
        <input v-if="!isTextArea"
            :type="typeOfInpt" 
            :name="name" 
            :placeholder="inptPlaceholder">
            <textarea v-if="isTextArea"
                :name="name"  
                rows="6"></textarea>
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
        },
        labelText: {
            type: String,
            required: false
        }
    },

    computed: {
        isSearchBar() {
            return this.name === 'search';
        },
        isTextArea() {
            return this.typeOfInpt === 'textarea';
        }
    }
}
</script>

<style scoped>
.form-control {
    position: relative;
    display: flex;
    flex-flow: column nowrap;
    margin-bottom: 1.5rem;
    width: 100%;
    margin: 0 auto;
}

.form-control label {
    font-size: .8rem;
    margin-bottom: .3rem;
}

.form-control input,
.form-control textarea {
    background-color: var(--app-white);
    padding: 1rem;
    -webkit-box-shadow: 5px 5px 0px 0px var(--app-green);
    -moz-box-shadow: 5px 5px 0px 0px var(--app-green);
    box-shadow: 5px 5px 0px 0px var(--app-green);
    margin-bottom: 2rem;
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
    .form-control input {
        width: 100%;
    }

    .material-icons {
        right: 1rem;
    }
}
</style>