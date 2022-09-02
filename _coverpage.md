<center style="width: 100%;">

<div class="cover_box">
	<br><br>

<!--div class="cover_codebox" id="1" style="display: block;">
  <iframe src="https://abstractcode.dev" style="border:none;width:800px;position:relative;left:-100px;height:300px"></iframe>
</div-->
<div class="cover_codebox" id="2" style="display: block;">
<pre><code class="lang-puzzle" style="font-size:22px !important;color:#EEEEEE">&#60;script type="text/x-puzzle">
  
  use ui

  render (
  	&#60;div>Click the enter key&#60;/div>
  )

  on key enter (alert "enter was pressed")

&#60;/script>
</code></pre>
<!--center>
  <a href="#/chapters/GUIDES?id=browser" class="btn">Start on Browser</a>
</center-->
</div>

<div class="cover_codebox" id="3" style="display: none">
<pre><code class="lang-puzzle" style="font-size:22px !important;color:#EEEEEE">
// Embedded
let puzzle = require('puzzlelang')
puzzle.run("myfile.pz")

// CLI
puzzle> print hi

// Standalone
puzzle run myfile.pz
</code></pre>
<!--center>
  <a href="#/chapters/GUIDES?id=use-with-node" class="btn">Start on Node.js</a>
  <a href="https://www.npmjs.com/package/puzzlelang" class="btn">npm</a>
</center-->
</div>

<div class="cover_codebox" id="4" style="display: none">
<pre><code class="lang-puzzle" style="font-size:22px !important;color:#EEEEEE">// Run a puzzle script inside some JS context
let puzzle = require('puzzlelang')
var name = "Grace";

puzzle.parse("print name")
</code></pre>
<!--center>
  <a href="#/chapters/GUIDES?id=embedded-in-js" class="btn">Embed</a>
</center-->
</div>

<div class="cover_codebox" id="5" style="display: none">
<pre><code class="lang-puzzle" style="font-size:22px !important;color:#EEEEEE">// Use in hosted environments like Replit.com ot others
</code></pre>
<img src="assets/replit.png">
<!--center>
  <a href="#/chapters/GUIDES?id=hosted-clouds" class="btn">Explore Clouds</a>
</center-->
</div>


<div class="cover_codebox" id="6" style="display: none">
<pre><code class="lang-puzzle" style="font-size:22px !important;color:#EEEEEE">// Use official module
use rest;

// Remote module
use https://domain.com/module.js

// Local module
use path/to/file.js
</code></pre>
<!--center>
  <a href="#/chapters/MODULES" class="btn">Explore official modules</a>
</center-->
</div>


<div class="cover_codebox" id="7" style="display: none">
<pre><code class="lang-puzzle" style="font-size:22px !important;color:#EEEEEE">// mysyntax.js
var syntax = {
  supermodule: {
     say: {
       follow: ["{data}"],
       method: (ctx, data) => {
         alert(data)
       }
     }
  }
}
</code></pre>
<br><br>
<pre><code class="lang-puzzle" style="font-size:22px !important;color:#EEEEEE">// Puzzle file
use mysyntax;
say hi
</code></pre>
<!--center>
  <a href="#/README?id=custom-syntax" class="btn">Learn more</a>
</center-->
</div>


<br>

<div class="dot" onclick="showExample(2)"></div>
<div class="dot" onclick="showExample(3)"></div>
<div class="dot" onclick="showExample(4)"></div>
<div class="dot" onclick="showExample(5)"></div>
<div class="dot" onclick="showExample(6)"></div>
<div class="dot" onclick="showExample(7)"></div>
<!--div class="scroll-h">
<!-div class="bubble" onclick="showExample(1)">Play</div->
<div class="bubble" onclick="showExample(2)">Browser</div>
<div class="bubble" onclick="showExample(3)">Node</div>
<div class="bubble" onclick="showExample(4)">Embedded</div>
<div class="bubble" onclick="showExample(5)">Hosted</div>
<div class="bubble" onclick="showExample(6)">Modules</div>
<div class="bubble" onclick="showExample(7)">Customize</div>
<a href="#/chapters/GUIDES" class="bubble">more...</a>
</div-->
<br>


<a href="#/README">

<br>
<span class=" fa fa-chevron-down"></span>
</b>
</a>

<!--div class="badge" onclick="showExample(1)">Example</div-->

</div>


<!--div class="scroll-h">
<b>START: &nbsp; </b> 
<a href="#/chapters/GUIDES?id=browser" class="bubble">Browser</a>
<a href="#/chapters/GUIDES?id=use-with-node" class="bubble">Node</a>
<a href="#/chapters/GUIDES?id=embedded-in-js" class="bubble">Embedded</a>
<a href="#/chapters/GUIDES?id=hosted-clouds" class="bubble">Hosted</a>
<a href="#/chapters/GUIDES" class="bubble">more</a>
</div-->

<!--br>


<a href="#/README" class="cover_box_article">
	<h3>Learn PUZZLE</h3>
	Now!
</a>
<a href="#/chapters/MODULES" class="cover_box_article click">
	<h3>Check out Modules</h3>
	Modules for many purposes
</a>

<br-->


</center>
