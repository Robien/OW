window = global
window.BlobBuilder = require("BlobBuilder")
location = {protocol: 'http'}

BinaryPack = require("binary-pack")
XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var wrtc = require('electron-webrtc')()
//var Peer = require('peerjs')

RTCPeerConnection = wrtc.RTCPeerConnection;
RTCSessionDescription = wrtc.RTCSessionDescription;
RTCIceCandidate = wrtc.RTCIceCandidate;

WebSocket = require('ws')
require('./exports.js');

require('./connection.js');


var waitingPeer = "";


var peer = new Peer("server", {host: '192.168.1.23', port: 9000, path: '/'});
peer.on('connection', function(conn) {
  conn.on('data', function(data){
console.log("server receive = " + data);
 buffStr = data.split(",");

var message = new proto.Connection.ConnectionMessageClient();

message = proto.Connection.ConnectionMessageClient.deserializeBinary(buffStr);

if (waitingPeer == "")
{
	waitingPeer = message.getStartmatchmaking().getMyname()
console.log("peer start waiting : " + message.getStartmatchmmaking().getMyname());
}
else
{
//send the name of the waiting peer to the new peer and the new peer names to the waiting peer

console.log("match starting with " + waitingPeer + " and " + message.getStartmatchmmaking().getMyname());
waitingPeer = "";
}



  });
});


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
