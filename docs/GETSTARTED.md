
## Interactive Shell (CLI)

```shell
$ npm i puzzle --global
```

```shell
$ puzzle
$ print "Hello World!"
"Hello World"
```

## Run a File

```shell
$ npm i puzzle --global
```

```javascript
// hello.puzzle
print "I am a puzzle file"
```


```shell
$ puzzle run hello.puzzle
"I am a puzzle file"
```


## Embedded (JavaScript)

puzzle scripts can also be run inside JavaScript

> Node

```javascript
npm i puzzle --save
```

```javascript
puzzle.parse('print "Hello, I am embedded"')
```


> Browsers

```html
<script src="https://cdn.jsdelivr.net/gh/puzzle-lang/puzzle/puzzle.browser.js">
```

```javascript
// For Node.js
const puzzle = require('puzzle-lang');

// For browsers:
<script src="puzzle.js"/>
```