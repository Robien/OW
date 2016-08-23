require("./Connection_pb.js");

var message = new proto.Connection.ConnectionMessageClient();

message.setType(proto.Connection.ConnectionMessageClient.ConnectionMessageTypeClient.START_MATCH_MAKING);

var smm = new proto.Connection.StartMatchMaking();

smm.setVersionmajor(0);
smm.setVersionminor(0);
smm.setElo(0);
smm.setMyname("pomme");
smm.setChallengedname("");

message.setStartmatchmaking(smm);

// Serializes to a UInt8Array.
bytes = message.serializeBinary();
console.log('message len :' + bytes.length);
console.log('message :' + bytes.toString());
//var message2 = MyMessage.deserializeBinary(bytes);
