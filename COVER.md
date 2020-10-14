
# Puzzle. An abstract programming language

Puzzle is a programming language, that has an ***abstract*** language design, is ***customizable*** and runs on any JavaScript runtime

> Abstract language design

> Simply customizable

> Easy to learn

<br>

<br>

#### &bull; Abstract language

The puzzle syntax aims to be abstract and follows an easy to understand interface

```puzzle
use https://xyz.com/some_module.js;

if you == "developer" 
then print "hi developer";
```


<br>
<br>

#### &bull; Customizable syntax

Puzzle is not just a language. It's also a platform for custom syntax, which is easily defined using a simple javascript object

```javascript
// Syntax definition
syntax = {
    print: {
        follow: ["{input}"],
        method: (ctx, input) => {
            console.log(input)
        }
    }
}
```

```puzzle
use my-syntax.js;
```


<br>
<br>

#### &bull; Cross Platform

```shell
puzzle run file.pz;
```

```html
<script type="text/x-puzzle">
     print hello;
</script>
```

```javascript
puzzle.parse('print "hello world"')
```
