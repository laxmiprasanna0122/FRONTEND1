import axios from "axios";
const API_URL = "http://localhost:8083/user/";

class AuthService {
  login(mail, password) {
    return axios
      .post(API_URL + "login", {
        mail,
        password
      })
      .then(response => {
        if (response.data.id) {
        

          localStorage.setItem("id", JSON.stringify(response.data.id));
          localStorage.setItem("email", JSON.stringify(response.data.email));
          

        }
        return response.data;
      });
  }
  logout() {
    localStorage.removeItem("id");

  }

  getCurrentUserId() {
    return JSON.parse(localStorage.getItem('id'));
  }
 
 

  islogged(){
    return JSON.parse(localStorage.getItem('id'))!=undefined;
  }
}
export default new AuthService();

