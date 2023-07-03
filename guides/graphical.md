# Build a graphical app

[filename](code-editor.md ':include')

## Code

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

			ui render div with id main and text "Welcome!";

			// OR INCLUDE A FILE
			include myfile.pz;
		</script>
	</body>
</html>
```

myfile.pz
```puzzle
use ui;

ui.render div with id main and text "Welcome!";
```

## Run

Open the *index.html* file in your browser and see the result.