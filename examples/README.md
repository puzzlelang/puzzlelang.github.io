# Examples

This is a collection of examples for using puzzle on different platforms.

> Before running any of these examples you should familiarize yourself with the [Installation Instructions]()

## CLI script

```shell
$ puzzle
> print "hello world"
```


## Browser script


```html
<html>
  <head>
  	<!-- Include puzzle -->
    <script src="https://cdn.jsdelivr.net/gh/puzzle-lang/puzzle/puzzle.browser.js"></script>

    <!-- write your script -->
    <script type="text/x-puzzle">
      print "hello world";
    </script>
  </head>
</html>
```

## Web app


```html
<html>
  <head>
    <script src="https://cdn.jsdelivr.net/gh/puzzle-lang/puzzle/puzzle.browser.js"></script>
  </head>
  <body>

    <script type="text/x-puzzle">
      // include the web module
      use "_catalog/web/index.js;";

      create div with id 123 and style "background:black;color:white";
      create button inside 123 with text "click me" and onclick "alert('i was clicked!')";
    </script>
  </body>
</html>
```


## Node.js script


```javascript
const puzzle = require('puzzle-lang');

puzzle.parse(`
  print "hello world";
`)
```


## Custom syntax

Let's create a custom little language that prints a simple input. We'll define the keyword `echo` that takes an input and displays it.

### Syntax as module file

Creating custom language definitions is done using the following js object and save it as a file:

```javascript
//mylanguage.js

var syntax = {
	$: {
		my_namespace: {
			echo : {
				follow: ["{input}"],
				method: (ctx, input) {
					console.log(input)
				}
			}
		}
	}
}
```

"Use" your language as a module:

```puzzle
// myscript.pz

use mylanguage.js;

echo "hello";
```

### Syntax as javascript variable

Create a custom syntax by defining it as a js object in the same scope as your puzzle script will run

For instance, in the browser:

```html
<html>
  <head>
    <script src="https://cdn.jsdelivr.net/gh/puzzle-lang/puzzle/puzzle.browser.js"></script>
    <script>
    	var mysyntax = {
    		$: {
				my_namespace: {
					echo : {
						follow: ["{input}"],
						method: (ctx, input) {
							console.log(input)
						}
					}
				}
			}
    	}
    </script>
  </head>
  <body>

    <script type="text/x-puzzle">
      // include the web module
      use var:mysyntax;

      echo "hello"
    </script>
  </body>
</html>
```