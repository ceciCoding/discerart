<template>
    <form action="" @submit.prevent="submitForm">
        <div class="form-control">
            <label for="name">Name</label>
            <input type="text" name="name" v-model="name">
        </div>
         <div class="form-control">
            <label for="name">Tell potential students about you and your work</label>
            <textarea rows="5" name="name" v-model="description"></textarea>
        </div>
         <div class="form-control">
            <label for="name">Your hourly fee</label>
            <input type="number" name="name" v-model.number="fee">
        </div>
        <div>
            <label for="picture">Your profile picture</label>
            <input type="file" name="picture" accept=".jpg, .png, .webp, .jpeg">
        </div> 
        <h6>Choose your area of expertise</h6>
        <div class="radio-opts">
                <div>
                    <input type="radio" name="music" value="Music" v-model="area">
                    <label for="music">Music</label>
                </div>
                <div>
                    <input type="radio" name="writting" value="Writting" v-model="area">
                    <label for="writting">Writting</label>
                </div>
                <div>
                    <input type="radio" name="plastic" value="Plastic Arts" v-model="area">
                    <label for="plastic">Plastic Arts</label>
                </div>
                <div>
                    <input type="radio" name="acting" value="Acting" v-model="area">
                    <label for="acting">Acting</label>
                </div>
        </div>
        <base-button id="register">Register</base-button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            description: '',
            fee: null,
            area: '',  
        }
    },

    methods: {
        submitForm() {
            const formData = {
                name: this.name,
                description: this.description,
                fee: this.fee,
                area: this.area
            }

            this.$emit('save-data', formData);
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

.radio-opts > div {
    margin-bottom: .6rem;
    font-size: .8rem;
}

#register {
    margin: 0 auto;
    margin-top: 3rem;
}

@media screen and (min-width: 800px) {
    form {
        margin: 0;
    }
}
</style>