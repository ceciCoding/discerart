<template>
    <the-header v-if="!isLogin"></the-header>
    <router-view></router-view>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';

export default {
    components: {
        TheHeader
    },

    computed: {
        isLogin() {
            return this.$route.path.includes('login');
        }
    },

    watch: {
        isLogin() {
            return document.body.className = 'auth';
        }
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
    margin-bottom: 3rem;
}

a {
    text-decoration: none;
    color: inherit;
}

ul {
    list-style: none;
}

p {
    line-height: 2rem;
}

h1, h2 {
    font-family: var(--secondary-font);
    text-align: center;
}

h3 {
    font-family: var(--secondary-font);
    font-weight: normal;
    margin-top: 0;
}

label {
    font-size: .7rem;
}

.form-control {
    position: relative;
    display: flex;
    flex-flow: column nowrap;
    margin-bottom: 1.5rem;
    width: 100%;
    margin: 0 auto;
    margin-bottom: 2rem;
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
    font-family: inherit;
    color: inherit;
}

#hero-img {
    display: none;
}

/* desktop and tablets*/ 
@media screen and (min-width: 800px) {
    body {
        padding: 0 150px;
        padding-right: 50px;
        max-width: 2000px;
        margin: 2rem auto;
    }

    .auth {
        margin: 0;
        padding: 0;
    }

    .main-section {
        grid-column: 6/13;
    }

    #app {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        margin: 0 auto;
    }

    h1 {
        text-align: left;
    }

    #hero-img {
        display: block;
    }
}
</style>