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

var peer = new Peer("server", {host: 'localhost', port: 9000, path: '/'});
peer.on('connection', function(conn) {
  conn.on('data', function(data){
console.log("server receive = " + data);
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
