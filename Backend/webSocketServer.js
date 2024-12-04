const WebSocket = require('ws');
const http = require('http');

function startWebSocketServer() {
  const port = 8080;

  const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World');
  });

  const wss = new WebSocket.Server({ server });

  wss.on('connection', function connection(ws) {
    console.log('Un nouveau utilisateur est connecté');
    ws.send('Bienvenue');

    ws.on('error', function(error) {
      console.error('Une erreur s\'est produite :', error);
    });

    ws.on('message', function message(data) {
      console.log('Message reçu:', data);
      ws.send('Message reçu: ' + data);
    });
  });

  server.listen(port, () => {
    console.log(`Serveur WebSocket en écoute sur le port ${port}`);
  });
}

module.exports = startWebSocketServer;