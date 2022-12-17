class NetWork {
  static moveToServer(serverDns, request) {
    /// data goes to network
    console.log(
      "Network recived a message from a client: ",
      JSON.parse(request)
    );
    /// data made it to client
    return serverDns.renderRequest(request);
  }
}
