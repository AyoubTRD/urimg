<template>
  <div class="home">
    <Header/>
    <AuthCard v-if="!isLoggedIn"/>
    <UploadForm v-else/>
  </div>
</template>

<script>
  import Header from "../components/Header"
  import AuthCard from "../components/AuthCard";

  import { mapGetters } from "vuex"
  import UploadForm from "../components/UploadForm";

  export default {
    name: "Home",
    components: {
      UploadForm,
      Header, AuthCard
    },
    computed: mapGetters(["isLoggedIn", "username"])
  }
</script>

<style scoped>

</style>