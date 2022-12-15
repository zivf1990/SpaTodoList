//Client-Side RestAPI

class RestAPI {
  static createTodo(userId, data) {
    console.log("RestAPI.createTodo");
    const myXhttpRequest1 = new myXhttpRequest();
    myXhttpRequest1.open("POST", "Home/myListAdd");
    myXhttpRequest1.onload = () => {
      console.log("onload()- ", myXhttpRequest1.response);
    };
    myXhttpRequest1.send(userId, data);
    return myXhttpRequest1.response;
  }

  static createNewUser(user) {
    console.log("RestAPI.createNewUser");
    const myXhttpRequest1 = new myXhttpRequest();
    myXhttpRequest1.open("POST", "signup");
    myXhttpRequest1.onload = () => {
      console.log("onload()- ", myXhttpRequest1.response);
    };
    myXhttpRequest1.send(0, user);
    return myXhttpRequest1.response;
  }

  static validateUser(user) {
    console.log("RestAPI.validateUser");
    const myXhttpRequest1 = new myXhttpRequest();
    myXhttpRequest1.open("POST", "signin");
    myXhttpRequest1.onload = () => {
      console.log("onload() User created");
    };
    myXhttpRequest1.send(0, user);

    return myXhttpRequest1.response;
  }

  static getAllUsers() {}

  static getUser(id) {
    const myXhttpRequest1 = new myXhttpRequest();
    myXhttpRequest1.open("GET", "users/user" + id);
    myXhttpRequest1.onload = () => {
      console.log("onload() Got user: ");
    };
    myXhttpRequest1.send(0, id);

    return myXhttpRequest1.response;
  }
}

console.log(RestAPI.getUser(1))