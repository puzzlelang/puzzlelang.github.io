<center style="width: 100%;">

<div class="cover_box">
	<br><br>

<div class="cover_codebox" id="2" style="display: block;">
<pre><code class="lang-puzzle" style="font-size:22px !important;color:#EEEEEE">use ui

render (
	&#60;div>Click the enter key&#60;/div>
)

on key enter (alert "enter was pressed")
</code></pre>
</div>

<div class="cover_codebox" id="3" style="display: none">
<pre><code class="lang-puzzle" style="font-size:22px !important;color:#EEEEEE">&#60;!-- Browser -->
&#60;script type="text/x-puzzle">
	print "i am runnning in the browser"
&#60;/script>

// Embedded
puzzle.parse("print hi")
puzzle.run("myfile.pz")

// CLI
puzzle> print hi

// Standalone
puzzle run myfile.pz
</code></pre>
</div>

<div class="cover_codebox" id="4" style="display: none">
<pre><code class="lang-puzzle" style="font-size:22px !important;color:#EEEEEE">// Use official module
use rest;

// Remote module
use https://domain.com/module.js

// Local module
use path/to/file.js
</code></pre>
</div>

<div class="cover_codebox" id="5" style="display: none">
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
</div>



<br>

<div class="scroll-h">
<a href="#/chapters/GUIDES?id=browser" class="bubble">Browser</a>
<a href="#/chapters/GUIDES?id=use-with-node" class="bubble">Node</a>
<a href="#/chapters/GUIDES?id=embedded-in-js" class="bubble">Embedded</a>
<a href="#/chapters/GUIDES?id=hosted-clouds" class="bubble">Hosted</a>
<a href="#/chapters/GUIDES" class="bubble">more</a>
</div>

<a href="#/README">

<br>
<span class=" fa fa-chevron-down"></span>
</b>
</a>

<!--div class="badge" onclick="showExample(1)">Example</div-->
<!--div class="dot" onclick="showExample(2)"></div>
<div class="dot" onclick="showExample(3)"></div>
<div class="dot" onclick="showExample(4)"></div>
<div class="dot" onclick="showExample(5)"></div-->

</div>

<br>
<br>


<a href="#/README" class="cover_box_article">
	<h3>Learn PUZZLE</h3>
	Now!
</a>
<a href="#/chapters/MODULES" class="cover_box_article click">
	<h3>Check out Modules</h3>
	Modules for many purposes
</a>

<br>


</center>
