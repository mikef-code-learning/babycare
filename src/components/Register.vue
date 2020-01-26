<template>
    <div class="container">
        <b-card
            title="Register"
        >
            <b-card-body>
                <b-form-input v-model="username" placeholder="Desired Username"></b-form-input>
                <b-form-input v-model="password" placeholder="Desired Password" :type="password"></b-form-input>
                <b-form-input v-model="email" placeholder="Your EMail Address" :type="email"></b-form-input>
                <b-form-input v-model="firstName" placeholder="Your First Name"></b-form-input>
                <b-form-input v-model="middleName" placeholder="Your Middle Name"></b-form-input>
                <b-form-input v-model="lastName" placeholder="Your Last Name"></b-form-input>
                <b-form-input v-model="parentTypeSelected"></b-form-input>
                <b-form-input v-model="measureTypeSelected"></b-form-input>
            </b-card-body>
        </b-card>
    </div>
</template>

<script>
export default {
    name: 'Register',
    data() {
        return {
            username: '',
            password: '',
            email: '',
            firstName: '',
            middleName: '',
            lastName: '',
            parentTypeSelected: null,
            parentTypes: [
                { value: null, text: "What is your relationship to the baby you'll be utilizing this app for?"},
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
    methods: {
    },
    mounted() {
    }
}
</script>

<style scoped>

</style>