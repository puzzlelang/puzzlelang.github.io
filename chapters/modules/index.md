# - Official PUZZLE modules -

These are official, tested modules. All modules are hosted on Github and can be used in puzzle like so:

`use MODULENAME`

# REST


```puzzle
use rest;
```

The REST modules allows you to make calls and requests to apis, websites and everythinig accessible on the internet.

You can use the following REST methods:

```puzzle
use rest

get from https://google.com as result
print result
```

GET
```puzzle
get from https://google.com as result
```

POST
```puzzle
post {message: "hello"} to https://domain.com
```

DELETE
```puzzle
delete from https://domain.com
```

PATCH
```puzzle
patch to https://domain.com
```

# UI

```puzzle
use ui;
```

Build frontends for the browser. This module lets you build and access visual elements and define interactive actions. In order to use it, you need an html file.

```html
<html>
    <head>
        <script src="https://cdn.jsdelivr.net/npm/puzzlelang@latest/puzzle.browser.js"></script>
    </head>
    <body>
    	<div id="app"></div>
        <script type="text/x-puzzle">
            use ui

            root #app
            create button with text hello
        </script>
    </body>
</html>
```

Create ***Elements*** 

```puzzle
create HTMLELEMENT with id ID and ATTRIBUTE VALUE and ATTRIBUTE VALUE and ...

//Example
create div with id 123 and text hello

// For nesting, do
create a inside 123 with text link
```

Mutate ***Elements*** 

```puzzle
get ELEMENT with id ID and set ATTRIBUTE VALUE

//Example
get div with id 123 and set style "color:red";
```

Functional code

```puzzle
// Notification
alert "Hello"

// User input
prompt Say

// Confirmation
confirm Really?
```

User interactions

```puzzle
// Key interaction
on key space (print "space key was pressed")
```

