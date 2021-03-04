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

## syntax

The puzzle syntax is designed to be simple and easily understandable for developers and non-developers. puzzle scripts are built up on different statements that execute something in the background.
Each statement consists of simple, mostly natual word-based commands, like `write file hello.txt 'world';`

## statements

puzzle scripts are split up into multiple statements, delimited by a semicolon (`;`). 
Each statement can be single line or multiline, as long as it terminates with a semicolon.

```puzzle
print "this is a single line stamement. It ends with a semicolon";

print (
	this is a multiline statement. It also ends with a semicolon.
);
```

## literals

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


## comments

Comments can be written using `//`

```puzzle
// this is a comment
```

## files

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

## conditions

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

## loops

Loops are for repeating code. They can be written as `while CONDITION-LITERAL do CODE-LITERAL`

```puzzle
// single-part literal condition
while 1>0 do (print running);

// multi-part literal condition
while (1<2 OR 2==2) do {
  print true
};
```

## javascript code

Executes JavaScript code using `js`

```puzzle
js (
	console.log('I am JavaScript!')
)
```

## reusing code

puzzle scripts can be included into other puzzle scripts for code reusage using `include`

```puzzle
// local
include otherscript.puzzle;

or remote
include https://domain.com/otherscript.puzzle;
```

## variables

Variables are set using the `var` keyword.

```puzzle
var name Peter;
print name;
// will output Peter
```

## functions

Functions are defines with `func`.

```puzzle
func sayHello (param) { print param }

//or

func sayHello (param) { 
  print param 
}

sayHello(hello);
```

## modules


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


## namespaces

Since different functionality comes from different modules, it's important to distinguish module-specific code. This is done by setting a namespace using the `ns` keyword.

```puzzle
ns mynamespace;
// namespace will be available here
```
A namespace will be active until another one is set using `ns`.

Note, that after loading a module using `use` will automatically set that modules namespace for you.

```puzzle
use mymodule.puzzle.js;
// the mymodule namespace will automatically bbe available here.
```