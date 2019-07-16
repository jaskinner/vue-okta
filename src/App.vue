<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/dashboard">Dashboard</router-link>
      (authenticated) |
      <router-link v-if="loggedIn" to="/logout">Log out</router-link>
      <router-link v-if="!loggedIn" to="/login">Log in</router-link>
    </div>

    <template v-if="$route.matched.length">
      <router-view></router-view>
    </template>
    <template v-else>
      <p>You are logged {{ loggedIn ? 'in' : 'out' }}</p>
    </template>
  </div>
</template>

<script>
  import auth from './auth'
  export default {
    data () {
      return {
        loggedIn: auth.loggedIn()
      }
    },
    created () {
      auth.onChange = loggedIn => {
        this.loggedIn = loggedIn
      }
    }
  }
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
