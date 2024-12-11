```javascript
const http = require('http');

const server = http.createServer((req, res) => {
  // This is a common mistake: not handling the 'end' event
  req.on('data', (chunk) => {
    console.log(`Received chunk: ${chunk.toString()}`);
  });

  // Missing this event handling will lead to incomplete request data.
  // req.on('end', () => {
  //   console.log('Request body received completely.');
  //   res.end('OK');
  // });
  res.end('OK');
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
```