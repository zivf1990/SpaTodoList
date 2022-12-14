class Server {
  constructor() {
    this.response = {};
  }
  //dburl is the API URL
  //users/1/todo/todos/1

  renderRequest(messageObj) {
    messageObj = JSON.parse(messageObj);
    console.log(messageObj);
    console.log("Server recived: " + messageObj);
    this.response.data = undefined;

    //GET USER DELETE/////////////////////////////
    // if (messageObj.requestType === "GET" && messageObj.data == undefined) {
    //   if (DataBaseAPI.getUserObj(messageObj.id)) {
    //     this.response.data = DataBaseAPI.getUserObj(messageObj.id);
    //     this.response.status = 200;
    //   }

    //SIGN UP/////////////////////////////
    // }

    if (messageObj.requestType === "POST" && messageObj.url === "signup") {
      const newUserId = DataBaseAPI.createNewUser(messageObj.data);
      if (newUserId) {
        this.response.status = 201;
        this.response.id = newUserId;
      } else {
        this.response.status = 404;
        this.response.id = null;
      }
    }

    //Log In Validation///////////////////////////////////
    else if (messageObj.requestType === "POST" && messageObj.url === "signin") {
      let userObj = DataBaseAPI.getUserObj(messageObj.data.username);
      if (userObj) {
        console.log("login");
        if (userObj.password === messageObj.data.password) {
          this.response.status = 200;
          this.response.id = userObj.id;
          this.response.data = userObj.todosArr;
        }
      } else {
        this.response.status = 404;
        this.response.id = null;
      }
    }
    /////looking for a specific user by url users/userx
    else if (
      messageObj.requestType === "GET" &&
      messageObj.url.match(/\/user[0-9]*$/)
    ) {
      let userId = messageObj.url.match(/\/user[0-9]*$/)[0].substring(5);
      console.log(userId);
      this.response.data = DataBaseAPI.getUserObj(parseInt(userId));
    }

    //////////////add a li to todo//////////////////////////

    ////////////if something is wrong with the request and none of the ifs were called response gets 404 automatically
    else {
      this.response.status = 404;
    }
    console.log("server :", this.response);
    return this.response;
  }
}
server = new Server();

let regex = "users/user20";
let test = regex.match(/\/user[0-9]*$/)[0];

let obj = {
  data: {
    username: "ziv",
    password: "1234",
  },
  requestType: "GET",
  url: "users/user1",
};
console.log(server.renderRequest(JSON.stringify(obj)));
