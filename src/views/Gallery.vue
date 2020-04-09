<template>
  <fragment>
    <Header/>
    <GalleryImages v-if="isLoggedIn"/>
    <AuthCard v-else/>
  </fragment>
</template>

<script>
  import Header from "../components/Header";
  import GalleryImages from "../components/GalleryImages";

  import { mapGetters } from "vuex"
  import AuthCard from "../components/AuthCard";

  export default {
    name: "Gallery",
    components: {AuthCard, GalleryImages, Header},
    computed: mapGetters(["isLoggedIn"])
  }
</script>

<style scoped>

</style>