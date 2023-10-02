<br><br><br>
<div class="cover-main"><!-- _coverpage.md -->
<h1 class="header" style="padding: 0px !important;margin-left:0px;">An <span class="highlight-primary">abstract</span> programming language,<br> that runs in any <span class="highlight-primary">JS</span> runtime</h1>


<!--

***New articles***

<div id="articles"></div>

-->

[UI](UI.md) &nbsp; [Serverless](CLOUD.md) &nbsp; [Desktop](DESKTOP.md) &nbsp; [Games](GAMES.md) &nbsp; [Networking](NETWORKING.md)


<br>


## EXAMPLES


<pre v-pre="" data-lang="puzzle" style="
    width: 50%;
    text-align: left;
    margin-left: 25%;
    padding: 20px;
"><code class="lang-puzzle">// Simple UI

fetch from https://domain.com/whatever as result;

ui render box with id test and text result;</code></pre>


<pre v-pre="" data-lang="puzzle" style="
    width: 50%;
    text-align: left;
    margin-left: 25%;
    padding: 20px;
"><code class="lang-puzzle">// Simple Server

use server;

server on /home run (
  print "home was visited"
) and return (
  hello!
);</code></pre>


<pre v-pre="" data-lang="puzzle" style="
    width: 50%;
    text-align: left;
    margin-left: 25%;
    padding: 20px;
"><code class="lang-puzzle">// Simple Game

use ui;

ui root "#app";

ui render image with id player and src "https://media.tenor.com/GuYKt4Z_s9EAAAAi/mario-run.gif";

ui on key up ( ui get player and move up 15 );

ui on key down ( ui get player and move down 15 );

ui on key right ( ui get player and move right 15 );

ui on key left ( ui get player and move left 15 );</code></pre>

