<template>
  <div class="about">
    <Hero
            msg="Here's the scoop..."
            desc="All of this is dynamic. I could just put it all in a json file somewhere but I didn't. Github repo can be accessed below."
            link="https://github.com/jaskinner/vue-okta"
            linkDesc="Github Repo"
    ></Hero>
  </div>
</template>

<script>
  import Hero from "@/components/Hero"

  export default {
    name: "about",
    components: {
      Hero
    }
  }
</script>
