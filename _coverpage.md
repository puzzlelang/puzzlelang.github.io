<!-- _coverpage.md -->

<div style="height:200px"></div>
<span style="font-size: 40px;color:#b14aad">An <i>abstract</i> programming language<br> that runs in any <i class="fab fa-js"></i> environment
</span>

<br>

<b>START NOW:</b>
<a href="#chapters/GUIDES" class="btn-primary">Build something <span class="fa fa-arrow-right"></span></a>

<br>

<center style="width: 100%;">

<div style="background: #111111;width:550px;text-align:left;padding:20px;margin:20px;border-radius:5px; display: block;">
	<pre>
	<code class="lang-puzzle" style="font-size:22px !important;color:#EEEEEE">
<span style="color: grey">// Abstract syntax examples</span>

use "https://domain.com/web.js"

create button with text "hi"


set message "learn puzzle now"
print message;


write file /test.txt "hi"

<span style="color: grey">// Extend the language</span>

define token echo with
	method ( console.log(param) )
	and follow "{param}";

<span style="color: grey">// Use it right away</span>
echo "hi"

<span style="color: grey">// And way more...</span>
</code>
	</pre>
</div>
<div style="background: #111111;width:600px;text-align:left;padding:20px;margin:20px;border-radius:5px; display: block;">
	<pre>
	<code class="lang-puzzle" style="font-size:25px !important;color:#EEEEEE">
<span style="color: grey">&#60;!--In the browser--></span>
&#60;script src="puzzle.browser.js" />
&#60;script type="text/x-puzzle">
	create button with text "click me";
&#60;/script>
</code>
	</pre>
</div>

<div style="background: #111111;width:600px;text-align:left;padding:20px;margin:20px;border-radius:5px; display: block;">
	<pre>
	<code class="lang-puzzle" style="font-size:25px !important;color:#EEEEEE">
<span style="color: grey">// In Node</span>
const puzzle = require('puzzlelang')
puzzle.parse('print hi')
</code>
	</pre>
</div>

<div style="background: #111111;width:600px;text-align:left;padding:20px;margin:20px;border-radius:5px; display: block;">
	<pre>
	<code class="lang-puzzle" style="font-size:25px !important;color:#EEEEEE">
<span style="color: grey"># Standalone</span>
$ npm i -g puzzlelang
$ puzzle run file.pz
</code>
	</pre>
</div>

</center>
<br><br>
<div style="text-align: center;color:#333333;">
		PUZZLE RUNS IN ANY JS ENVIRONMENT
	</span>
	</div>
