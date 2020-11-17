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
    margin: 0;
    padding: 0;
}

ul {
    list-style: none;
}

h1 {
    font-family: var(--secondary-font);
}
</style>