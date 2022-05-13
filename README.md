<div class="cover-main"><!-- _coverpage.md -->

<span style="font-size: 50px;color:#e5cbe4">PUZZLE</span>

 <a href="https://github.com/puzzlelang/puzzle" target="_blank" class="" style="margin:0px 10px"><span class="fab fa-github"></span></a>
 <a href="https://www.npmjs.com/package/puzzlelang" class="" target="_blank" style="margin:0px 10px"><span class="fab fa-npm"></span></a>

<blockquote style="line-height: 2;"><b>
-> Runs in every <u>JavaScript</u> environment
<br>-> Build any JS-based app, like browser apps, backends, ...
<br>-> Embed in JS or run standalone
<br>-> Build custom languages (DSLs)
<br>-> Use in clouds, like GCP, Azure or AWS
</b>
</blockquote>

<b>Browser</b>

```puzzle
<script type="text/x-puzzle">
    use web;
	create div with id "container" and text "hello";
</script>
```

<b>Emdedded</b>

```puzzle
// As string
puzzle.parse(`send email with text "welcome to puzzle" to peter.griffin@puzzle.org`)

// As file
puzzle.run('index.pz')
```

<b>CLI</b>

```puzzle
$ puzzle
? > if "1 IS 1" then (print right!)
```


<br>

# Install

<b>NPM</b>

```shell
$ npm i puzzlelang --global
```

<b>Browser</b>

```html
<script src="https://cdn.jsdelivr.net/npm/puzzlelang@latest/puzzle.browser.js">
```

# Language

PUZZLE is a programming language, that has an abstract design and can easily be extended with custom language building blocks.

> A quick example

```puzzle
// Output something
print 'Welcome future puzzle developer!';

// Include a thrid party module (local or remote)
use 'https://url.com/module.js';

// stora a variable
set name 'Grace';
```

## Syntax

The PUZZLE syntax is designed to be simple and easily understandable. Scripts are built on different statements that are mapped to some JavaScript functionality.

Each statement consists of simple, mostly natual word-based commands, like `write file hello.txt 'world';`


## Statements

puzzle scripts are split up into multiple statements, delimited by a semicolon (`;`). 
Each statement can be single line or multiline, as long as it terminates with a semicolon.

```puzzle
print "this is a single line stamement. It ends with a semicolon";

print (
	this is a multiline statement. It also ends with a semicolon.
);
```

## Literals

***single-part literals***

Data, that can be described in one part.

```puzzle
// single-part literals
print hello;
print 1;
print 2.5;
```

***multi-part literals***

Data that can consist of multiple parts, like multiple words, lines or even statements.

Multi-part literals must be wrappen in any of these: `""`, `()`, `{}`.

```puzzle
// equivalent multi word example:
print "hello world";
print (hello world);
print {hello world};

// multi line example
print (
	hello world!
);
```

## Variables

Variables are set using the `set` keyword.

```puzzle
set name Peter;
print name;
```

You can also set permanent variables, that are stored locally by using the `local` keyword with `set`

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


## Scripts

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
// store script in variable
set myScript ( print hi )

// run it
run myScript
```

## Files

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

## JavaScript code

Executes JavaScript code inside a PUZZLE script using `js`

```puzzle
js (
	console.log('I am JavaScript!')
)
```

## Reusing code

PUZZLE scripts can be included into other PUZZLE scripts for code reusage using `include`

```puzzle
// local
include otherscript.puzzle;

or remote
include https://domain.com/otherscript.puzzle;
```


## Modules

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

## Custom tokens

Custom tokens can be defined for executing some javascript code, when that token is used.

```puzzle
define token echo with follow "{data}" and method "console.log(data)";

// Use it right away
echo "test";
```

## JSON

Parse and stringify JSON data.

```puzzle
jsonify '{"message": "hi"}' as jsonData
stringify jsonData as stringData
```

## base64

Encode and decode base64 data

```puzzle
encode "hello world" as encoded
decode encoded as decoded
```

## Comments

Comments can be written using `//`

```puzzle
// this is a comment
```


# Custom syntax

Besides being a simple language, PUZZLE is also a platform for custom syntax. 
Each syntax is delivered as a module, that can be used in any script with `use my_module.js`.


## Create a syntax

Building your own custom syntax is simple. It's defined with a JavaScript object that follows a given structure.

```javascript
var syntax = { // syntax variable
  $: {
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

 $.echo  {param}   $.and  {param}

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