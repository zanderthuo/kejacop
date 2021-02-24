import axios from 'axios'

export default axios.create({
  baseURL: "https://5b2ff5f691fb.ngrok.io",
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin" : "*"
  }
});
