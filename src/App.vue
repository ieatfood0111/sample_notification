<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App" />
</template>

<script>
import { getToken } from 'firebase/messaging';
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  async mounted() {
    console.log('Firebase cloud messaging object', this.$messaging)
    const token = await getToken(this.$messaging, {
      vapidKey: 'BIIYxJjV9JP_T1Nlis87ESEr_SUsqRPplvhH9Vm7JCHL1GCPyLFVKTHw0EHTn8Mgv8kNkeSm76JSqeAT6iID-wY'
    })
    console.log(token)
  },
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
