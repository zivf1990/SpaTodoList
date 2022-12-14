class myXhttpRequest {
  constructor() {
    this.onload = undefined;
    this.status = 0;
    this.statusText = "";
    this.responseText = "";
    this.response = undefined;
    this.responseType = "text";
    this.timeout = 0;
  }

  // Setting the request type and the server object(url).
  open(requestType, url) {
    this.requestType = requestType;
    this.serverAddress = url;
    this.fetchCount = 1;
  }

  // Pass through a callback function that will be called when the server response is positive(200)
  set onload(callback) {
    this.onload = callback;
  }

  send(id = 0, data = undefined) {
    console.log(`fetching...${this.fetchCount++}`);

    const obj = {
      requestType: this.requestType,
      id: id,
      data: data,
      filter: false,
      filterBy: undefined,
    };

    //If and when the server recived the request and respond positive(200).
    //then call the onload callback.
    const response = this.serverAddress.reciveRequest(JSON.parse(obj));

    if (response) {
      this.status = 200;
      this.statusText = "OK";

      if (this.requestType === "json") {
        this.response = JSON.parse(response);
      } else {
        this.response = response;
      }

      if (this.requestType === "text") {
        this.responseText = response;
      }

      if (this.onload) {
        this.onload();
      }
      //Response was 400(false/error) from the server.
    } else {
      this.status = 400;
      this.statusText = "Not Found";
    }
  }
}
