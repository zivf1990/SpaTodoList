class myXhttpRequest{

    open(requestType, url){
        this.requestType = requestType;
        this.serverAddress = url;
    }

    set onload(callback){

    }

    send(){
      this.serverAddress.reciveRequest(this.requestType, mess)
    }


    {    const xhttp = new XMLHttpRequest();
        xhttp.open("GET", url);
        xhttp.responseType = "json";
    
        xhttp.ontimeout = 20;
        xhttp.onload = () => {
          console.log(`fetching...${fetchCount++}`);
          const res = xhttp.response;
          // console.log(res);
    
          results.push(...res.results);
          // res.results.forEach((obj) => results.push(obj));
    
          if (res.next) fetchNextPage(res.next);
    
          if (!res.next) {
            console.log("finished");
            addId(results);
            localStorage.setItem(key, JSON.stringify(results));
          }
        }}
}