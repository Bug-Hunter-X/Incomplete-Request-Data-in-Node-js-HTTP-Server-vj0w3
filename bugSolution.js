```javascript
const http = require('http');

const server = http.createServer((req, res) => {
  let body = '';
  req.on('data', (chunk) => {
    body += chunk.toString();
  });

  req.on('end', () => {
    console.log(`Received body: ${body}`);
    res.end('OK');
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
```