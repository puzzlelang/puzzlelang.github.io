# Building Blocks

Blocks are also a way to isolate instructions. A Block allows to span statements over multiple lines and can contain multiple statements. In PUZZLE, each block is processed individually...

In most programming languages, blocks are wrapped in different kinds of brackets - (...), {...}, [...].

```puzzle

print (			   ᐱ
	hello World	   |  Block
);				    ᐯ

<->
Delimeter

```

PUZZLE allows `(, {, ", '` for creating blocks. The following blocks are interpreted equal to one another:

```puzzle

print (   
	hello World
);

print "   
	hello World
";

print {   
	hello World
};

print ' 
	hello World
';

```

## Runtime

Code needs to be executed somewhere and somehow.

## functions

- built in

## data

## conditions

## loops

## algorythms

## Comments

Comments are a very important part of programming code. Comments are parts of a code, that are not processed and interpreted! They are used to define additional information about the code itself. In most languages, comments are initiated with `//`

```puzzle
// This is a comment, that will not be processed
print "This is a statement that will be processed."
```

