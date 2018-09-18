var eventManager={
    "increment":function (evt) {
        console.log("In Increment worker")
        evt.numdata++
        postMessage({numdata:evt.numdata,callback:evt.callback});
    }

}
onmessage = (evt) => {
    console.log("Got worker message"+evt);
    eventManager[evt.data.event].call(this,evt.data);
};