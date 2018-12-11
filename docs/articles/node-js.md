---
title: Node.js
description: A node.js guide
date: 2018-12-06T20:12:15.617Z
---
# Node.js

## Intro

### The Server

- Database
- Authentication
- Input Validation
- Your Business Logic

### Outside the Server

- Utility Scripts
- Build Tools

### fs

`const fs = require('fs')`  
Write and read to the file system.

## Packages

### Core Modules

- const fs = require('fs')

#### HTTP
- const http = require('http')
- https  
http.createServer  
Spins up a server and takes a function as parameter. This function takes a request and response.  

```js
http.createServer((req, res) => {
  
})
```

To actually use this server we need to save in a variable `const server` and run `server.listen()`

```js
const server = http.createServer((req, res) => {
  console.log(req)
})

server.listen(3000)
```


- path
- os

# Require

Require is a node method. if you ommit a / it takes it from the global modules.

