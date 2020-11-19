<template>
    <form action="" @submit.prevent="submitForm">
        <div class="form-control" :class="{invalid: !name.isValid}">
            <label for="name">Name</label>
            <input type="text" name="name" v-model="name.value" @blur="clearInpt('name')">
            <p v-if="!name.isValid">You must provide a name</p>
        </div>
         <div class="form-control" :class="{invalid: !description.isValid}">
            <label for="name">Tell potential students about you and your work</label>
            <textarea rows="5" name="name" v-model="description.value" @blur="clearInpt('description')"></textarea>
            <p v-if="!description.isValid">You must provide a description</p>
        </div>
         <div class="form-control" :class="{invalid: !fee.isValid}">
            <label for="name">Your hourly fee</label>
            <input type="number" name="name" v-model.number="fee.value" @blur="clearInpt('fee')">
            <p v-if="!fee.isValid">Your fee must be greater than 0</p>
        </div>
        <div>
            <label for="picture">Your profile picture</label>
            <input type="file" name="picture" accept=".jpg, .png, .webp, .jpeg">
        </div> 
        <h6>Choose your area of expertise</h6>
        <div class="radio-opts" :class="{invalid: !fee.isValid}">
                <div>
                    <input type="radio" name="music" value="Music" v-model="area.value">
                    <label for="music">Music</label>
                </div>
                <div>
                    <input type="radio" name="writting" value="Writting" v-model="area.value">
                    <label for="writting">Writting</label>
                </div>
                <div>
                    <input type="radio" name="plastic" value="Plastic Arts" v-model="area.value">
                    <label for="plastic">Plastic Arts</label>
                </div>
                <div>
                    <input type="radio" name="acting" value="Acting" v-model="area.value">
                    <label for="acting">Acting</label>
                </div>
                <p v-if="!area.isValid">Your must select an area of expertise</p>
        </div>
        <p v-if="!formIsValid">Please correct the errors above before submiting.</p>
        <base-button id="register">Register</base-button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            name: {
                value: '',
                isValid: true
            },
            description: {
                value: '',
                isValid: true
            },
            fee: {
                value: null,
                isValid: true
            },
            area: {
                value: '',
                isValid: true
            }, 
            formIsValid: true
        }
    },

    methods: {
        validateForm() {
            this.formIsValid = true;
            if (this.name.value === '') {
                this.name.isValid = false;
                this.formIsValid = false;
            }
            if (this.description.value === '') {
                this.description.isValid = false;
                this.formIsValid = false;
            }
            if (!this.fee.value || this.fee.value < 0) {
                this.fee.isValid = false;
                this.formIsValid = false;
            }
            if (this.area.value.length === 0 ) {
                this.fee.isValid = false;
                this.formIsValid = false;
            }
        },
        submitForm() {
            this.validateForm();
            if(!this.formIsValid) return;
            const formData = {
                name: this.name.value,
                description: this.description.value,
                fee: this.fee.value,
                area: this.area.value
            }
            this.$emit('save-data', formData);
        },
        clearInpt(input) {
            this[input].isValid = true;
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

.invalid label {
    color: red;
}

.invalid input, 
.invalid textarea {
    border: 1px solid red;
}

p {
    font-size: .8rem;
}

@media screen and (min-width: 800px) {
    form {
        margin: 0;
    }
}
</style>