<template>
    <form action="" @submit.prevent="submitForm">
        <base-input 
            name="name" 
            labelText="Name" 
            v-model="name"></base-input>
        <base-input 
            name="description" 
            type="textarea" 
            rows="5" 
            labelText="Your ad's description" 
            v-model="description"></base-input>
        <base-input 
            name="fee" 
            type="number" 
            labelText="Your hourly fee" 
            v-model.number="fee"></base-input>
        <div>
            <h6>Choose your area of expertise</h6>
                <input type="radio" name="music" value="Music" v-model="area">
                <label for="music">Music</label>
                <input type="radio" name="writting" value="Writting" v-model="area">
                <label for="writting">Writting</label>
                <input type="radio" name="plastic" value="Plastic Arts" v-model="area">
                <label for="plastic">Plastic Arts</label>
                <input type="radio" name="acting" value="Acting" v-model="area">
                <label for="acting">Acting</label>
        </div>
    </form>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            description: '',
            fee: null,
            area: ''            
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

            console.log(formData);
        }
    }
}
</script>