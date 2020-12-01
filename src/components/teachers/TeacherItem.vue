<template>
    <li class="teacher-item">
            <router-link :to="teacherDetailsLink">
                <base-card>
                    <!-- <div class="img-container">
                        <img src="../../assets/t1.jpg" alt="teacher's photo">
                    </div> -->
                    <h3>{{ name }}</h3>
                    <h5>{{ area }}</h5>
                    <div class="teacher-descr">
                        <p>{{ description }}</p>
                    </div>
                    <h4>{{ fee }}€/hour</h4>
                    <base-button link :to="contactTeacherLink">Contact</base-button>
                </base-card>
            </router-link>
    </li>
</template>

<script>
export default {
    props: ['id', 'name', 'area', 'description', 'fee'],
    computed: {
        contactTeacherLink() {
            return this.$route.path + '/' + this.id + '/contact';
        },
        teacherDetailsLink() {
            return this.$route.path  + '/' + this.id;
        }
    }
}
</script>

<style scoped>
.teacher-item {
    width: 80%;
    height: auto;
    position: relative;
    display: flex;
    margin-bottom: 1.5rem;
} 

a {
    text-decoration: none;
    color: inherit;
}

.teacher-item h5 {
    margin-top: 0.2rem;
    margin-bottom: 1.5rem;
}

.teacher-item h3 {
    margin-bottom: .3rem;
}

.teacher-item p {
    margin-top: 0;
}

.teacher-descr {
    height: 150px;
    overflow-y: scroll;
}

.img-container {
    position: absolute;
    right: 2rem;
    top: 1.8rem;
    width: 50px;
}

.img-container img {
    max-width: 100%;
    clip-path: circle();
}

@media screen and (min-width: 800px) {
    .teacher-item {
        width: auto;
        max-width: 320px;
        margin-bottom: 0;
        margin-right: 2rem;
    } 
}

</style>