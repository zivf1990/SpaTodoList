class Server {
  constructor() {
    this.response = {};
  }
  //dburl is the API URL
  //users/1/todo/todos/1

  renderRequest(messageObj) {
    messageObj = JSON.parse(messageObj);
    console.log("Server recived: " + messageObj);
    this.response.data = undefined;

    //Register/////////////////////////////
    if (messageObj.requestType === "GET" && messageObj.data == undefined) {
      if (DataBaseAPI.getUserObj(messageObj.id)) {
        this.response.data = DataBaseAPI.getUserObj(messageObj.id);
        this.response.status = 200;
      }
    } else if (
      messageObj.requestType === "POST" &&
      messageObj.url === "signup"
    ) {
      if (DataBaseAPI.createNewUser(messageObj.data)) {
        this.response.status = 201;
      } else {
        this.response.status = 404;
      }
    }

    //Log In Validation///////////////////////////////////
    else if (messageObj.requestType === "POST" && messageObj.url === "signin") {
      let userObj = DataBaseAPI.getUserObj(messageObj.data.username);
      if (userObj) {
        if (userObj.password === messageObj.data.password) {
          this.response.status = 200;
          return "logged in";
        } else {
          this.response.status = 404;
          return "not logged in";
        }
      }
    } else {
      this.response.status = 404;
    }
    console.log(`Server response: ` + this.response);
    return this.response;
  }
}
server = new Server();
