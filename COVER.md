
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


<!--![Puzzle architecture](https://puzzlelang.github.io/puzzle-code-feature.png)-->

<br>
<br>

# Main Concepts

<br>

#### Abstract language design

The puzzle syntax aims to be abstract and follows an easy to understand interface

```puzzle
use https://xyz.com/some_module.js;

if you == "developer" 
then print "hi developer";
```


<br>
<br>

#### Customizable syntax

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

#### Runs where JavaScript runs

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
