# Build Desktop Apps

There are different ways to build desktop apps with PUZZLE. You can use frameworks, like:

* Electron
* NW.js
* Neutralino

# Electron

Electron is a simple way to start

## Install and initialize

You can find the instructions on how to install Electron on [the website](https://www.electronjs.org/).

## HTML File

The main file should have the following content

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