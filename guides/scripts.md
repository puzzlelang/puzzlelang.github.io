# How to use Scripts

Scripts are pieces of PUZZLE code, that can be reused many times. 

## Saved scripts

```puzzle
// A script
set SCRIPTNAME {CODE}

// example:
set sayMyName {
	// this code will be executed, when a script is called
	print "Peter"
}

// Run a saved script
run sayMyName
```

## Inline scripts

Inline scripts are not stored.

```puzzlelang
// inline script
run {CODE}

// example
run {print Peter}  
```