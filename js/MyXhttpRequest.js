class MyXhttpRequest {
  constructor() {
    this.onload = null;
    this.status = null;
    this.response = null;
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
        this.statusText = "OK";
        console.log("statusText ", this.statusText);

        break;
      case 201:
        this.response.statusText = "Created";
        this.statusText = "Created";
        console.log("statusText ", this.statusText);
        break;
      case 404:
        this.response.statusText = "Not Found";
        this.statusText = "Not Found";
        console.log("statusText ", this.statusText);
        break;
    }
  }

  // Setting the request type and the server object(url).
  open(requestType, url) {
    this.requestType = requestType;
    this.url = url;
    this.fetchCount = 1;
  }

  send(data = null) {
    const message = {
      requestType: this.requestType,
      url: this.url,
      data: data,
      all: false,
      filter: "false",
      xhttp: this.reciveResponse,
    };

    console.log("xhttp is sending ", message, " to the server");

    this.response = NetWork.moveToServer(server, JSON.stringify(message));

    let intervalId = setInterval(() => {
      if (!this.response) {
        return;
      }
      console.log("myXhttpRequest recived this response: ", this.response);

      clearInterval(intervalId);

      this.renderRequestStatus();

      //If and when the server recived the request and respond positive(200).
      //then call the onload callback.
      if (this.onload) {
        this.onload();
      }
    }, 200);
  }
}
