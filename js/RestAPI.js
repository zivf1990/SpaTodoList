import myXhttpRequest from "./myXhttpRequest.js";

export default class RestAPI {


  

  static deleteUser(id) {}

  static addNewUser(user) {

  }

  static getAllUsers() {}

  static getUser(id) {
    const xhttp = new myXhttpRequest();
    xhttp.onload = () => {
      const res = xhttp.response;
    };
  }
}
