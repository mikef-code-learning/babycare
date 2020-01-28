<template>
    <div class="container">
        <div class="form-row justify-content-center">
            <div class="col-3"></div>
            <div class="col-6">
                <b-form-input v-model="username" placeholder="Username"></b-form-input>
            </div>
            <div class="col-3"></div>
        </div>
        <div class="form-row justify-content-center mt-2">
            <div class="col-3"></div>
            <div class="col-6">
                <b-form-input v-model="pword" type="password" placeholder="Password"></b-form-input>
            </div>
            <div class="col-3"></div>
        </div>
        <div class="form-row justify-content-around mt-4">
            <b-button variant="primary" @click="login">Login</b-button>
        </div>
        <div class="form-row justify-content-around mt-4">
            <b-button variant="info" @click="register">Register</b-button>
        </div>
        <!-- Show Register component as modal -->
        <b-modal 
            id="registrationModal"
            title="Register Your Account"
            ref="registrationModal"
            @ok="registerSubmit"
        >
            <register ref="registrationComponent"></register>
        </b-modal>
    </div>
</template>

<script>
import Register from './Register.vue'

export default {
    name: 'Login',
    data() {
        return {
            username: '',
            pword: '',
        }
    },
    components: {
        Register
    },
    methods: {
        login() {

        },
        register() {
            this.$bvModal.show('registrationModal')
        },
        registerSubmit() {
            this.$refs.registrationComponent.registration()
        }
    },
    mounted() {
        this.$bvModal.hide('registrationModal')
    }
}
</script>

<style scoped>

</style>