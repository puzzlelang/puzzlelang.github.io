<h1>Browse official Code Examples</h1>


# DESKTOP APPS

There are different ways to build desktop apps with PUZZLE. Electron is a simple way to start

## Install and initialize Electron

You can find the instructions on how to install Electron on [the website](https://www.electronjs.org/).

## Files

*index.html*

```html
<html>
    <head>
        <script src="https://cdn.jsdelivr.net/npm/puzzlelang@latest/puzzle.browser.js"></script>
    </head>
    <body>
      <script type="text/x-puzzle">
        include puzzle.pz
      </script>
    </body>
</html>
```

*puzzle.pz*

```puzzle
use ui;
alert "welcome to PUZZLE on the desktop"
```

# NETWORKING

## Server

Build a server using the server module.

```puzzle
use server;

// Start server on specified port
start 80;

// Define routes
on get /test run (
  print "/test was called"
) and return "done!";

on post /myroute run (
  print "/myroute was called"
) and return "done!";
```

## Fetch (Client)

Use fetch methods to call remote resources.

```puzzle
post {message: "hello"} to https://domain.com/myroute;

delete from https://domain.com/someroute;

patch to https://domain.com;

get from https://domain.com/myroute as result; 
print result;
```


