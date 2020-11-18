<template>
    <div class="base-card">
        <slot></slot>
    </div>
</template>

<style scoped>
.base-card {
    background-color: var(--app-white);
    padding: 1rem;
    -webkit-box-shadow: 5px 5px 0px 0px var(--app-green);
    -moz-box-shadow: 5px 5px 0px 0px var(--app-green);
    box-shadow: 5px 5px 0px 0px var(--app-green);
}
</style>