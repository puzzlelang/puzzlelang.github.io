# Run PUZZLE on Node

If you haven't installed Node.js yet, get it here

## 1. Install PUZZLE

```shell
npm i puzzlelang
```

## 2. Write code

### 2.1 Inline PUZZLE 

```javascript
const puzzle = require("puzzlelang");
puzzle.parse('print hi');
```

### 2.2 PUZZLE files

```javascript
const puzzle = require("puzzlelang");
puzzle.run('myfile.pz');
```

```puzzle
// myfile.pz
print hi;
```

## 3. Run

```shell
node index.js
```