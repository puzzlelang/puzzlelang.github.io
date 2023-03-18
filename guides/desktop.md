# Build Desktop Apps

There are different ways to build desktop apps with PUZZLE. You can use frameworks, like:

* Electron
* NW.js
* Neuralino
* ...

We recomment Neuralino, because it's lightweight.

# Neuralino

## Dependencies

Before building apps with Neuralino, you need to install it

***Install***

```shell
npm install -g @neutralinojs/neu
```

***Create app***

```shell
neu create myapp
```


***Include PUZZLE***

```shell
cd myapp
```

Inside the "myapp" directory, you'll find the following folder structure:

* resources
	* icons
	* js
	* *index.html*
	* styles.css
* LICENSE
* README.md

-> Open *index.html* and replace with the following code:

```html
<html>
    <head>
        <script src="https://cdn.jsdelivr.net/npm/puzzlelang@latest/puzzle.browser.js"></script>
    </head>
    <body>
    	<script type="text/x-puzzle">
    		// puzzle code goes here
    	</script>
    </body>
</html>
```

## Write PUZZLE code

Now, you have two options to write PUZZLE code:

***Inside the script tag***

```html
<script type="text/x-puzzle">
   print hello;
</script>

```

***Or as seperate files (RECOMMENDED)***

Add files to the (resources) directory:

* resources
	* icons
	* js
	* index.html
	* *puzzle.pz*
	* *other-puzzle-file.pz*
	* styles.css

And include in index.html

```html
<script type="text/x-puzzle">
  include puzzle.pz
</script>

```

Puzzle file example:

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