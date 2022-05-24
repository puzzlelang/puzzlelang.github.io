<!-- _coverpage.md -->

<div style="height:150px"></div>
<span style="font-size: 40px;color:#b14aad">An abstract, extendable programming language
</span>

<br>

<br>

<center style="width: 100%;">


<!--iframe src="https://puzzlelang.org/run" style="border: none;width:800px;height: 500px;max-width:100%;text-align:left;padding:0px;margin:0px;border-radius:5px; display: block;"></iframe-->


<div class="cover_codebox" id="1">
<a href="#chapters/GUIDES" class="btn-primary">Get started</a>
<pre><code class="lang-puzzle" style="font-size:22px !important;color:#EEEEEE">use ui

create button with text "Get started"
</code></pre>
</div>


<div class="cover_codebox" id="2" style="display: none">
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
</div>
<div class="cover_codebox" id="5" style="display: none">
<pre><code class="lang-puzzle" style="font-size:22px !important;color:#EEEEEE">// Puzzle file
use mysyntax;
say hi
</code></pre>
</div>


<div class="badge" onclick="showExample(1)">Example</div>
<div class="badge" onclick="showExample(2)">Abstract syntax</div>
<div class="badge" onclick="showExample(3)">Any platform</div>
<div class="badge" onclick="showExample(4)">Modules</div>
<div class="badge" onclick="showExample(5)">Customize with JS</div>

<br>

<a href="#/README">

<br>
<span class=" fa fa-chevron-down"></span>
</b>
</a>
</center>
