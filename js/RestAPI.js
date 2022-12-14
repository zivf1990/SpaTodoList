class RestAPI {
  static deleteUser(id) {}

  static createNewUser(user) {
    console.log("RestAPI.createNewUser");
    const myXhttpRequest1 = new myXhttpRequest();
    myXhttpRequest1.open("POST", "signup");
    myXhttpRequest1.onload = () => {
      console.log("User created");
    };
    myXhttpRequest1.send(0, user);
  }

  static getAllUsers() {}

  static getUser(id) {
    const xhttp = new myXhttpRequest();
    xhttp.onload = () => {
      const res = xhttp.response;
    };
  }
}
