var app = new Vue({
    el: '#app',
    watch: {
        currentExample: function() {
            setTimeout(function() {
                hljs.initHighlighting.called = false;
                hljs.initHighlighting();
            }, 1)

        }
    },
    data: {
        currentExample: 0,
        showInstallInstructions: false,
        currentPreview: 1,
        currentLang: 'JS',
        langs: [ /*'JS', 'CLI'*/ ],
        previewItems: [{ name: 'Objects', index: 1 }, { name: 'Behaviours', index: 2 }, { name: 'CRUD API', index: 3 }, { name: 'Extendable', index: 4 }],
        examples: [
         { name: "Hello World", code: `
print (Hello World)
// or
print (
    Hello World
    multiline
)
// or
print "Hello World in quotes"
    ` },
    { name: "In Browser", code: `
&lt;html>
&lt;head>
    &lt;script src="https://cdn.jsdelivr.net/npm/puzzlelang/puzzle.browser.js" />
&lt;/head>
&lt;body>
    &lt;script type="text/x-puzzle">
        print "hello world";
    &lt;/script>
&lt;/body>
&lt;/html>
    ` },
     { name: "Web app", code: `
&lt;script type="text/x-puzzle">
    use web;
    create div with id 123;
    create button inside 123 with text "click me" and onclick "alert('i was clicked')"
&lt;/script>
&lt;script src="https://cdn.jsdelivr.net/npm/puzzlelang/puzzle.browser.js" />
    ` },
            { name: "Use modules", code: `
use https://domain.io/remote-email-module.js;
// or
use local-email-module.js

send email from peter@griffin.com to stewie@griffin.com with text "Hi there"
    ` },

     { name: "Custom laguage", code: `
// create your own language using a js object:
{
  echo: {
    follow: ["{param}", "$and"],
    method: function(ctx, param){
      console.log(param)
    }
  },
  and: {
    follow: ["$echo"],
    method: function(ctx, param){}
  }
}

// in puzzle, use your language as module
use mylang.js;
echo hello and echo world;
    ` }]
    }
})