<template>
    <div>
        <label :for="name">
            <slot></slot>
        </label>
        <input :type="typeOfInpt" :name="name" :placeholder="inptPlaceholder">
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
}
}
</script>

<style scoped>
input {
    background-color: var(--app-white);
    padding: 1rem;
    -webkit-box-shadow: 5px 5px 0px 0px var(--app-green);
    -moz-box-shadow: 5px 5px 0px 0px var(--app-green);
    box-shadow: 5px 5px 0px 0px var(--app-green);
    margin-bottom: 2rem;
    width: 100%;
    font-family: inherit;
}
</style>