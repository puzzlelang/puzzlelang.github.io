
## Interactive Shell (CLI)

```shell
$ npm i luke --global
```

```shell
$ luke
$ print "Hello World!"
"Hello World"
```

## Run a File

```shell
$ npm i luke --global
```

```javascript
// hello.luke
print "I am a luke file"
```


```shell
$ luke run hello.luke
"I am a luke file"
```


## Embedded (JavaScript)

luke scripts can also be run inside JavaScript

> Node

```javascript
npm i luke --save
```

```javascript
luke.parse('print "Hello, I am embedded"')
```


> Browsers

```html
<script src="https://cdn.jsdelivr.net/gh/luke-lang/luke/luke.browser.js">
```

```javascript
// For Node.js
const luke = require('luke-lang');

// For browsers:
<script src="luke.js"/>
```