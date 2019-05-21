#kill the node port used by the server
#killall -9 /usr/bin/node

#start the react app
nohup npm start >> app.log 2>&1 &
#start the server
cd backend; nohup node server.js >> app.log 2>&1 &
