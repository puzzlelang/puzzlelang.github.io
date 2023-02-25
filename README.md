<div class="cover-main"><!-- _coverpage.md -->
<h3 class="header" style="padding:none !important">An <span class="highlight-primary">abstract</span>, extendable programming language on top of JavaScript. <br>It runs on <span class="highlight-primary">Browsers</span>, <span class="highlight-primary">Node</span>, and other platforms.</h3>

<!-- &nbsp; Try on <a href="https://codesandbox.io/s/puzzle-ui-g942w2?file=/index.html:0-330" target="_blank" class="btn">Codesandbox</a> or start on other &nbsp;<a href="#/chapters/GUIDES"><u>Platforms</u></a>

<br>

***Browser***

```html
<script type="text/x-puzzle">
  use ui;
  create button with text "click me";
</script>
```

***Node/Browser***

```js
var code = `
  set name 'another name';
  print name;
`;

puzzle.parse(code);
```

***Other Platforms***

[Replit](https://replit.com/@puzzlelang), [Codesandbox](https://codesandbox.io/s/puzzle-playgroud-hw1sfz), [more...](#/GUIDES)
-->
<!--div style="display: inline-flex;">
<a href="#/chapters/GUIDES?id=browser-app" class="platform-box"><span class="fa fa-globe"></span><br>Browser</a> 
<a href="#/chapters/GUIDES?id=nodejs" class="platform-box"><span class="fab fa-node" style="font-size:50px"></span></a> <!--a href="https://puzzlelang.org/runner" target="_blank" class="platform-box"><img src="assets/puzzle.png" style="width:20px"><small><br>Runner</small><br><br></a-->
</div-->

<!--div style="display: inline-flex;">
<a href="https://codesandbox.io/s/puzzle-playgroud-hw1sfz" target="_blank" class="platform-box"><svg aria-label="CodeSandbox" role="presentation" x="0px" y="0px" width="35px" height="18px" viewBox="0 0 452 452" style="vertical-align: middle; margin-left: 0px; margin-top: 2px;"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 452h452V0H0v452zm405.773-46.227V46.227H46.227v359.546h359.546z" fill="#ffffff"></path></svg> <small>Codesandbox</small><br><br></a> 

<a href="https://replit.com/@puzzlelang" target="_blank" class="platform-box"><img style="height:50px" src="https://blog.replit.com/images/new_logo/logotype.png?v=1664916455431"></a> <a href="https://playcode.io/puzzlelang" target="_blank" class="platform-box"><img style="height:50px" src="https://playcode.io/lstatic/img/social/fb-static.png"></a> <a href="https://glitch.com/edit/#!/puzzlelang" class="platform-box" target="_blank"><img style="height:50px" src="https://logos-world.net/wp-content/uploads/2021/03/Glitch-Symbol.png"></a>
</div-->


```puzzle
// The default language contains all the basics
print "
   hello world
";

set name Grace;
every 2s run ( print name );

// Modules are for custom and domain-specific code
use https://domain.io/somemodule.js;
```
<!--b style="color:grey">> Build any JS-based app, like browser apps, backends, ...
<br>> Embed in JS or run standalone
<br>> Build custom languages (DSLs)
<br>> Use in manaed environments, like replit.com
</b-->
# LANGUAE

PUZZLE is a programming language and platform, that has an abstract design and can easily be extended with custom language.


## Custom Language

Syntax is defined using simple json objects.

***Language definition (module)***

```javascript
// mysyntax.js
var syntax = { // syntax variable
  mymodule: { // your namespace name
    echo: { // a token
      follow: ["{param}", "$and"], // possible follor tokens
      method: function(ctx, param){ // a js method behind a token
        console.log(param)
      }
    }
  }
}
```

***Use an syntax:***

```puzzle
// use the syntax
use mysyntax.js;

echo "hello world";
```

> See detailed instructions <a href="#/?id=customize">here</a>


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



## Variables

Variables are set using the `set` keyword.

```puzzle
set name Peter;
print name;
```

You can also set permanent variables, that are stored locally by using the `local` keyword in combination with `set`

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

## Loops

Loops are for repeating code. They can be written as `while CONDITION-LITERAL do CODE-LITERAL`

```puzzle
// single-part literal condition
while 1>0 do (print running);

// multi-part literal condition
while (1<2 OR 2==2) do {
  print true
};
```

You can also use loops for **iterating** over some data

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

# Scripts

Scripts are functions that can run predefined puzzle code and are defined with the `script` keyword.

```puzzle
script sayHello { print hello }
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
```

This comes handy when storing a script in a variable:

```puzzle
// Store script in variable
set myScript ( print hi )

// run it
run myScript
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

# Files

Files can be writen, read and removed.

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

# UI

Use the UI module to build user interfaces and graphical applications.

```puzzle
use ui;

render (
  <div>hello</div>
)

create button with text "click" and onclick (
  alert "hello";
)
```

# Modules

## Use

The PUZZLE language is based on an open module ecosystem.

Each module is designed to archieve a specific goal and comes with it's own syntax. 
Any PUZZLE script can use multiple modules, loaded from a remote server or a local file.

```puzzle
// remove module
use https://afasf.com/module.js;

// local module
use module.js;
```

If you'd like to cache a module, use the `permanent` option:

```puzzle
use permanent https://afasf.com/module.js;
```

This will save the module inside a persistent context and make it available, even if the original path or url is not accessible (offline usage)


## Namespaces

Since different functionality comes from different modules, it's important to distinguish module-specific code. This is done by setting a namespace using the `ns` keyword.

```puzzle
ns mynamespace;
// namespace will be available here
```
A namespace will be active until another one is set using `ns`.

Note, that after loading a module using `use` will automatically set that modules namespace for you.

```puzzle
use mymodule.puzzle.js;
// the mymodule namespace will automatically be available here.
```

# Utilities

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
