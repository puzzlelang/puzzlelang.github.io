# NETWORKING

## Server

Build a server using the server module.

```puzzle
use server;

// Start server on specified port
start 3000;

// Define a route
on get /test run (
  print "/test was called"
) and return "done!"
```

## Fetch (Client)

Use fetch methods to call remote resources.

```puzzle
post {message: "hello"} to https://domain.com

delete from https://domain.com

patch to https://domain.com

fetch from https://google.com as result; 
print result;
```
