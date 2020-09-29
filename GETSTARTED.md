# What is puzzle?

Puzzle is a custumizable programming language that runs in any JavaScript environment and is designed to solve problems in an abstract way.
The language design is both simple and versatile, making it easy for developers and even non-developers to write code.

Besides being an abstract programming lanugage, puzzle is also a platform for custom modules that can use their own individual syntax.

# What can I do with puzzle

Puzzle allows you to develop literally any kind of software that runs in JavaScript engines, like browsers or Node.

* Develop terminal-based apps
* Embed custom code into existing projects
* Develop browser-based apps (desktop/mobile)
* Build backends
* Create and package custom languages (DSLs)
* etc ...


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
<script src="https://cdn.jsdelivr.net/gh/puzzlelang/puzzle/puzzle.browser.js">
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
