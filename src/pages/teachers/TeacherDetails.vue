<template>
    <hero-image id="hero-img"></hero-image>
    <section class="teacher-info">
        <div class="img-container">
            <img src="../../assets/t1.jpg" alt="teacher's photo">
        </div>
        <h1>{{ name }}</h1>
        <h4>{{ fee }}€/hour</h4>
        <p>{{ description }}</p>
        <base-button link :to="contactLink">Contact</base-button>
        <router-view></router-view>
    </section>
</template>

<script>
export default {
    data() {
        return {
            selectedTeacher: null
        }
    },

    props: ['id'],

    computed:{
        contactLink() {
            return this.$route.path + '/' + this.id + '/contact';
        },
        area() {
            return this.selectedTeacher.area;
        },
        fee() {
            return this.selectedTeacher.fee;
        },
        description() {
            return this.selectedTeacher.description;
        }
    },

    created() {
        this.selectedTeacher = this.$store.getters['teachers/teachers'].find(teacher => teacher.id === this.id)
    }
}
</script>

<style scoped>
.img-container {
    width: 120px;
    margin: 0 auto;
}

.img-container img {
    clip-path: circle();
    width: 100%;
}

#hero-img {
    display: none;
}

@media screen and (min-width: 800px) {
    #hero-img {
        display: block;
    }

    .teacher-info {
        grid-column: 6/12;
    }
}
</style>

