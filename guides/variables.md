# How to use Variables

Variables are a core component of any programming language. They allow you to store information of any kind. Variables consist of a name and a value. The value can be of different data types.
Variables are actice, as long as your program is running.

## Basics

In it's simplest form, vars are defined using:

```puzzlelang
set VARIABLENAME VALIABLEVALUE;

// example:
set name Peter;
```

## Local Variables

PUZZLE offers a way, to make variables persistent. Meaning, that certain variables can be stored locally. They will still be there, when your program is restarted:

```puzzlelang
set local VARIABLENAME VARIABLEVALUE;

//example:
set local active true;
```

## Simple Datatypes

Information stored with varibales can be of different types. Like Text, Number and more. 


```puzzlelang
// Text
set name Peter

// Text (multiple words - wrapped in "" or () or {})
set fullName "Peter Griffin"
set fullName (Peter Griffin)
set fullName {Peter Griffin}
```

```puzzlelang
// Number
set age 40
set price 12.60
```

```puzzlelang
// Boolean (true or false)
set active true
set invisible false
```

## Multidimentional Datatypes

Objects and Arrays can be used to store more informaion in one single variable

```
// Object (value written with {})
set person {
	name: "Peter"
}

// or empty
set item {}

// add information
set person.age 41

// change information
set person.name "Peter Griffin"

// Access information (using dots)
print person.name
```

```puzzlelang
// Arrays (list of values)
set fuits ["Bananas", "Apples"]

// or empty
set vegetables []

// operations TBD...
```