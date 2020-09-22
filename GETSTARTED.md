
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


## Node

puzzle scripts can also be run inside JavaScript


```javascript
npm i puzzle --save
```

```javascript
puzzle.parse('print "Hello, I am embedded"')
```


## Browser

```html
<script src="https://cdn.jsdelivr.net/gh/puzzle-lang/puzzle/puzzle.browser.js">
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
