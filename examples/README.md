# Examples

This is a collection of examples for using puzzle on different platforms.

> Before running any of these examples you should familiarize yourself with the [Installation Instructions]()

## "Hello World" in the CLI

```shell
$ puzzle
> print "hello world"
```


## "Hello World" in the Browser


```html
<html>
  <head>
  	<!-- Include puzzle -->
    <script src="https://cdn.jsdelivr.net/gh/puzzle-lang/puzzle/puzzle.browser.js" />

    <!-- write your script -->
    <script type="text/x-puzzle">
      print "hello world";
    </script>
  </head>
</html>
```


## "Hello World" in Node


```javascript
const puzzle = require('puzzle-lang');

puzzle.parse(`
  print "hello world";
`)
```

