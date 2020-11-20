<template>
    <section>
        <h1>Not Found</h1>
        <div class="img-container">
            <img src="../assets/02.png" alt="page not found drawing">
        </div>
        <base-button link to="/">Go back</base-button>
    </section>
</template>

<style scoped>
section {
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
}

.img-container {
    width: 100%;
}

.img-container img {
    width: 100%;
}

button {
    margin-top: 3rem;
}

@media screen and (min-width: 800px) {
    section {
        grid-column: 4/10;
    }
}
</style>