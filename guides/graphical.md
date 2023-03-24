# Build a graphical app

[filename](code-editor.md ':include')

## • Directory Structure

Inside your Code Editor, create an index.html file, that is the entry point of your application.

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