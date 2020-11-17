# Usage

Puzzle can be installed standalone or for embedded use. See the details below.


## Interactive Shell (CLI)

```shell
$ npm i puzzlelang --global
```

```shell
$ puzzle
$ print "Hello World!"
"Hello World"
```

## Run a File

```shell
$ npm i puzzlelang --global
```

```javascript
// hello.puzzle
print "I am a puzzle file"
```


```shell
$ puzzle run hello.puzzle
"I am a puzzle file"
```


## Node

puzzle scripts can also be run inside JavaScript


```javascript
npm i puzzlelang --save
```

```javascript
puzzle = require('puzzlelang');

puzzle.parse('print "Hello, I am embedded"')
```


## Browser

```html
<script src="https://cdn.jsdelivr.net/npm/puzzlelang/puzzle.browser.js">
```

> Embedded

```javascript
// For Node.js
puzzle.parse('print hello')
```

> As script tag

```javascript
<script type="text/x-puzzle" >
	print hello
</script>
```
