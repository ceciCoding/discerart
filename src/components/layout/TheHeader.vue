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
                <li v-if="isAuthenticated && isTeacher">
                    <router-link :to="profileLink">
                        <span class="material-icons">perm_identity</span>
                        <span class="item-name">Profile</span>
                    </router-link>
                </li>
                <li v-if="isAuthenticated">
                    <router-link to="/messages">
                        <span class="material-icons">inbox</span>
                        <span class="item-name">Inbox</span>
                    </router-link>
                </li>
                <li v-if="isAuthenticated">
                    <router-link to="/register">
                        <span class="material-icons">post_add</span>
                        <span class="item-name">Teach</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/login" v-if="!isAuthenticated">
                        <span class="material-icons">login</span>
                        <span class="item-name">Login</span>
                    </router-link>
                    <router-link to="/login" v-if="isAuthenticated" @click="logout">
                        <span class="material-icons">login</span>
                        <span class="item-name">Logout</span>
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
        userId() {
            return this.$store.getters.userId;
        },
        profileLink() {
            return '/teachers/' + this.userId;
        },
        isAuthenticated() {
            return this.$store.getters.isAuthenticated;
        }
    }, 

    methods: {
        logout() {
            this.$store.dispatch('logout');
            this.$router.redirect('/');
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
        margin-top: 3rem;
    }

    .menu-items-container li {
        margin-bottom: 2rem;
    }
}
</style>