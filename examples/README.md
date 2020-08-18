# Examples

This is a collection of examples for using luke on different platforms.

> Before running any of these examples you should familiarize yourself with the [Installation Instructions]()

## "Hello World" in the CLI

```shell
$ luke
> print "hello world"
```


## "Hello World" in the Browser


```html
<html>
  <head>
  	<!-- Include luke -->
    <script src="https://cdn.jsdelivr.net/gh/luke-lang/luke/luke.browser.js" />

    <!-- write your script -->
    <script type="text/x-luke">
      print "hello world";
    </script>
  </head>
</html>
```


## "Hello World" in Node


```javascript
const luke = require('luke-lang');

luke.parse(`
  print "hello world";
`)
```

