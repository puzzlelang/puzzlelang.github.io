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

post {message: "hello"} to https://domain.com

delete from https://domain.com

patch to https://domain.com
```

# UI

```puzzle
use ui;
```

Build frontends for the browser. In order to use it, you need an html file.

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

Elements can be created and accessed like so;

```puzzle
create HTMLELEMENT with id ID and ATTRIBUTE VALUE and ATTRIBUTE VALUE and ...

//Example
create div with id 123 and text hello

// For nesting, do
create a inside 123 with text link
```

Functional code:

```puzzle
alert "Hello"

prompt Say

confirm Really?
```

