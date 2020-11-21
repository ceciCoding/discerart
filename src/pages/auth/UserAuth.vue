<template>
    <div class="login-hero">
        <hero-image id="login-hero"></hero-image>
    </div>
    <form action="">
        <h2>discerart</h2>
        <div class="form-control">
            <label for="email">Email</label>
            <input type="text" name="email">
        </div>
        <div class="form-control">
            <label for="email">Password</label>
            <input type="password" name="password">
        </div>
        <span><a href="">Dont have an account? Create one here</a></span>
        <base-button>Login</base-button>
    </form>
</template>

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
}

.form-control:last-of-type {
    margin-bottom: .7rem;
}

@media screen and (min-width: 800px) {
    .login-hero {
        grid-column: 6/13;
        display: flex;
        align-items: center;
        justify-content: center;    
        background-color: var(--app-green);
        color: var(--app-yellow);
        height: 100vh;
        width: 100%; 
    }

    form {
        grid-column: 1/6;
        grid-row: 1/2;
        align-self: center;
        justify-self: center;
        width: 60%;
    }

    .hero-container {
        width: 80%;
    }
}
</style>