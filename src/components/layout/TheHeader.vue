<template>
    <header>
        <nav>
            <ul class="menu-items-container">
                <li>
                    <router-link to="/">
                        <span class="material-icons">home</span>
                        <span class="item-name">Home</span>
                    </router-link>
                </li>
                <li>
                     <router-link to="/register" v-if="!isTeacher">
                        <span class="material-icons">perm_identity</span>
                        <span class="item-name">Regsiter</span>
                    </router-link>
                     <router-link :to="profileLink" v-if="isTeacher">
                        <span class="material-icons">perm_identity</span>
                        <span class="item-name">Profile</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/messages" v-if="isTeacher">
                        <span class="material-icons">inbox</span>
                        <span class="item-name">Inbox</span>
                    </router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    computed: {
        isTeacher() {
            return this.$store.getters['teachers/isTeacher'];
        },
        profileLink() {
            return '/teachers/' + this.$route.params.id;
        }
    }
}
</script>

<style scoped>
a {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    color: var(--app-yellow);
    text-decoration: none;
}

header {
    background-color: var(--app-green);
    position: fixed;
    bottom: 0;
    height: 4rem;
    width: 100vw;
    padding: 0 3rem;
    z-index: 20;
}

.menu-items-container {
    display: flex;
    justify-content: space-between;
}

.item-name {
    font-size: .7rem;
}

/* desktop and tablets*/ 
@media screen and (min-width: 800px) {
    header {
        height: 100vh;
        width: 100px;
        left: 0;
        padding: 0;
    }

    .menu-items-container {
        flex-flow: column nowrap;
        height: 20vh;
        margin-top: 3rem;
    }
}
</style>