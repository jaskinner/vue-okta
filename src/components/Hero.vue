<template>
  <div class="jumbotron">
    <h1 class="display-4">{{ msg }}</h1>
    <p class="lead">{{ desc }}</p>
    <hr class="my-4" />
    <p>
      This site uses Okta with a dev account. To get your own login credentials,
      shoot me <a href="mailto:jonathan.skinner@cbs.com">an email</a>.
    </p>
    <a v-if="link" class="btn btn-primary btn-lg" :href="link" role="button">{{
      linkDesc
    }}</a>
  </div>
</template>

<script>
export default {
  name: "Hero",
  props: {
    msg: String,
    desc: String,
    link: URL,
    linkDesc: String
  }
};
</script>

<style scoped></style>
