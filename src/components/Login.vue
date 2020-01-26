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
                <b-form-input v-model="pword" :type="password" placeholder="Password"></b-form-input>
            </div>
            <div class="col-3"></div>
        </div>
        <div class="form-row justify-content-around mt-4">
            <b-button variant="primary" @click="login">Login</b-button>
        </div>
        <div class="form-row justify-content-around mt-4">
            <b-button variant="info" @click="register">Register</b-button>
        </div>
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
        //eslint-disable-next-line
        Register
    },
    methods: {
        login() {

        },
        register() {
            this.$swal.fire({
                html: '<register></register>'
            })
        }
    },
    mounted() {
    }
}
</script>

<style scoped>

</style>