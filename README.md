<div class="cover-main"><!-- _coverpage.md -->
<h1 class="header" style="padding: 0px !important;margin-left:0px;">An <span class="highlight-primary">abstract</span> programming language</h1>
<h4>Runs instantly in any JavaScript environment</h4>

<br>

<!--

***New articles***

<div id="articles"></div>

-->



# EXAMPLES

**Simple UI**

```puzzle
fetch from https://domain.com/whatever as result;

ui render box with id test and text result;
```
**Simple Server**

```puzzle
use server;

server on /home run (
  print "home was visited"
) and return (
  hello!
);
```

**Simple Game**

```puzzle
use ui;

ui root "#app";

set mariogif "https://media.tenor.com/GuYKt4Z_s9EAAAAi/mario-run.gif";

ui render image with id player and src mariogif;

ui on key up (
    ui get player and move up 15;
);

ui on key down (
    ui get player and move down 15;
);

ui on key right (
    ui get player and move right 15;
);

ui on key left (
    ui get player and move left 15;
);
```


# GET STARTED

**Browser**

```html
<html>
  <head>
    <script src="https://cdn.jsdelivr.net/npm/puzzlelang@latest/puzzle.browser.js"></script>
  </head>
  <body>
    <script type="text/x-puzzle">
      use ui;

      ui render (
        <div>hello</div>
      )
    </script>
  </body>
</html>
```

**Node**

```shell
npm i puzzlelang
```
```javascript
const puzzle = require("puzzlelang");
puzzle.parse('print hi');
```

**Other**

[Playground](https://playcode.io/puzzlelang) 

[Online Runtime (Replit)](https://replit.com/@puzzlelang)

# VARIABLES

Variables are set using the `set` keyword.

```puzzle
set name Peter;
print name;
```
## Permanent

You can also set permanent variables, that are stored locally (stored on disk) by using the `local` keyword in combination with `set`

```puzzle
set local name Peter;
print name;
```

## Datatypes

In programming, you always need to store some information for later use. This information is stored in variables.
In puzzle, variables can be created with `set name value`. Puzzle variables can take any type as value:

```puzzle
// Number
set age 1

// Text
set message "hello world"

// Boolean
set decision true

// Objects
set person {name: Perer, age: 22}

// Array (collection of data)
set numbers [1,2,3]

// Script
set say-hello ( print hello )
```

## As

Every piece of code that generates data can be followed by `as ...`. This will store that data in the variable.

```puzzle
// Example: store the result of a rest call in a viariable
use rest
get from https://puzzlelang.org as data

print data
// prints the website data from the url
```


# SCRIPTS

Scripts are functions that can run predefined puzzle code and are defined with the `script` keyword.

```puzzle
script sayHello { print hello }
// or:
set sayHello ( print hello )

run sayHello;
// will output "hello"
```

When running a script, variables can be overwritten with `variable:value`.

```puzzle
run hello:hi in sayHello;
// will output "hi"
```

## Run

With the `run` keyword, you can execute an inline script

```puzzle
run ( print hello )
// or
run scriptname;
```

## Time-triggered scripts

Run a piece of code with the `run` keyword <u>delayed</u>.

```puzzle
// Wait for 2 seconds, then run the code
after 2000 run "print hello"

// Or run a predefined script
script sayHi (print hi);
after 2000 run sayHi;
```

Run a piece of code with the `run` keyword <u>repeatedly</u>.

```puzzle
// Every 2 seconds, then run the code
every 2000 run "print hello"

// Or run a predefined script
script sayHi (print hi);
every 2000 run sayHi;
```

## Wait

The wait keyword allows you to break the execution of a script for a certain time.

```puzzle
print "starting program";

// wait for 2 seconds (time expresses througt milliseconds)
wait 2000;

print "i will be displayed after 2 seconds"
```


# JAVASCRIPT

Puzzle runs in JavaScript. Interpreted, not compiled. This means, that puzzle code has access to the enclosing JavaScript context and the other way around.

## Run JS

JS code can be included in puzzle code.

```puzzle
js (
  alert("hello world");
  console.log('hi');
)
```

## Access functions + variables

JS functions and variables can be accessed

```puzzle
js (navigator.onLine) as result;
print result;

js (someFunction()) as result;
print result;
```

## Bind variables

By default, all global variables from the JavaScript context are bound to the puzzle context. You can also bind custom variables, using a js object.

```javascript
let data = {
  name: "Grace",
  type: "test"
}
```

```puzzle
bind-vars data;

// access your vars
print name;
print type;
```

# MODULES

The PUZZLE language is based on an open module ecosystem.

Each module is designed to archieve a specific goal and comes with it's own syntax. 
Any PUZZLE script can use multiple modules, loaded from a remote server or a local file.

## Official modules

There are some official modules, developed by the PUZZLE team:

* [UI](https://github.com/puzzlelang/puzzle-catalog/blob/master/modules/ui/Readme.md) - Build graphical user interfaces
* [Server](https://github.com/puzzlelang/puzzle-catalog/blob/master/modules/server/Readme.md) - Build a Server or API

Official modules can simply be included by their names (`use ui;`)

## Use modules

Modules can be used from any source. Local or remote.

```puzzle
// Include a remote module
use https://domain.com/somemodule.js;

// Use the module
somemodule.echo "Hello";

// Use official modules
use ui;
use fetch;

// Use module syntax by prepending the module name to any statement that contains module code

ui render div with text "hello";
```

## Permanent modules

If you'd like to cache a module, use the `permanent` option:

```puzzle
use permanent https://afasf.com/module.js;
// or
use permanent ui;
```

This will save the module inside a persistent context and make it available, even if the original url is not accessible (offline usage). This works with any module.


# CUSTOM LANGUAGE

Building a custom language is done with a simple js object, that is included in puzzle.

## File

Define a JS object, stored in a file.

***Language definition***

```javascript
// mysyntax.js
var syntax = {
  mymodule: {
    echo: { // a token
      follow: ["{param}", "$and"], // follow tokens
      method: function(ctx, param){
        // js method thats called when the token is parsed
        console.log(param)
      }
    }
  }
}
```

```puzzle
use mysyntax.js;
// or from remote
use https://domain.com/mysyntax.js;

// Use your language
mymodule.echo "Hello";
```

## Object

Define a JS object, stored as variable. The JS object and the puzzle code needs to be in the same context.

```javascript
let mysyntax = {
  ...
}

puzzle.parse(`
  use var:mysyntax;
`)
```

# BASICS

## Loops

Loops are for repeating code. There are different types of loops.

***while***

While loops can be written as `while CONDITION-LITERAL do CODE-LITERAL`

```puzzle
// single-part literal condition
while 1>0 do (print running);

// multi-part literal condition
while (1<2 OR 2==2) do {
  print true
};
```

***iterate***

You can also use loops for iterating over some data

```puzzle
set numbers [1,2,3]

loop over numbers with number do (
  print number
)

// will output:
// 1
// 2
// 3
```

***n times***

Run a piece of code repeatedly for a specified number of times

```puzzle
repeat 3 times (print hi);

// or use variables
set counter 5;
repeat counter times "print hi";

// or run predefined scripts
set myscript "print hi";
repeat 3 times myscript;
```


## Conditions

Conditional code execution can be used with the following pattern:  `if CONDITION-LITERAL then CODE-LITERAL else CODE-LITERAL` 

A condition can be either a single-part or multi-part literal. The executable code has to be a code literal.

```puzzle
// single-part literal condition
if 1<2 then (print true);

// multi-part literal condition
if (1<2 OR 2==2) then (print true);

// if and else
if (1<2 OR 2==2) then (print true) else (print false);

// different notations for code literals
if (1<2 OR 2==2) then "print true" else {print false};
```

## Reusing code

PUZZLE scripts can be included into other PUZZLE scripts for code reusage using `include`

```puzzle
// local
include otherscript.puzzle;

or remote
include https://domain.com/otherscript.puzzle;
```


## Comments

Comments can be written using `//`

```puzzle
// this is a comment
```

## Math

Mathematical operations take numbers and variables for input.

```puzzle
// simple calculation, takes any mathematical input and the operations +, -, *, /
calc (2+3) as result;
calc (4 + myvariable) as result;

// min and max
min (1,4,6,7) as result;
max (4,7,8,2) as result;

// add and subtract multiple numbers
add (4,6,7) as result;
subtract (10,4,2) as result;
```

# FILES

Files can be written, read and removed.

> In Node, file access is native. In browsers, there is no access to the device's real filesystem. However, puzzle handles files and directories directly inside the browser's `indexedDb`

```puzzle
mkdir /test;

write file /test/hello.txt "word";
read file /test/hello.txt;
remove file /test/hello.txt;
```

```puzzle
// this is a comment
```

# UTILITIES

## JSON

Parse and stringify JSON data.

```puzzle
jsonify '{"message": "hi"}' as jsonData
stringify jsonData as stringData
```

## base64

Encode and decode base64 data

```puzzle
encode "hlo world" as encoded
decode encoded as decoded
```

## Custom token

Custom tokens can be defined for executing some javascript code, when that token is used.

```puzzle
define token echo with follow "{data}" and method "console.log(data)";

// Use it right away
echo "test";
```

<!--

# Customize

Besides being a simple language, PUZZLE is also a platform for custom syntax. 
Each syntax is delivered as a module, that can be used in any script with `use my_module.js`.

## Custom tokens

Custom tokens can be defined for executing some javascript code, when that token is used.

```puzzle
define token echo with follow "{data}" and method "console.log(data)";

// Use it right away
echo "test";
```

## Create a syntax

Building your own custom syntax is simple. It's defined with a JavaScript object that follows a given structure.

```javascript
var syntax = { // syntax variable
  mymodule: { // your namespace name
    echo: { // a token
      follow: ["{param}", "$and"], // possible follor tokens
      method: function(ctx, param){ // a js method behind a token
        console.log(param)
      }
    },
    and: {
      follow: ["{param}", "$and"],
      method: function(ctx, param){
        console.log(param)
      }
    }
  }
}
module.exports = syntax;
```

-->

<!--

***The required keys and fields in your syntax definition are:***


| Key        | Description           | Example  |
| ------------- |-------------| -----|
| lang.$.NAMESPACE      | The name of your moudle/namespace | `example` |
| lang.$.NAMESPACE.TOKEN     | Custom tokens      |   `echo` |
| lang.$.NAMESPACE.TOKEN.follow | A list of possible tokens that can follow.   |    `["{param}", "$and"]` |
| lang.$.NAMESPACE.TOKEN.method | The function to be executed, when that token ist parsed     |    `function(param){console.log(param)}` |



***Follow tokens can be defined as follows:***


| Follow token        | Description    | 
| ------------- |-------------| 
| `$and`      | Corresponds to the exact token without the leading dollar sign. |
| `{param}`     | A custom input of any type. This will be available as single parameter in your method: `method: function(param){}`      |
| `{param1,param2}` | Multiple custom inputs followed by another. These will be available as object parameter: `method: function(obj){//obj.param1, obj.param2}`  | 


-->

<!--

Define your available tokens as keys under the "$" object. Each key has an attached `method`, which will be executed, when that token is parsed and an array `follow`, which defines, which tokens can follow the current token.

***Following tokens***

Following tokens can either be wildcards for user input (`{param}`) or another token, specified with a leading "$" (e.g. `$and`).

These instructions let you create token chains and build your own syntax.


```puzzle

|-------------- Statement ------------|

  echo    "Peter"   and  "Nicole"   ;

   ^        ^        ^      ^       ^
command  command  command command delimeter;

   echo  {param}     and  {param}

```

## Use a custom syntax

Custom syntax can be used in the following ways:

* from a local file
* from remote (http, https)
* from an inline variable

<b>Local file</b>

```puzzle
use file.js;
```

<b>Remote</b>

```puzzle
use https://somedomain.com/module.js;
```

<b>Inline variable</b>

> This method can be used when a custom syntax is defined in the same scope as the script. The syntax variable must be prefixed with `var:`

```javascript
var syntax = {
  ...
}

puzzle.parse(`
 use var:syntax;
`)
````

## Publish syntax as module

Your custom syntax modules can be contributed to the official module repo.

Learn more: [ PUZZLE Module Repo](https://github.com/puzzlelang/puzzle-catalog)
-->