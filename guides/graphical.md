# Build a graphical app

## • Code Editor

For local development, the first thing you need is a *code editor*, or *IDE* to write your PUZZLE code.

Based on their simplicity, we recommend the following ones:

* [Sublime Text](https://www.sublimetext.com/)

## • Directory Structure

Inside your Code Editor, open a directory that has at least an index HTML file. This is the entry point of your application. PUZZLE code can be written inside that HTML file. However, we recommend seperate PUZZLE files, that are included in the HTML file.

* index.html
* index.pz

## • Code

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
render div with id main and text "Welcome!";
```

## • Run

Open the *index.html* file in your browser and see the result.