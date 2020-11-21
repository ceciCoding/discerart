<template>
    <div class="login-hero">
        <hero-image></hero-image>
    </div>
    <form action="">
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
        
    }
}
</style>