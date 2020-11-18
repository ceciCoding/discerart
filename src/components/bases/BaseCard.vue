<template>
    <div class="card">
        <slot></slot>
    </div>
</template>

<style scoped>
.card {
    background-color: var(--app-white);
    padding: 1.8rem;
    -webkit-box-shadow: 5px 5px 0px 0px var(--app-green);
    -moz-box-shadow: 5px 5px 0px 0px var(--app-green);
    box-shadow: 5px 5px 0px 0px var(--app-green);
    margin-bottom: 2rem;
}
</style>