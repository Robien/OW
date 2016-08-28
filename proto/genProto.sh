protoc Connection.proto Game.proto --csharp_out=../OW-unity/Assets/scripts/proto
protoc --js_out=import_style=commonjs,binary:protoJS Connection.proto Game.proto
cd protoJS
./npm.sh
browserify Connection_pb.js | minify --js > connection.js
browserify Game_pb.js | minify --js > game.js
cd -
