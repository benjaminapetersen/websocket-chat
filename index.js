'use strict';

const io = require('socket.io');
const http = require('http');

const app = http.createServer((req, resp) => {
  resp.end();
});
