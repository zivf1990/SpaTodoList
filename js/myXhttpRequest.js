export default class myXhttpRequest {
  constructor() {
    this.onload = undefined;
    this.status = undefined;
    this.response = undefined;
    this.statusText = "";
    this.responseText = "";
    this.response = undefined;
    this.responseType = "text";
    this.timeout = 2000;
  }

  renderRequestStatus(status) {
    switch (status) {
      case 200:
        this.responseText = "OK";
        break;
      case 201:
        this.responseText = "Created";
        break;
      case 404:
        this.responseText = "Not Found";
        break;
    }
  }

  // {
  //   status: 201,
  //   data: undefined,
  // }

  //reciveResponse from the server.
  reciveResponse(response) {
    const serverResponse = JSON.parse(response);
    this.response = JSON.stringify(serverResponse.data);
    this.status = serverResponse.status;
    this.renderRequestStatus(serverResponse.status);
  }

  // Setting the request type and the server object(url).
  open(requestType, url) {
    this.requestType = requestType;
    this.url = url;
    this.fetchCount = 1;
  }

  // Pass through a callback function that will be called when the server response is positive(200)
  set onload(callback) {
    this.onload = callback;
  }

  // url = "signin"
  // url = "signup"

  send(id = 0, data = undefined) {
    console.log(`fetching...${this.fetchCount++}`);

    const message = {
      requestType: this.requestType,
      //id is the username (not the database id
      id: id,
      url: this.url,
      data: data,
      all: false,
      filter: "false",
      xhttp: this,
    };

    const response = server.renderRequest(JSON.stringify(message));

    let intervalId = setInterval(() => {
      if (!this.status) {
        return;
      }

      clearInterval(intervalId);

      if (this.responseType === "json") {
        this.response = JSON.parse(response);
      } else {
        this.response = response;
      }

      if (this.responseType === "text") {
        this.responseText = response;
      }

      //If and when the server recived the request and respond positive(200).
      //then call the onload callback.
      if (this.onload) {
        this.onload();
      }
    }, 100);
  }
}
