# Build Desktop Apps

There are different ways to build desktop apps with PUZZLE. You can use frameworks, like:

* Electron
* NW.js
* Neuralino
* ...

# Neuralino

Neuralino is a simple way to start

## Dependencies

Before building apps with Neuralino, you need to install it

***Install***

```shell
npm install -g @neutralinojs/neu
```

***Create app***

```shell
neu create myapp && cd myapp
```

***Include PUZZLE***

Open *index.html* and replace with the following code:

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

## Run (for testing)

Inside "myapp" directory run:

```
neu run
```

-> This will open your desktop app.

## Build and Distribute

> Full guide [here](https://neutralino.js.org/docs/distribution/overview#)

Run:

```shell
neu build
```

-> Then, the binaries for each platform will be located in `dist/myapp`.