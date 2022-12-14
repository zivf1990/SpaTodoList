class myXhttpRequest {
  constructor() {
    this.onload = undefined;
    this.status = undefined;
    this.response = undefined;
    this.statusText = "";
    this.responseType = "text";
    this.timeout = 2000;
  }

  renderRequestStatus() {
    this.status = this.response.status;
    console.log("renderRequestStatus", this.status);
    switch (this.status) {
      case 200:
        this.response.statusText = "OK";
        break;
      case 201:
        this.response.statusText = "Created";
        break;
      case 404:
        this.response.statusText = "Not Found";
        break;
    }
    console.log("renderRequestStatus " + this.statusText);
  }

  // {
  //   status: 201,
  //   data: undefined,
  // }

  //reciveResponse from the server.
  // reciveResponse(response) {
  //   const serverResponse = response;
  //   this.response = serverResponse.data;
  //   this.status = serverResponse.status;
  //   this.renderRequestStatus(serverResponse.status);
  //   console.log(this.statusText);
  // }

  // Setting the request type and the server object(url).
  open(requestType, url) {
    this.requestType = requestType;
    this.url = url;
    this.fetchCount = 1;
  }

  // Pass through a callback function that will be called when the server response is positive(200)
  // set onload(callback) {
  //   this.onload = callback;
  // }

  // url = "signin"
  // url = "signup"

  send(id = 0, data = undefined) {
    console.log(`xhttp is fetching...${this.fetchCount++}`);

    const message = {
      requestType: this.requestType,
      //id is the username (not the database id
      id: id,
      url: this.url,
      data: data,
      all: false,
      filter: "false",
      xhttp: this.reciveResponse,
    };

    console.log(`xhttp is sending ${message} to the server`);

    this.response = server.renderRequest(JSON.stringify(message));
    console.log("myXhttpRequest", this.response);

    let intervalId = setInterval(() => {
      if (!this.response) {
        return;
      }

      clearInterval(intervalId);

      this.renderRequestStatus();

      // console.log(this.response);

      // if (this.responseType === "json") {
      //   this.response = JSON.parse(this.response);
      // }

      //If and when the server recived the request and respond positive(200).
      //then call the onload callback.
      if (this.onload) {
        this.onload();
      }
    }, 100);
  }
}
