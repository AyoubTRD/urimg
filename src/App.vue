<template>
  <v-app style="">
    <v-content>
      <router-view></router-view>
    </v-content>
    <v-btn fab fixed right bottom @click="switchTheme" color="primary">
      <v-icon>{{ !$vuetify.theme.dark ? "brightness_7" : "brightness_4" }}</v-icon>
    </v-btn>
  </v-app>
</template>

<script>
import Header from "./components/Header";

export default {
  name: "App",
  components: { Header },
  methods: {
    switchTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    }
  }
};
</script>

<style></style>
