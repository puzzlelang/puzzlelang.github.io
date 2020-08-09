# Quickstart Examples

## Install

## Terminal

***1. Install***

```shell
$ npm i luke-lang --global
```

***2. Write a script***

```shell
$ "print 'hello world'" > myfile.luke;
```

***3. Run the script***

```shell
$ luke run myfile.luke
```

### CLI

***1. Install***

```shell
$ npm i luke-lang --global
```

***2. Start the CLI***

```shell
$ luke
```

***3. Run a command***

```shell
> print "hello world"
```

### Node (embedded)

***1. Install***

```shell
$ npm i luke-lang --save
```

***2. Embed luke***

```javascript
const luke = require('luke-lang');

luke.parse(`
  print "hello world";
`)
```

***3. Run the file***

```shell
node index.js
```


### Browser (embedded)

***1. Install***

```html
<script src="..." />
```

***2. Embed luke***

```javascript
// luke will be available as part of the global window object.

luke.parse(`
  print "hello world";
`)
```

