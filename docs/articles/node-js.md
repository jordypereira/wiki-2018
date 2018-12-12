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

`const fs = require('fs')
`  
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

## Require

Require is a node method. if you ommit a / it takes it from the global modules.

## Export Modules

module.exports is an object holding all the functions you want to export.  
If you only export 1 function its that function. else its an object holding all the functions
```js
module.exports = func
```
or write `exports`

## Type of Errors

### Syntax Errors

typo's, missing characters, missing colons or parenthesis 


### Runtime Errors

Error message

### Logical Errors

No error message, app doesn't work like it should

## Express
Handles all the server logic for you  
Express is highly extensible with other packages.  
`npm i --save express`

Basic setup
```js
const http = require('http')

const express = require('express')

const app = express()

const server = http.createServer(app)
```

### Middleware
Express is pluggable with middleware.

```js
app.use((req, res, next) => {
  console.log('In the middleware!');
})
```
This middleware gets run. To start the second middleware you have to run `next()`.  
So always either run next or return a response.


`res.send('<h1>Hello from Express</h1>')`
Is an express method.

### Starting the server

```js
const server = http.createServer(app)

server.listen(3000)
```
Can be replaced with `app.listen(3000)`

### Routing

#### Paths
[express api app.use](https://expressjs.com/en/4x/api.html#app.use)
tells us that we can add a path before we add the callback.

#### Methods
Instead of app.use we can use app.get and app.post

#### Router
```js
const express = require('express')

const router = express.Router()

router.use('/', (req, res, next) => {
  res.send('<h1>Hello from Express</h1>')
})

module.exports = router
```

Import the file and call it using `app.use()`

#### Group routes
Add a path to the `app.use('/admin/, adminRoutes)`

### Reading body requests
`npm i --save body-parser`  
Is used to parse req.body

### Return html files
You need the path module to construct a path and use app.sendFile().
`res.status(404).sendFile(path.join(__dirname, 'views/', '404.html'))`

### Finding the right file in the right directory on both Linux and Windows
To find the root folder 
```js 
const path = require('path')

module.exports = path.dirname(process.mainModule.filename)
```
To construct the right path use the core module path

```js
res.sendFile(path.join(rootDir, 'views/', 'add-product.html'))
```

### Serve static files

`app.use(express.static(path.join(__dirname, 'public')))`  
`<link rel="stylesheet" href="/css/main.css">`  
Always append the '/' to the css link

## templating languages

### Pugjs

`npm i --save pug`  
In app.js enter `app.set('view engine', 'pug')`  
folder to find the views `app.set('views', 'views')`