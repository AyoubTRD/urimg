<template>
  <v-container fluid>
    <Waterfall :gutterWidth="15">
      <WaterfallItem :width="300" v-for="image in images" class="mb-4 elevation-1" :key="image.hash">
        <v-lazy>
          <v-img :src="image.link" />
        </v-lazy>
      </WaterfallItem>
    </Waterfall>
  </v-container>
</template>

<script>
  import { Waterfall, WaterfallItem } from "vue2-waterfall"
  import { mapGetters, mapActions } from "vuex"

  export default {
    components: {Waterfall, WaterfallItem},
    name: "GalleryImages",
    computed: mapGetters(["images"]),
    methods: mapActions(["fetchImages"]),
    created() {
      this.fetchImages()
    }
  }
</script>

<style scoped>

</style>