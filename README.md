# Incomplete Request Data in Node.js HTTP Server

This repository demonstrates a common error in Node.js HTTP servers: not handling the 'end' event of an incoming request. This results in the server processing only a portion of the request body, leading to unexpected behavior or incorrect results.

## Bug
The `bug.js` file contains a Node.js HTTP server that fails to handle the 'end' event of an incoming request.  This means that if a client sends a large request body, the server will likely only receive and process a part of it before responding.

## Solution
The `bugSolution.js` file corrects this issue by adding an event listener for the 'end' event. This ensures that the server waits for the entire request body before processing it.

## How to Reproduce
1. Clone the repository.
2. Navigate to the repository's directory.
3. Run `node bug.js`. 
4. Send a POST request to `http://localhost:3000` with a large body (e.g., using curl or Postman).
5. Observe that the server processes only a partial request body.
6. Repeat steps 2-4 with `node bugSolution.js`.  This time the server will wait for the whole body.
