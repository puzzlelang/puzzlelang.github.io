# Get started on Browser

PUZZLE runs in any webbrowser. It can be included as a script tag and be used in various ways:

***Include***

```html
<html>
	<head>
		<script src="https://cdn.jsdelivr.net/npm/puzzlelang@latest/puzzle.browser.js"></script>
	</head>
</html>
```

***PUZZLE script tag***

```html
<script type="text/x-puzzle">
	render (
		<div>hello</div>
	)
</script>
```

***JavaScript tag***

```html
<script type="text/javascript">
	puzzle.parse('print hello')
</script>
```

> -> Browser technology can also be used to build desktop and mobile apps