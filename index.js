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
        featured: [],
        examples: [/*{
            title: 'Abstract an API',
            code: `
use 'https://rest.luke.js';

post {name: "Peter"}
    to "http://api.com";
            `
        }*/],
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