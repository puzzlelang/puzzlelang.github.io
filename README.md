<div class="cover-main"><!-- _coverpage.md -->

<span style="font-size: 50px;color:#e5cbe4">PUZZLE</span>

<blockquote>
<p>Abstract, extendable programming language</p></blockquote>
<center>
<div style="background: #111111;text-align:left;padding:0px;margin:0px;border-radius:5px">
    <pre style="background:#000000">    <code class="lang-puzzle" style="font-size:25px !important;color:#ffffff;background:#000000">
set message "hello world";
print message;
</code>
    </p></pre><p></p></div>
</center>


# PUZZLE

<b>Browser</b>

```puzzle
<script type="text/x-puzzle">
    use web;
	create div with id "container";
</script>
```

<b>Standalone</b>

```puzzle
//myfile.pz
write file /hello.txt "world"
```

```puzzle
puzzle myfile.pz
```

<b>CLI</b>

```puzzle
$ puzzle
? > if "1 IS 1" then (print right!)
```

<b>Emdedded</b>

```puzzle
puzzle.parse(`
	send email with text "welcome to puzzle" 
	to peter.griffin@puzzle.org;
`)
```

<br>

# What can I do with puzzle

Puzzle allows you to develop literally any kind of software that runs in JavaScript engines, like browsers or Node.

* Develop terminal-based apps
* Embed custom code into existing projects
* Develop browser-based apps (desktop/mobile)
* Build backends
* Create and package custom languages (DSLs)
* etc ...


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

The puzzle language aims to provide simple language to build solutions that are taylored for different domains and problems. The main concepts of puzzle are:


* ***Simple language design, understandable for developers and non-developers***
* ***Custom syntax creation***
* ***Open and free platform for modules***


> A quick example

```puzzle
// Output something
print 'Welcome future puzzle developer!';

// Include a thrid party module (local or remote)
use 'https://url.com/module.js';

// stora a variable
var name 'Marco';

//
```

## Syntax

The puzzle syntax is designed to be simple and easily understandable for developers and non-developers. puzzle scripts are built up on different statements that execute something in the background.
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

Statements can have different literals as dynamic input. These literals can be of two types: single-part literals and multi-part literals.


***single-part literals***

These are literals that are contained in a single word or number. Note, that single-worded texts don't need to be written in quotes.

```puzzle
// single-part literals
print hello;
print 1;
print 2.5;
```

***multi-part literals***

These are literals that can consist of multiple parts, like multiple words, lines or even statements.

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

> Single-part literals can also be written in the multi-part notation, like `print (hello)` or `use "module.puzzle.js"`

***code literals***

Code literals define sub scripts that can be used in conditions or loops. They are also wrappen in `""`, `()` or `{}`

```puzzle
while (3>2 AND 4>3) ...
while "3>2 AND 4>3" ...
while {3>2 AND 4>3} ...
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

## JavaScript code

Executes JavaScript code using `js`

```puzzle
js (
	console.log('I am JavaScript!')
)
```

## Reusing code

puzzle scripts can be included into other puzzle scripts for code reusage using `include`

```puzzle
// local
include otherscript.puzzle;

or remote
include https://domain.com/otherscript.puzzle;
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

## Runner-functions

Runners are functions that can run predefined puzzle code and are defined with the `runner` keyword.

```puzzle
runner sayHello { print hello }
run sayHello;
// will output "hello"
```

When running a Runner, variables can be overwritten with `variable:value`.

```puzzle
run hello:hi in sayHello;
// will output "hi"
```

## Modules


The puzzle language is based upon an open module ecosystem.

Each module is designed to archieve a specific (mostly domain-specific) goal and brings it's own syntax. 
Any puzzle script can use multiple modules, loaded from a remote server or a local file.

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

This will save the module inside a persistent context and make it available, even if the original path or url is not accessible (e.g. offline usage)

> puzzle comes with a built-in default module, which is always initalized. The default module contains some basic functionalities and is available in any other namespace. [ Full reference ](https://puzzle-lang.github.io/modules)


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

## Comments

Comments can be written using `//`

```puzzle
// this is a comment
```


# Custom syntax

> Puzzle is a language that can dynamically be extended with custom syntax!

Besides being a simple language, puzzle is also a platform for custom syntax. 
Each syntax is delivered as a module, that can be used in any puzzle script with `use my_module.js`.


## Create a syntax

Building your own custom syntax is fairly simple. It's defined with a JavaScript object that follows a given structure.

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
module.exports = lang;
```

<b>Then use it in puzzle:</b>

```puzzle
use syntax.js;
echo "hello" and "word";
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

> This method can be used when a custom syntax is defined in the same scope as the puzzle script. The syntax variable must be prefixed with `var:`

```javascript
var syntax = {
  ...
}

puzzle.parse(`
 use var:syntax;
`)
````

## Publish syntax as module

Your custom syntax modules can be contributed to the official puzzle module repo.

Learn more: [ puzzle Module Repo](https://github.com/puzzlelang/puzzle-catalog)


# Examples

This is a collection of examples for using puzzle on different platforms.

> Before running any of these examples you should familiarize yourself with the [Installation Instructions]()

## CLI script

```shell
$ puzzle
> print "hello world"
```


## Browser script


```html
<html>
  <head>
  	<!-- Include puzzle -->
    <script src="https://cdn.jsdelivr.net/npm/puzzlelang@latest/puzzle.browser.js"></script>

    <!-- write your script -->
    <script type="text/x-puzzle">
      print "hello world";
    </script>
  </head>
</html>
```

## Web app


```html
<html>
  <head>
    <script src="https://cdn.jsdelivr.net/npm/puzzlelang@latest/puzzle.browser.js"></script>
  </head>
  <body>

    <script type="text/x-puzzle">
      // include the web module
      use "_catalog/web/index.js;";

      create div with id 123 and style "background:black;color:white";
      create button inside 123 with text "click me" and onclick "alert('i was clicked!')";
    </script>
  </body>
</html>
```


## Node.js script


```javascript
const puzzle = require('puzzle-lang');

puzzle.parse(`
  print "hello world";
`)
```


## Custom syntax

Let's create a custom little language that prints a simple input. We'll define the keyword `echo` that takes an input and displays it.

***Syntax as module file***

Creating custom language definitions is done using the following js object and save it as a file:

```javascript
//mylanguage.js

var syntax = {
	$: {
		my_namespace: {
			echo : {
				follow: ["{input}"],
				method: (ctx, input) {
					console.log(input)
				}
			}
		}
	}
}
```

"Use" your language as a module:

```puzzle
// myscript.pz

use mylanguage.js;

echo "hello";
```

***Syntax as javascript variable***


Create a custom syntax by defining it as a js object in the same scope as your puzzle script will run

For instance, in the browser:

```html
<html>
  <head>
    <script src="https://cdn.jsdelivr.net/gh/puzzle-lang/puzzle/puzzle.browser.js"></script>
    <script>
    	var mysyntax = {
    		$: {
				my_namespace: {
					echo : {
						follow: ["{input}"],
						method: (ctx, input) {
							console.log(input)
						}
					}
				}
			}
    	}
    </script>
  </head>
  <body>

    <script type="text/x-puzzle">
      // include the web module
      use var:mysyntax;

      echo "hello"
    </script>
  </body>
</html>
```