import axios from 'axios'

const API_URL = "https://3ae519d57c0a.ngrok.io"

class AuthService {
  login(email, password) {
    return axios.post(API_URL + '/tenant/login',{
      email,
      password
    })
    .then(response => {
      if(response.data.accessToken){
        localStorage.setItem("user", JSON.stringify(response.data))
      }

      return response.data;
    });
  }

  logout(){
    localStorage.removeItem("user");
  }

  register(data) {
    return axios.post("/tenant/registration", data);
  }

  getCurrentUser(){
    return JSON.parse(localStorage.getItem('user'))
  }
}

export default new AuthService();
