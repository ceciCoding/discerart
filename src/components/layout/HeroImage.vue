<template>
     <div class="hero-container">
         <h1>discerart</h1>
        <img src="../../assets/04.png" alt="drawing of a color palette">
        <h3>Find your art online teacher</h3>
    </div>
</template>

<style scoped>
.hero-container {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
}

img {
    max-width: 80%;
    padding-left: .5rem;
}

h3 {
    font-weight: bold;
    text-align: center;
}

@media screen and (min-width: 800px) {
    .hero-container {
        grid-column: 1/4;
    }

    img {
        max-width: 100%;
        padding-left: 1.5rem;
    }
}
</style>