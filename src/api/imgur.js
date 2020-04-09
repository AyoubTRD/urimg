import axios from "axios"

const CLIENT_ID = "9de44a5d63bc09b";
const CLIENT_SECRET = "c34a6df21ab257dd46100c71240f160cb2d36801"

const baseURL = "https://api.imgur.com"

import qs from "qs"

export default {
  login() {
    const params = {
      client_id: CLIENT_ID,
      response_type: "token"
    }
    window.location = `${baseURL}/oauth2/authorize?${qs.stringify(params)}`
  },
  async fetchImages(token) {
    const res = await axios.get(`${baseURL}/3/account/me/images`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return res.data.data
  },
  async uploadImage(formData, token) {
    return await axios.post(`${baseURL}/3/image`, formData, {
      headers: {
        Authorization: `Client-ID ${CLIENT_ID}`
      }
    })
  }
}