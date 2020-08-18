# luke modules

A collection of official luke modules.

## How to use modules from here

You can directly load your required module remotely (without installation) from this repo or use it locally

> remote (no installation)

```luke
use https://raw.githubusercontent.com/luke-lang/luke-catalog/master/modules/<MODULE>/index.luke.js

// If you'd like to cache a remote module for future access, use the `permanent`:
use permanent https://raw.githubusercontent.com/luke-lang/luke-catalog/master/modules/<MODULE>/index.luke.js
```

> local

```luke
use path/to/<MODULE>.js
```


# Modules

| Module        | Description  |
| ------------- |-------------| 
| [Default (built-in)](...) | Default module that contains the basic luke syntax | 
| [REST]() | ... | 


# Add your module

You are welcome to contribute modules to the ecosystem with a PR.

In order to add your module to this repo, it must comply with the following conditions:

* Module has to be a folder under `/modules`
* Module main file must be called `index.luke.js`
* A proper module documentation (Readme.md) must be added to your module directory

> Different environments

If you have different bundles for different environments (like browser or node) you should name them so.

The Node.js compartible version shoule be called `index.luke.js`.
Other versions shoule be called like `browser.luke.js`. 