# Start from Scratch with PUZZLE

What do you need to get startet with PUZZLE?
It depends on what type of application you want to build.

# Browser app

## 1. Code Editor

For local development, the first thing you need is a *code editor*, or *IDE* to write your PUZZLE code.

Based on their simplicity, we recommend the following ones:

* [Sublime Text](https://www.sublimetext.com/)

## 2. Directory Structure

Inside your Code Editor, open a directory that has at least an index HTML file. This is the entry point of your application. PUZZLE code can be written inside that HTML file. However, we recommend seperate PUZZLE files, that are included in the HTML file.

* index.html
* index.pz

## 3. Code

A minimal code boilerplate:

index.html
```html
<html>
	<head>
		<script src="https://cdn.jsdelivr.net/npm/puzzlelang@latest/puzzle.browser.js"></script>
	</head>
	<body>
		<script type="text/x-puzzle">
			include index.pz;
		</script>
	</body>
</html>
```

index.pz
```puzzle
print "i am the puzzle file"
```

## 4. Run

Open the *index.html* file in your browser and see the result.

# Non-visual app

When creating an app without graphical user interface, Node.js is used as javascript runtime.

## 1. Install Node and PUZZLE

[Install Node.js](https://nodejs.org/en) from their website and then install PUZZLE:

Inside a blank directory, run:

```shell
npm i puzzlelang --save
```

## 2. Code Editor

same as above

## 3. Directory Structure

Inside your Code Editor, open a directory that has at least an index JavaScript file. This is the entry point of your application. PUZZLE code can be written inside that HTML file. However, we recommend seperate PUZZLE files, that are included in the JavaScript file.

* index.js
* index.pz

## 4. Code

A minimal code boilerplate:

index.js
```html
let puzzle = require('puzzlelang');
puzzle.run('index.pz')
```

index.pz
```puzzle
print "i am the puzzle file"
```

## 5. Run

Open the terminal and run:

```shell
node index.js
```
