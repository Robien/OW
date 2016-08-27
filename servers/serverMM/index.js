window = global
window.BlobBuilder = require("BlobBuilder")
location = {protocol: 'http'}

BinaryPack = require("binary-pack")
XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var wrtc = require('electron-webrtc')()
//var Peer = require('peerjs') //should not be include directly

RTCPeerConnection = wrtc.RTCPeerConnection;
RTCSessionDescription = wrtc.RTCSessionDescription;
RTCIceCandidate = wrtc.RTCIceCandidate;

WebSocket = require('ws')
require('./exports.js');

//require('./connection.js');
require('./Connection_pb.js');


var waitingPeer = "";


var peer = new Peer("server", {host: '192.168.1.23', port: 9000, path: '/'});
peer.on('connection', function(conn)
{
	conn.on('data', function(data)
	{
		console.log("server receive = " + data);
		buffStr = data.split(",");
		console.log("server receive array = " + buffStr[0] + " - " + buffStr[1]);

		var messageP = new proto.Connection.ConnectionMessageClient();
		messageP = proto.Connection.ConnectionMessageClient.deserializeBinary(buffStr);

		console.log("server receive message = " + messageP);

		if (waitingPeer == "")
		{
			waitingPeer = messageP.getStartmatchmaking().getMyname()
			sendAckMM(messageP.getStartmatchmaking().getMyname());
		}
		else
		{
			//send the name of the waiting peer to the new peer and the new peer names to the waiting peer

			sendMF(messageP.getStartmatchmaking().getMyname());
			waitingPeer = "";
		}



 	 });
});

function sendAckMM(peerName)
{
	console.log("peer start waiting : " + peerName);
	var conn = peer.connect(peerName);
	conn.serialization='none'
	conn.on('open', function()
	{
		var message = new proto.Connection.ConnectionMessageServer();

		message.setType(proto.Connection.ConnectionMessageServer.ConnectionMessageTypeServer.ACK_MATCH_MAKING);

		var smm = new proto.Connection.ACKMM();

		smm.setIsok(true);

		message.setAckmm(smm);

		// Serializes to a UInt8Array.
		bytes = message.serializeBinary();
		//console.log('message len :' + bytes.length);
		//console.log('message :' + bytes.toString());

		conn.send(bytes.join());
	});
}

function sendMF(peerName)
{
	console.log("match found : " + peerName + " and " + waitingPeer);
	sendMFToPeer(peerName, waitingPeer, false);
	sendMFToPeer(waitingPeer, peerName, true);
}

function sendMFToPeer(peerName, other, waiting)
{
	var conn = peer.connect(peerName);
	conn.serialization='none'
	conn.on('open', function()
	{
		var message = new proto.Connection.ConnectionMessageServer();

		message.setType(proto.Connection.ConnectionMessageServer.ConnectionMessageTypeServer.MATCH_FOUND);

		var smm = new proto.Connection.StartGame();

		smm.setIsmain(waiting);

		smm.setChallengedname(other);

		message.setStartgame(smm);

		// Serializes to a UInt8Array.
		bytes = message.serializeBinary();
		//console.log('message len :' + bytes.length);
		//console.log('message :' + bytes.toString());

		conn.send(bytes.join());
	});
}

/*
var peer2 = new Peer("toi", {host: 'localhost', port: 9000, path: '/'});
peer2.on('connection', function(conn) {
  conn.on('data', function(data){
console.log("peer2 receive = " + data);
  });
});

var conn = peer.connect("toi");
conn.serialization='none'
conn.on('open', function(){
  conn.send('hi!');
});




*/



//var conn2 = peer2.connect("moi");
//conn2.serialization='none'
//conn2.on('open', function(){
//  conn2.send('hi!');
//});




//var peer = new Peer(
//...
//}
//)

//var conn=peer.connect('id')
//conn.send('hello from nodejs!')
