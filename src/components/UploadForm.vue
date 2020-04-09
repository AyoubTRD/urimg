<template>
  <v-container>
    <v-form @submit="handleSubmit">
      <v-file-input color="primary" prepend-icon="image" id="file" placeholder="Select an image to upload" accept="image/jpeg, image/jpg, image/png" chips />
      <v-btn color="primary" type="submit">Submit</v-btn>
    </v-form>
  </v-container>
</template>

<script>
  import {mapActions} from "vuex"
  export default {
    name: "UploadForm",
    methods: {
      ...mapActions(["uploadImage"]),
      handleSubmit(e) {
        e.preventDefault()
        const formData = new FormData()
        console.log(e.target)
        formData.append("file", e.target.file.files[0])
        this.uploadImage(formData)
      }
    }
  }
</script>

<style scoped>

</style>