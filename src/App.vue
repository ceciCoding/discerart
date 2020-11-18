<template>
    <the-header></the-header>
    <router-view></router-view>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';

export default {
    components: {
        TheHeader
    }
}
</script>

<style>
@font-face {
    font-family: 'Recoleta';
    src: url('./assets/Recoleta-Bold.woff2') format ('woff2'),
         url('./assets/Recoleta-RegularDEMO.otf') format('opentype');
}

:root {
    --app-yellow: #efc485;
    --app-green: #354d59;
    --app-white: #efe9e1;
    --main-font: 'Quicksand', sans-serif;
    --secondary-font: 'Recoleta', Fallback,  serif;
}

* {
  box-sizing: border-box;
  padding: 0;
  border: 0;
}

*::before,
*::after {
  box-sizing: inherit;
}

body {
    background-color: var(--app-yellow);
    color: var(--app-green);
    font-family: var(--main-font);
    padding: 2rem 0;
    margin: 0;
}


ul {
    list-style: none;
}

p {
    line-height: 2rem;
}

h1 {
    font-family: var(--secondary-font);
    text-align: center;
}

h3 {
    font-family: var(--secondary-font);
    font-weight: normal;
    margin-top: 0;
}

/* desktop and tablets*/ 
@media screen and (min-width: 800px) {
    body {
        padding: 0 150px;
        /* padding-left: 250px; */
        max-width: 2000px;
        margin: 2rem auto;
    }

    #app {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        /* gap: 2rem; */
    }

    h1 {
        text-align: left;
    }
}
</style>