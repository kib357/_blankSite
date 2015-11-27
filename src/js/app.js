require("../styles/app.less");
require("file?name=index.html!../index.html");
require("file?name=CNAME!../CNAME");
require("file?name=favicon.ico!../favicon.ico");

var wsUrl = (location.protocol === 'https:' ? 'wss' : 'ws') + '://' + location.host;
var wsClient = null;

var connect = function () {
	wsClient = new WebSocket(wsUrl);
	wsClient.onmessage = function () {
		location.reload();
	};
	wsClient.onclose = function () {
		setTimeout(function () {
			if (wsClient && wsClient.readyState === 3) { //3-CLOSED
				connect();
			}
		}, (Math.random() * 2000 + 2000));
	}
}
connect();
