<template>
  <div class="account-info">
    <Hero
      msg="You're logged in!"
      desc="That's right, you have credentials and you've successfully logged in. This page could have sensitive info but it doesn't."
    ></Hero>
  </div>
</template>

<script>
import Hero from "@/components/Hero";

export default {
  name: "AccountInfo",
  components: {
    Hero
  }
};
</script>

<style scoped></style>
