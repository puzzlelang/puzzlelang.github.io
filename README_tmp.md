<div class="cover-main"><!-- _coverpage.md -->
<h1 class="header" style="padding: 0px !important;margin-left:0px;"><span class="highlight-primary">Abstract</span> programming in JavaScript for any purpose.</h1>


<br>

<!--

***New articles***

<div id="articles"></div>

-->


<!-- tabs:start -->

#### **Frontend**

```javascript
fetch.from('https://domain.com/whatever').as('result')

ui.render('box').id('test').text(result)
```

#### **Backend**

```javascript
use('server');

server.on('/home').do(() => {
  return "hello"
})
```

#### **Game**

```javascript
use ui;

ui root "#app";

set mariogif "https://media.tenor.com/GuYKt4Z_s9EAAAAi/mario-run.gif";

ui render image with id player and src mariogif;

ui on key up (
    ui get player and move up 15;
);

ui on key down (
    ui get player and move down 15;
);

ui on key right (
    ui get player and move right 15;
);

ui on key left (
    ui get player and move left 15;
);
```

#### **CLI**

Install
```shell
npm i puzzlelang -g
```

Shell
```shell
$ puzzle
> print hello;
```

Inline
```shell
$ puzzle run "print('hello')"
```


#### **Browser**

```html
<html>
  <head>
    <script src="https://cdn.jsdelivr.net/npm/puzzlelang@latest/puzzle.browser.js"></script>
  </head>
  <body>
    <script type="text/javascript">
      use('ui');
      ui.render(``
        <div>hello</div>
      `)
    </script>
  </body>
</html>
```

#### **Node**

```shell
npm i puzzlelang
```

```javascript
const puzzle = require("puzzlelang");

print('hello from puzzle')
```

<br>

***Other***

[Playground](https://playcode.io/puzzlelang) 

[Online Runtime (Replit)](https://replit.com/@puzzlelang)

<!-- tabs:end -->

<br>
<br>

[filename](https://raw.githubusercontent.com/puzzlelang/puzzle/refs/heads/master/README.md ':include')