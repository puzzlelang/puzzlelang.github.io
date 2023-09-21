# GET STARTED

## Browser

```html
<html>
  <head>
    <script src="https://cdn.jsdelivr.net/npm/puzzlelang@latest/puzzle.browser.js"></script>
  </head>
  <body>
    <script type="text/x-puzzle">
      use ui;

      ui render (
        <div>hello</div>
      )
    </script>
  </body>
</html>
```

## Node

```shell
npm i puzzlelang
```
```javascript
const puzzle = require("puzzlelang");
puzzle.parse('print hi');
```

## Other

[Playground](https://playcode.io/puzzlelang) 

[Online Runtime (Replit)](https://replit.com/@puzzlelang)