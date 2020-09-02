var app = new Vue({
    el: '#app',
    methods: {
        clipboard: function(text) {
        	text = this.installInstruction;
            /* Get the text field */
            var el = document.createElement("input");
            el.style.display = 'none';
            document.body.appendChild(el)
            el.value = text;

            /* Select the text field */
            el.select();
            el.setSelectionRange(0, 99999); /*For mobile devices*/

            /* Copy the text inside the text field */
            document.execCommand("copy");

            this.copied = true;

            setTimeout(() => {
            	this.copied = false
            }, 2000)
        },
        showInstall: function(text){
        	this.installInstruction = text;
        },
        showExample: function(text){
            this.codeExample = text;
        }
    },
    data: {
        buildFeatured: [{title:'browser apps', icon: 'globe'}, {title:'terminal apps', icon: 'terminal'}, {title:'backends', icon: 'code'}, {title:'UIs', icon: 'window-restore'}, {title:'runner scripts', icon: 'robot'}, {title:'DSLs', icon: 'smile'}],
        featured: [{title:'browsers', icon: 'globe'}, {title:'backends', icon: 'server'}, {title:'terminal', icon: 'terminal'}, {title:'node', icon: 'code'}],
 /*       examples: [{title:"browser app", code: `
<script type="text/x-luke">
   print "hello world"
</script>
`},
{title:"backend", code: `
use express.luke.js;

get /test {}
`},
{title:"terminal apps", code: `
$ luke
> print "welcome..."
`},
{title:"UI", code: `
render (
    <div>hello world</div>
)

js ( ... )
`},
{title:"custom languages", code: `
use mylang.luke.js;

....
`},
{title:"custom CLIs", code: `
> add object with name test;
...
`}],*/
        examples: [{title:"Browser apps"},
{title:"Backends"},
{title:"Terminal apps"},
{title:"UIs"},
{title:"Custom languages"},
{title:"Custom CLIs"},
{title:"..."}],
    	copied:false,
        installFormat:'center',
        codeExample: "print 'check out some code examples'",
    	installInstruction:null,
    	showInstallOptions:false,
        currentPreview: 1,
        currentLang: 'Clean + Simple',
        langs: ['Clean + Simple', 'Extendable', 'Custom Syntax', 'CLI', 'Embeddable'],
        previewItems: [{ name: 'Objects', index: 1 }, { name: 'Behaviours', index: 2 }, { name: 'CRUD API', index: 3 }, { name: 'Extendable', index: 4 }]
    }
})