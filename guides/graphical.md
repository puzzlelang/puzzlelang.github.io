# Build a graphical app

[filename](code-editor.md ':include')

## • Code

### Option 1: Inline

A minimal code boilerplate:

index.html
```html
<html>
	<head>
		<script src="https://cdn.jsdelivr.net/npm/puzzlelang@latest/puzzle.browser.js"></script>
	</head>
	<body>
		<script type="text/x-puzzle">
			use ui;

ui.render div with id main and text "Welcome!";
		</script>
	</body>
</html>
```

### Option 1: Puzzle File

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
use ui;

ui.render div with id main and text "Welcome!";
```

## • Run

Open the *index.html* file in your browser and see the result.