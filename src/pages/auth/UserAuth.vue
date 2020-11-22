<template>
    <div class="login-hero">
        <hero-image id="login-hero"></hero-image>
    </div>
    <form @submit.prevent="submitForm">
        <h2>discerart</h2>
        <div class="form-control">
            <label for="email">Email</label>
            <input type="text" name="email" v-model.trim="email">
        </div>
        <div class="form-control">
            <label for="email">Password</label>
            <input type="password" name="password" v-model.trim="password">
        </div>
        <span @click="switchMode" v-if="isLogin">Don't have an account? Create one here</span>
        <span @click="switchMode" v-if="isSignup">Already have an account? Login</span>
        <p class="error" v-if="!formIsValid">Please enter a valid email and password (at least 6 characters long)</p>
        <base-button v-if="isLogin">Login</base-button>
        <base-button v-if="isSignup">Sign Up</base-button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: '',
            formIsValid: true,
            mode: 'login',
            error: null
        }
    },

    methods: {
        async submitForm() {
            this.formIsValid = true;
            if (this.email === '' || !this.email.includes('@') || this.password.length < 6) {
                this.formIsValid = false;
                return;
            }

            const actionData = {
                email: this.email,
                password: this.password
            }

            try {
                if (this.mode === 'login') {
                    await this.$store.dispatch('login', actionData);
                } else {
                    await this.$store.dispatch('signup', actionData);
                } 
                return this.$router.replace('/');
            } catch(error) {
                this.error = error.message || 'Failed to authenticate. Check your login data.';
            }
        },
        switchMode(){
            if (this.mode === 'login') {
                this.mode = 'signup'
            } else {
                this.mode = 'login'
            }
        }
    },

    computed: {
        isLogin() {
            return this.mode === 'login'
        },
        isSignup() {
            return this.mode === 'signup'
        }
    }
}
</script>

<style scoped>
form {
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-flow: column nowrap;
}

span {
    font-size: .7rem;
    margin-bottom: 2rem;   
    cursor: pointer;
}

.error {
    color: red;
}

.form-control:last-of-type {
    margin-bottom: .7rem;
}

@media screen and (min-width: 800px) {
    .login-hero {
        grid-column: 5/13;
        display: flex;
        align-items: center;
        justify-content: center;    
        background-color: var(--app-green);
        color: var(--app-yellow);
        height: 100vh;
        width: 100%; 
    }

    form {
        grid-column: 1/5;
        grid-row: 1/2;
        align-self: center;
        justify-self: center;
        width: 60%;
    }

    .hero-container {
        width: 50%;
    }
}
</style>