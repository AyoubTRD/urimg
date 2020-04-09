<template>
  <div class="header">

    <v-app-bar class="mb-md-5 mb-sm-2">
      <router-link to="/" >
        <v-toolbar-title class="text-uppercase title" dark>
          <span class="font-weight-light grey--text">UR</span>
          <span class="primary--text">Images</span>
        </v-toolbar-title>
      </router-link>
      <v-spacer />
      <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = !drawer"/>
      <v-btn color="primary" class="hidden-sm-and-down" text v-if="!isLoggedIn" @click="login">Login</v-btn>
      <fragment v-else>
        <v-btn class="mx-1 hidden-sm-and-down" color="primary" text to="/gallery" active-class=".">Gallery</v-btn>
        <v-btn class="mx-1 hidden-sm-and-down" color="primary" text to="/" active-class=".">Upload</v-btn>
        <v-btn class="mx-1 hidden-sm-and-down" color="error" @click="dialog = true">
          <span>Logout</span>
          <v-icon right>exit_to_app</v-icon>
        </v-btn>
        <v-dialog max-width="380" v-model="dialog">
          <v-card>
            <v-card-title class="title">Are you sure you want to log out?</v-card-title>
            <v-card-actions>
              <v-btn color="error" text @click="cLogout">logout</v-btn>
              <v-btn color="primary" text @click="dialog = false">Cancel</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </fragment>

    </v-app-bar>
    <v-navigation-drawer color="primary" dark app right v-model="drawer">
      <v-list v-if="!isLoggedIn">
        <v-list-item-group>
          <v-list-item @click="login">
            <v-list-item-title>Login</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <v-list v-else>
        <v-list-item>
          <v-list-item-title class="headline text-capitalize">{{username}}</v-list-item-title>
        </v-list-item>
        <v-divider/>
        <v-list-item-group class="mt-3">
          <v-list-item to="/gallery">
            <v-list-item-icon><v-icon>collections</v-icon></v-list-item-icon>
            <v-list-item-title>Gallery</v-list-item-title>
          </v-list-item>
          <v-list-item to="/">
            <v-list-item-icon><v-icon>publish</v-icon></v-list-item-icon>
            <v-list-item-title>Upload</v-list-item-title>
          </v-list-item>
          <v-list-item @click="dialog = true">
            <v-list-item-icon><v-icon>exit_to_app</v-icon></v-list-item-icon>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from "vuex"

  export default {
    name: "Header",
    methods: {
      ...mapActions(["login", "logout"]),
      cLogout() {
        this.dialog = false
        this.logout()
      }
    },
    computed: mapGetters(["isLoggedIn", "username"]),
    data() {
      return {
        dialog: false,
        drawer: false
      }
    }
  };
</script>

<style>
  a {
    color: inherit;
    text-decoration: none;
  }
</style>