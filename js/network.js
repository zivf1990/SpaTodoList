class NetWork {
  static networkMove(serverDns, request) {
    /// data goes to network
    console.log("request is in the network");
    let serverRespond = serverDns.renderRequest(request);
    /// data made it to client
    return serverRespond;
  }
}
