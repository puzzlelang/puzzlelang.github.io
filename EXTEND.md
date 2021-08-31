# <a href="#"><i class="fa fa-chevron-left leto-mr"></i></a> Custom syntax

> Puzzle is a language that can dynamically be extended with custom syntax!

Besides being a simple language, puzzle is also a platform for custom syntax. 
Each syntax is delivered as a module, that can be used in any puzzle script with `use my_module.js`.

1. ***Write a module file: <u>mymodule.js</u>***
```javascript
syntax = {
  ...
}
```

2. ***Use it in your puzzle script***
```puzzle
use mymodule.js;
```


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

### Local file

```puzzle
use file.js;
```

### Remote

```puzzle
use https://somedomain.com/module.js;
```

### Inline variable

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