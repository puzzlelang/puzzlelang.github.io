# Modules


## About modules

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