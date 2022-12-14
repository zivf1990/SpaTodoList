class RestAPI {
  static createTodo(todo) {
    const myXhttpRequest1 = new myXhttpRequest();
    myXhttpRequest1.open("POST", "users/myListAdd");
    myXhttpRequest1.onload = () => {
      console.log(myXhttpRequest1);
    };
    myXhttpRequest1.send(0, todo);

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
    const xhttp = new myXhttpRequest();
    xhttp.onload = () => {
      const res = xhttp.response;
    };
  }
}
