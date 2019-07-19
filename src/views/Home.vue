<template>
  <div class="home">
    <Hero
      msg="Welcome to my Vue-Okta Demo!"
      desc="Thanks for checking it out. It's built with Vue.js v3 and Okta authentication."
      :link="loggedIn ? '/account' : '/login'"
      :linkDesc="loggedIn ? 'Go to Account' : 'Log In'"
    ></Hero>
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from "@/components/Hero.vue";
import auth from "../auth";

export default {
  name: "home",
  components: {
    Hero
  },
  data() {
    return {
      loggedIn: auth.loggedIn()
    };
  }
};
</script>
