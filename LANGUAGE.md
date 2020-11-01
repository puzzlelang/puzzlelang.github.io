# Puzzle syntax

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

## writing code

Puzzle code runs on javascript with the puzzle runtime. Code can be written embedded or as standalone.

### Standalone

Standalone scripts can be saved as files and run with the puzzle runtime:

```shell
puzzle my-script.pz
```

### reusing code

puzzle scripts can be included into other puzzle scripts for code reusage using `include`

```puzzle
// local
include otherscript.puzzle;

or remote
include https://domain.com/otherscript.puzzle;
```