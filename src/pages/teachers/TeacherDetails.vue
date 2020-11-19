<template>
    <hero-image id="hero-img"></hero-image>
    <section class="teacher-info">
        <h1>{{ name }}</h1>
        <div class="img-container">
            <img src="../../assets/t1.jpg" alt="teacher's photo">
        </div>
        <h4>{{ fee }}€/hour</h4>
        <p>{{ description }}</p>
        <h3>Do you need more info? Contact this teacher now!</h3>
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
        name() {
            return this.selectedTeacher.name;
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

.teacher-info {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    width: 80%;
    margin: 0 auto;
}

.teacher-info h4 {
    align-self: flex-start;
}

.teacher-info h3 {
    text-align: center;
}

.teacher-info p {
    margin-bottom: 3rem;
}

@media screen and (min-width: 800px) {
    #hero-img {
        display: block;
    }

    .teacher-info {
        grid-column: 7/12;
        width: 100%;
    }
}
</style>

