# Build a custom syntax

PUZZLE is a platform, that can load any custom syntax.
Custom syntax is build, using simple JavaScript.

[filename](code-editor.md ':include')

## Directory Structure

Inside your Code Editor, create a JS file, that holds your module.

* mymodule.js
* index.pz

## JavaScript File

Create a file with the following structure:

```javascript
var syntax = {
  mymodule: { // name of your language!
    echo: { // a token
      follow: ["{param}", "$and"], // follow tokens
      method: function(ctx, param){
        // js method thats called when the token is parsed
        console.log(param)
      }
    }
  }
}
```

## Use your language in PUZZLE

```puzzle
use myfile.js;

mymodule.echo "Hello World";
```