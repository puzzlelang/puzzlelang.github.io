# - Official PUZZLE modules -

These are official, tested modules. All modules are hosted on Github and can be used in puzzle like so:

`use MODULENAME`

# REST


```puzzle
use rest;
```

The REST modules allows you to make calls and requests to apis, websites and everythinig accessible on the internet.

You can use the following REST methods:

```puzzle
use rest

get from https://google.com as result
print result
```

GET
```puzzle
get from https://google.com as result
```

POST
```puzzle
post {message: "hello"} to https://domain.com
```

DELETE
```puzzle
delete from https://domain.com
```

PATCH
```puzzle
patch to https://domain.com
```


<!-- REST -->

<!-- UI -->
[filename](https://raw.githubusercontent.com/puzzlelang/puzzle-catalog/master/modules/ui/Readme.md ':include')
