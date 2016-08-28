#!/bin/bash

echo "generate C# files"
protoc Connection.proto Game.proto --csharp_out=../OW-unity/Assets/scripts/proto

echo "generate JS files"
protoc --js_out=import_style=commonjs,binary:protoJS Connection.proto Game.proto

cd protoJS > /dev/null
./npm.sh

echo "browserify & minify connection.js"
browserify Connection_pb.js | minify --js > connection.js

echo "browserify & minify game.js"
browserify Game_pb.js | minify --js > game.js
cd - > /dev/null

echo "copy files"
cp protoJS/connection.js ../servers/serverMM/connection.js
cp protoJS/connection.js ../third/tests/connection.js
cp protoJS/Connection_pb.js ../servers/serverMM/Connection_pb.js

#cp protoJS/game.js ../servers/serverMM/game.js
cp protoJS/game.js ../third/tests/game.js
#cp protoJS/Game_pb.js ../servers/serverMM/Game_pb.js

echo "done !"
