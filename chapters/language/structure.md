# An abstract language

What is a language at all? A Language is a communication format, most notably used by us people. It is used to transfer information from one person to another.

Computers work on the same principle. (Programming-) Language is used to transfer information from a user (developer) to the computer. The computer then processes that information.

# Language philosophy

Every programming language, just like every real (spoken) language is based upon two principles:

* Syntax (structure)
* Meaning (semantics)

Syntax is the grammar. It defines that the word "hello" is written as "hello", not "hleo".

Semanticy defines, that the word "hello" means "hello", not "peanut butter".

Every programming language comes with a predefined set of words and defines, how these words are written. Just like the english language comes with all the english words and how they are spelled. Each word, or the combination of different words form a meaning (semantics). 

> For instance, the phrase ***"how are you?"*** in english means that <u>one participator</u> in the communication is interested in how the <u>other patricipator</u> is doing. Thats the meaning of the combination of these words. 

> In a programming language the phrase ***"print('hello')"*** means that <u>one participator</u> of the communication (the developer) is handing over the information to display the text "hello" to the <u>other participator</u> (the computer).


# Abstract language structure

So, what is an abstract programming language? It's a real programming language, that uses abstraction in both syntax and semantics.

Most programming languages use real words in their syntax definitions, like `if`, `else`, `function`, `print`. And these languages put these words together in a logical way (in order to form a meaning - semantics):

Example: a condition

```javascript
if(3 > 2) {
	console.log('yes')
} else {
	console.log('no')
}
```

This piece of code checks if the number 3 is larger than the number 2. If is's really larger, it outputs the word 'yes'. If otherwise, it outputs the word 'no'.

This code comes with different parts. It contains:

* Words: `if`, `else`, `console`, `log`
* Dots: "console`.`log"
* Brackets: `(`, `)`, `{`, `}`
* Line Breaks

Wouldn't it be easier if that code was something like this:

```puzzle
if 3 is larger than 2 then print yes otherwise print no
```

Of course, this is way easier to understand, since we use "natural language". The challenge in natural language, howewer is that phrases with the same meaning (semantics) can be expressed using different structures (syntax).

* How are you?
* How are you doing?
* How is it going?

These phrases all mean the same, but are written differently.

The condition above could also be written in different ways.

```puzzle
if 3 is larger than 2, print yes,otherwise print no.
```


```puzzle
if 3 is bigger than 2 print yes. if it is not print no.
```

```puzzle
if the number 3 is larger than the number 2 print yes. if it is not print no.
```

Different syntax is easy to understand for humans, but not so easy for a computer! Computers need predictable syntax within a code in order to understand it. So in an abstract coding language, it should be possible to write code in different ways while still having the same meaning.

> An abstract programming language should be capable of understanding a phrase with certain words missing and/or a different word order. The most important words, however must be present (like 'if' or 'print')
