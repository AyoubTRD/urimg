<template>
  <v-container>
    <v-card max-width="500" class="mx-auto" color="primary" dark>
      <v-card-title class="display-2">Welcome!</v-card-title>
      <v-card-subtitle class="subtitle-1">Login to get started</v-card-subtitle>
      <v-card-actions>
        <v-btn color="white" light @click="login">Login</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
  import {mapActions} from "vuex";

  export default {
    methods: mapActions(["login"]),
    name: "AuthCard"
  }
</script>

<style scoped>

</style>