<template>
    <div class="container">
        <div class="row justify-content-center">
            <b-form-input v-model="email" placeholder="Your EMail Address" type="email" class="mt-1"></b-form-input>
            <b-form-input v-model="username" placeholder="Desired Username" class="mt-1"></b-form-input>
            <b-form-input v-model="password" placeholder="Desired Password - 8+ characters" type="password" class="mt-1"></b-form-input>
            <b-form-input v-model="passwordConf" placeholder="Retype Password" type="password" class="mt-1"></b-form-input>
        </div>
        <hr>
        <div class="row mt-3 justify-content-center">
            <h5>About You</h5>
            <b-form-input v-model="firstName" placeholder="Your First Name" class="mt-1"></b-form-input>
            <b-form-input v-model="middleName" placeholder="Your Middle Name" class="mt-1"></b-form-input>
            <b-form-input v-model="lastName" placeholder="Your Last Name" class="mt-1"></b-form-input>
            <b-form-select v-model="parentTypeSelected" :options="parentTypes" class="mt-1"></b-form-select>
            <b-form-select v-model="measureTypeSelected" :options="measureTypes" class="mt-1"></b-form-select>
        </div>
    </div>
</template>

<script>
import Axios from 'axios'

export default {
    name: 'Register',
    data() {
        return {
            username: null,
            password: null,
            passwordConf: null,
            email: null,
            firstName: null,
            middleName: null,
            lastName: null,
            parentTypeSelected: null,
            parentTypes: [
                { value: null, text: "What is your relationship to the baby?"},
                { value: 'Mother', text: "I am the baby's Mother."},
                { value: 'Father', text: "I am the baby's Father."},
                { value: 'Guardian', text: "I am the baby's legal Guardian."},
                { value: 'Other', text: "I have some other unspecified relationship to the baby."},
            ],
            measureTypeSelected: null,
            measureTypes: [
                { value: null, text: 'What measurement units do you prefer to use?'},
                { value: 'Imperial (USA)', text: 'Imperial Units - inches, feet, pounds, etc.'},
                { value: 'Metric', text: 'Metric Units - kilograms, centimeters, etc.'},
            ],
        }
    },
    computed: {
        requiredFieldsFilled() {
            if (
                (this.username && this.username.length > 0) && 
                (this.password && this.password.length > 8) && 
                (this.password === this.passwordConf) && 
                (this.firstName && this.firstName.length > 0) && 
                (this.lastName && this.lastName.length > 0) && 
                (this.email && this.email.length > 0) && 
                (this.parentTypeSelected) && 
                (this.measureTypeSelected)
            ) {
                return true
            } else {
                return false
            }
        }
    },
    methods: {
        /* eslint-disable */
        registration() {
            let registrationObject = {}
            registrationObject.username = this.username
            registrationObject.pword = this.password
            registrationObject.first_name = this.firstName
            registrationObject.middle_name = this.middleName
            registrationObject.last_name = this.lastName
            registrationObject.email = this.email
            registrationObject.parent_type = this.parentTypeSelected
            registrationObject.unit_type = this.measureTypeSelected
            console.log('registrationObject computed!')
            console.log(registrationObject)
            if (this.requiredFieldsFilled) {
                console.log('requiredFieldsFilled!')
                console.log('Axios:')
                console.log(Axios)
                Axios.post('http://localhost:3120/register', registrationObject)
                    /* eslint-disable */
                    .then(response => {
                        console.log('response:')
                        console.log(response)
                    })
                    .catch(error => {
                        console.log('Axios error!')
                        console.log(error)
                    })
            } else {
                console.log('requiredFields NOT filled!  No POST.')
            }
        }
    },
    mounted() {
    }
}
</script>

<style scoped>

</style>