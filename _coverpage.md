<!-- _coverpage.md -->

<div style="height:200px"></div>
<span style="font-size: 40px;color:#b14aad">An abstract, extendable programming language
</span>


<center style="width: 100%;">
<div style="background: #111111;width:500px;text-align:left;padding:20px;margin:20px;border-radius:5px; display: inline-block;">
	<pre>
	<code class="lang-puzzle" style="font-size:25px !important;color:#EEEEEE">
<span style="color: grey">// Use in the browser</span>

&#60;script type="text/puzzle">
	alert "hi"
&#60;/script>
</code>
	</pre>
</div>
<div style="background: #111111;width:550px;text-align:left;padding:20px;margin:20px;border-radius:5px; display: inline-block;">
	<pre>
	<code class="lang-puzzle" style="font-size:25px !important;color:#EEEEEE">
<span style="color: grey">// Use local or remote modules</span>

use "https://domain.com/web.js"
create button with text "hi"
</code>
	</pre>
</div>
<div style="background: #111111;width:600px;text-align:left;padding:20px;margin:20px;border-radius:5px; display: inline-block;">
	<pre>
	<code class="lang-puzzle" style="font-size:25px !important;color:#EEEEEE">
<span style="color: grey">// Extend the language</span>

define token echo with
	method ( console.log(param) )
	and follow "{param}";

echo "hi"
</code>
	</pre>
</div>
<div style="background: #111111;width:600px;text-align:left;padding:20px;margin:20px;border-radius:5px; display: inline-block;">
	<pre>
	<code class="lang-puzzle" style="font-size:25px !important;color:#EEEEEE">
<span style="color: grey">// Use standalone</span>
$ puzzle run file.pz

<span style="color: grey">// or in Node</span>
puzzle.parse('print hi')
</code>
	</pre>
</div>
<div style="background: #111111;width:500px;text-align:left;padding:20px;margin:20px;border-radius:5px; display: inline-block;">
	<pre>
	<code class="lang-puzzle" style="font-size:25px !important;color:#EEEEEE">
<span style="color: grey">// Build anything</span>

set message "learn puzzle now";
print message;
</code>
	</pre>
</div>
</center>

<div style="text-align: center;color:#333333;">
		PUZZLE RUNS IN ANY JS ENVIRONMENT: <br><br>
		&nbsp; <span style=""><i class="fab fa-node-js"></i> Node,
		&nbsp; <i class="fa fa-globe"></i> Browser,
		&nbsp; <i class="fa fa-cloud"></i> Cloud Functions,
		&nbsp; <i class="fa fa-desktop"></i> Desktop,
		&nbsp; <i class="fa fa-mobile-alt"></i> PWA,
		&nbsp; ...
	</span>
	</div>

[Try](https://puzzlelang.org/puzzle-web)
[Get](chapters/PUZZLE?id=install)
[Guides](chapters/GUIDES)