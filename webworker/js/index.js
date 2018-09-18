var worker = new Worker("../js/worker.js");
//global variable for increment
var numdata = 0
// Receive messages from postMessage() calls in the Worker
worker.onmessage = (evt) => {
	console.log("Message posted from webworker: " + evt.data);
	eventManager[evt.data.callback].call(this, evt.data);
}

// Pass data to the WebWorker
const increment = () => {
	worker.postMessage({
		numdata: numdata,
		event: "increment",
		callback: "incrementCallback"
	});
}
const eventManager = {
	incrementCallback: function (evt) {
		console.log("Increment Callback called with " + evt);
		numdata = evt.numdata;
		document.getElementById("result").innerHTML = numdata;
	}
}