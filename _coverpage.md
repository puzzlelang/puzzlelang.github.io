<!-- _coverpage.md -->

<div style="height:150px"></div>
<span style="font-size: 40px;color:#b14aad">An abstract programming language
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
<div style="color:white;font-size: 22px">Click the enter key</div>
<hr>
<pre><code class="lang-puzzle" style="font-size:22px !important;color:#EEEEEE">use ui

render (
	&#60;div>Click the enter key&#60;/div>
)

on key enter (alert "enter was pressed")
</code></pre>
</div>

<div class="cover_codebox" id="3" style="display: none">
<pre><code class="lang-puzzle" style="font-size:22px !important;color:#EEEEEE">use rest

get from https://puzzlelang.org as data;
print data;
</code></pre>
</div>

<div class="cover_codebox" id="4" style="display: none">
<pre><code class="lang-puzzle" style="font-size:22px !important;color:#EEEEEE">use ui

prompt "Whats your name" as name;

alert name;
</code></pre>
</div>

<div class="cover_codebox" id="5" style="display: none">
<div style="color:white;font-size: 22px">1 2 3</div>
<hr>
<pre><code class="lang-puzzle" style="font-size:22px !important;color:#EEEEEE">set numbers [1,2,3];
loop over numbers with number do (
	print number
)
</code></pre>
</div>


<div class="badge" onclick="showExample(1)">UI example</div>
<div class="badge" onclick="showExample(2)">HTML</div>
<div class="badge" onclick="showExample(3)">REST</div>
<div class="badge" onclick="showExample(4)">Interaction</div>
<div class="badge" onclick="showExample(5)">Loop</div>

<br>

<a href="#/README">

<br>
<span class=" fa fa-chevron-down"></span>
</b>
</a>
</center>
