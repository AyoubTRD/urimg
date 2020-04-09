<template>
  <div class="auth">
    <Header/>
    <v-container class="text-center">
      <v-progress-circular indeterminate color="primary" />
    </v-container>
  </div>
</template>

<script>
  import { mapActions } from "vuex"
  import Header from "../components/Header";

  export default {
    name: "AuthHandler",
    components: {Header},
    methods: mapActions(["finalizeLogin"]),
    created() {
      this.finalizeLogin()
      this.$router.push("/")
    }
  }
</script>

<style scoped>

</style>