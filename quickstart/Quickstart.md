# Quickstart Examples


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

or

```shell
$ luke
> print "hello world"
```


## Browser 


```javascript
<html>
  <head>
    <script src="..." />
    <script type="text/x-luke">
      print "hello world";
    </script>
  </head>
</html>
```




## Node (embedded)

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
