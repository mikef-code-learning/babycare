<template>
  <div id="app">
    <Login v-if="!authed"></Login>
    <MainInterface v-if="authed"></MainInterface>
  </div>
</template>

<script>
import Login from './components/Login.vue'
import MainInterface from './components/MainInterface.vue'

export default {
  name: 'app',
  components: {
    Login,
    MainInterface
  },
  data() {
    return {
      authed: this.$store.state.authed
    }
  },
  created() {
    //eslint-disable-next-line
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
