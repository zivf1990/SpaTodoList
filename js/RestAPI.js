import myXhttpRequest from "./myXhttpRequest.js";

export default class RestAPI {
  static deleteUser(id) {}

  static createNewUser(user) {
    const myXhttpRequest = new XMLHttpRequest();
    myXhttpRequest.open("POST", "signup");
    myXhttpRequest.onload = () => {
      console.log("User created");
    };
    myXhttpRequest.send(user);
  }

  static getAllUsers() {}

  static getUser(id) {
    const xhttp = new myXhttpRequest();
    xhttp.onload = () => {
      const res = xhttp.response;
    };
  }
}
