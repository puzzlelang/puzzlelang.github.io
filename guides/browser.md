# Develop Browser Apps

PUZZLE runs in any Webbrowser. It can be included as a script tag and be used in various ways:

## 1. HTML File

Create a file with the following content

```html
<html>
	<head>
		<script src="https://cdn.jsdelivr.net/npm/puzzlelang@latest/puzzle.browser.js"></script>
	</head>
	<body>
		<script type="text/x-puzzle">
			use ui;

			ui.render (
				<div>hello</div>
			)
		</script>
	</body>
</html>
```

## 2. Run

Open your html file in the webbrowser to see and test the result