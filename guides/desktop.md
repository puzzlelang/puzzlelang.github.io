# Build Desktop Apps

There are different ways to build desktop apps with PUZZLE. You can use frameworks, like:

* Electron
* NW.js
* Neutralino

# Neutralino

Neutralino is a simple way to start

## 1. Install and initialize

Before building apps with Neutralino, you need to install it

```shell
npm install -g @neutralinojs/neu && neu create APPNAME && cd APPNAME
```

## 2. HTML File

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

## 3. Run (for testing)

Inside "myapp" directory run:

```
neu run
```

-> This will open your desktop app.

## 4. Build and Distribute

> Full guide [here](https://neutralino.js.org/docs/distribution/overview#)

Run:

```shell
neu build
```

-> Then, the binaries for each platform will be located in `dist/myapp`.