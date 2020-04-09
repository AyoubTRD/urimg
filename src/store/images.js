import imgur from "../api/imgur"

const state = {
  images: []
}

const getters = {
  images: ({images}) => images.map(({link, hash, width, height}) => ({
    link, hash, width, height
  }))
}

const mutations = {
  setImages(state, images) {
    state.images = images
  }
}

const actions = {
  async fetchImages({commit}) {
    const images = await imgur.fetchImages(localStorage.getItem("token"))
    commit("setImages", images)
  },
  async uploadImage(formData) {
    try {
      const res = await imgur.uploadImage(formData, localStorage.getItem("token"))
    }
    catch(e) {
      console.error(e)

    }
  }
}

export default {
  state, getters, mutations, actions
}