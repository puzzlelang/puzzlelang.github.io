# Node.js

To run puzzle on a server, use Node. 

***Install***

```shell
npm i puzzlelang
```

***Run puzzle files***

```puzzle
// puzzle file: test.pz
print hi!
```

```javascript
const puzzle = require("puzzlelang");
puzzle.run('test.pz');
```

***Run inline***

```javascript
const puzzle = require("puzzlelang");
puzzle.parse('print hi');
```