# Puzzle. An abstract programming language

Puzzle is a programming language, that has an ***abstract*** language design, is ***customizable*** and runs on any ***JavaScript*** runtime

> Abstract language design

> Simply customizable

> Easy to learn



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
