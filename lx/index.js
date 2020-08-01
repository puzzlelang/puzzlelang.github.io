const bus = new Vue();
const lxhtmlBus = new Vue();
const fs = new LightningFS('fs');

var isObject = (a) => {
    return (!!a) && (a.constructor === Object);
};

// overwrite console log and delegate arguments to ui, since luke output comes through it.
console.info = function() {
    var args = Array.from(arguments);
    var i;
    for (i = 0; i < args.length; i++) {
        if (Array.isArray(args[i])) {
            args[i] = JSON.stringify(args[i], null, 4);
        }

        if (isObject(args[i])) args[i] = JSON.stringify(args[i], null, 4);
    }


    bus.$emit('luke-response', args.join(" "))
}

var emojis = [
    '😄', '😃', '😀', '😊', '😉', '😍', '😘', '😚', '😗', '😙', '😜', '😝', '😛', '😁', '😂', '😅', '😆', '😋', '😎', '😲', '😈', '😇', '👲', '👳', '👮', '👷', '👦', '👧', '👨', '👩', '👴', '👵', '👱', '👼', '👸', '😺', '😸', '😻', '😽', '😼', '😹', '🙈', '🙉', '🙊', '💀', '👽', '💩', '🔥', '✨', '🌟', '💫', '💥', '💢', '💦', '💧', '💨', '👂', '👀', '👃', '👅', '👄', '👍', '👌', '👊', '✊', '👋', '✋', '👆', '🙌', '🙏', '👏', '💪', '🚶', '🏃', '💃', '👫', '👪', '👬', '👭', '💏', '💑', '👯', '🙆', '🙅', '💁', '🙋', '💇', '💅', '👰', '🙎', '🙇', '🎩', '👑', '👒', '👟', '👞', '👡', '👠', '👢', '👕', '👔', '👚', '👗', '🎽', '👖', '👘', '👙', '💼', '👜', '👝', '👛', '👓', '🎀', '🌂', '💄', '💛', '💙', '💜', '💚', '💗', '💓', '💕', '💖', '💞', '💘', '💌', '💋', '💍', '💎', '👤', '👥', '💬', '👣', '💭', '🐶', '🐺', '🐱', '🐭', '🐹', '🐰', '🐸', '🐯', '🐨', '🐻', '🐷', '🐽', '🐮', '🐗', '🐵', '🐒', '🐴', '🐑', '🐘', '🐼', '🐧', '🐦', '🐤', '🐥', '🐣', '🐔', '🐍', '🐢', '🐛', '🐝', '🐜', '🐞', '🐌', '🐙', '🐚', '🐠', '🐟', '🐬', '🐳', '🐋', '🐄', '🐏', '🐀', '🐃', '🐅', '🐇', '🐉', '🐎', '🐐', '🐓', '🐕', '🐖', '🐁', '🐂', '🐲', '🐡', '🐊', '🐫', '🐪', '🐆', '🐈', '🐩', '🐾', '💐', '🌸', '🌷', '🍀', '🌹', '🌻', '🌺', '🍁', '🍃', '🍂', '🌿', '🌾', '🍄', '🌵', '🌴', '🌲', '🌳', '🌰', '🌱', '🌼', '🌐', '🌞', '🌝', '🌚', '🌑', '🌒', '🌓', '🌔', '🌕', '🌖', '🌗', '🌘', '🌜', '🌛', '🌙', '🌍', '🌎', '🌏', '🌋', '🌌', '🌠', '⭐', '☀', '⛅', '⛄', '🌀', '🌁', '🌈', '🌊', '🎍', '💝', '🎎', '🎒', '🎓', '🎏', '🎆', '🎇', '🎐', '🎑', '🎃', '👻', '🎅', '🎄', '🎁', '🎋', '🎉', '🎊', '🎈', '🎌', '🔮', '🎥', '📷', '📹', '📼', '💿', '📀', '💽', '💾', '💻', '📱', '☎', '📞', '📟', '📠', '📡', '📺', '📻', '🔊', '🔉', '🔈', '🔇', '🔔', '🔕', '📢', '📣', '⏳', '⌛', '⏰', '⌚', '🔓', '🔒', '🔏', '🔐', '🔑', '🔎', '💡', '🔦', '🔆', '🔅', '🔌', '🔋', '🔍', '🛁', '🛀', '🚿', '🚽', '🔧', '🔩', '🔨', '🚪', '🚬', '💣', '🔫', '🔪', '💊', '💉', '💰', '💴', '💵', '💷', '💶', '💳', '💸', '📲', '📧', '📥', '📤', '✉', '📩', '📨', '📯', '📫', '📪', '📬', '📭', '📮', '📦', '📝', '📄', '📃', '📑', '📊', '📈', '📉', '📜', '📋', '📅', '📆', '📇', '📁', '📂', '📌', '📎', '📏', '📐', '📕', '📗', '📘', '📙', '📓', '📔', '📒', '📚', '📖', '🔖', '📛', '🔬', '🔭', '📰', '🎨', '🎬', '🎤', '🎧', '🎼', '🎵', '🎶', '🎹', '🎻', '🎺', '🎷', '🎸', '👾', '🎮', '🃏', '🎴', '🀄', '🎲', '🎯', '🏈', '🏀', '⚽', '⚾', '🎾', '🎱', '🏉', '🎳', '⛳', '🚵', '🚴', '🏁', '🏇', '🏆', '🎿', '🏂', '🏊', '🏄', '🎣', '☕', '🍵', '🍶', '🍼', '🍺', '🍻', '🍸', '🍹', '🍷', '🍴', '🍕', '🍔', '🍟', '🍗', '🍖', '🍝', '🍛', '🍤', '🍱', '🍣', '🍥', '🍙', '🍘', '🍚', '🍜', '🍲', '🍢', '🍡', '🍳', '🍞', '🍩', '🍮', '🍦', '🍨', '🍧', '🎂', '🍰', '🍪', '🍫', '🍬', '🍭', '🍯', '🍎', '🍏', '🍊', '🍋', '🍒', '🍇', '🍉', '🍓', '🍑', '🍈', '🍌', '🍐', '🍍', '🍠', '🍆', '🍅', '🌽', '🏠', '🏡', '🏫', '🏢', '🏣', '🏥', '🏦', '🏪', '🏩', '🏨', '💒', '⛪', '🏬', '🏤', '🌇', '🌆', '🏯', '🏰', '🗽', '🎡', '⛲', '🎢', '🚢', '⛵', '🚤', '🚣', '⚓', '🚀', '✈', '💺', '🚁', '🚂', '🚊', '🚉', '🚞', '🚆', '🚄', '🚅', '🚈', '🚇', '🚝', '🚋', '🚃', '🚎', '🚌', '🚍', '🚙', '🚘', '🚗', '🚕', '🚖', '🚛', '🚚', '🚨', '🚓', '🚔', '🚒', '🚑', '🚐', '🚲', '🚡', '🚟', '🚠', '🚜', '💈', '🚏', '🎫', '🚦', '🚥', '⚠', '🚧', '🔰', '⛽', '🏮', '🎰', '♨', '🗿', '🎪', '🎭', '📍', '🚩', '🔝', '🔚', '🔙', '🔛', '🔜'
];

var app = new Vue({
    el: '#app',
    data: {
        welcomeMsg: false,
        msg: 'Hello Vue!',
        content: "",
        output: "",
        tabs: {},
        files: {},
        projects: {},
        currentTab: null,
        currentProject: null,
        customContent: {
            html: null,
            style: null,
            js: null
        }
    },
    methods: {

        // create random id (for initial project generation)
        makeid: function(length) {

            if ((window.navigator.platform.match("Mac") ? window.event.metaKey : window.event.ctrlKey)) return emojis[Math.floor(Math.random() * emojis.length)];

            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
        },

        changeProjectName: function(k) {
            var self = this;
            var newName = prompt('Name', k);

            if (!newName) return;

            fs.rename('/'+k, '/'+newName, function(err, data){
                if(!err) {
                    
                    Object.keys(self.files).forEach(function(t) {
                            if (self.files[t].project == k) self.files[t].project = newName;
                        })

                        delete self.projects[k];

                Vue.set(self.projects, newName, true)

                }
            })

        },

        // run a luke script
        runCode: function(code) {
            this.output = '';
            console.log('running', code)
            luke.parse(code);
        },

        addProject: function(name, cb) {
            if (!name) name = this.makeid(3)
                var self = this;
           
            fs.mkdir('/'+name, {}, function(err, data){
                if(!err) {
                     Vue.set(self.projects, name, true)
                    self.currentTab = name;
                    self.useProject(name);
                    if(cb) cb();
                }
            })

            //localStorage.setItem('lxp_' + name, name)
            
        },

        useProject: function(k) {
            var self = this;

            fs.readdir('/'+k, {}, function(err, data){
                if(!err) {
                    self.currentProject = k;
                    self.content = ""
                    self.output = "";
                    bus.$emit('set-content', "");
                }
            })
  
        },

        deleteProject: function(k) {
            var self = this;

            fs.readdir('/'+k, {}, function(err, data){

                var counter = data.length;

                console.log(data)

                data.forEach(function(file){
                    console.log('deleting', '/'+k,+'/'+file)

                    fs.unlink('/'+k+'/'+file, {}, function(err, data){
                        if(!err) {
                            counter--;
                            console.log('c', counter)
                            Vue.delete(self.files, k);
                        } 

                        if(counter == 0) {

                         fs.rmdir('/'+k, { }, function(err, data){
                            if(!err) {
                                console.log('deleted project', k)
                                  Vue.delete(self.projects, k);
                                    
                            } 
                        })
                       }
                    })
                })
            })
        },

        addFile: function(k, c, o, t) {

            console.log(arguments);

            if (!k) k = Math.random();
            var self = this;

            var file = {
                content: c,
                project: t
            };

            fs.writeFile('/'+t+'/'+k, new TextEncoder("utf-8").encode(c),  function(err, data){
                console.log('/'+t+'/'+k, JSON.stringify(file), err, data)
                if(!err) {
                     Vue.set(self.files, k, file)

                    self.currentTab = k;
                    self.useFile(k)

                } else alert(err)
            })

        },

        useFile: function(k) {

            this.content = this.files[k].content;
            bus.$emit('set-content', this.content);
            this.currentTab = k;
            this.currentProject = this.files[k].project;
            if ((this.contenx || "").includes('lx_autorun')) this.runCode(this.contenx);
        },

        deleteFile: function(k) {
            var self =  this;
            var project = self.files[k].project;

            fs.unlink('/'+project+'/'+k, {}, function(err, data){
                if(!err) {
                    
                    Vue.delete(self.files, k);
                    self.content = "";
                    self.output = "";
                    bus.$emit('set-content', self.content);

                }
            })

        },

        useTab: function(k) {

            if (!this.files[k]) return;
            this.content = this.files[k].content;
            bus.$emit('set-content', this.content);

            Vue.set(this.tabs, k, { content: this.content });

            this.currentTab = k;
            if ((this.contenx || "").includes('lx_autorun')) this.runCode(this.contenx);

            localStorage.setItem('lxt_' + k, true)
        },

        deleteTab: function(k) {
            Vue.delete(this.tabs, k);
            localStorage.removeItem('lxt_' + k);
            this.content = "";
            this.output = "";
            bus.$emit('set-content', this.content);
        },

        saveContent: function() {
            var self = this;

            if (this.currentTab) {

                var file = {
                    content: this.content,
                    project: this.currentProject
                };

                fs.writeFile('/'+this.currentProject+'/'+this.currentTab, new TextEncoder("utf-8").encode(this.content), function(err, data){
                if(!err) {
                    Vue.set(self.files, self.currentTab, {content:  self.content, project: self.currentProject})
                    Vue.set(self.tabs, self.currentTab, {content:  self.content, project: self.currentProject})

                } else alert(err);
            })

            
            } else this.addFile(undefined, this.content, this.output, this.currentProject)
        },
        hideWelcomeMsg: function() {
            localStorage.setItem('welcomeMsgHidden', true)
            this.welcomeMsg = false;
        }
    },
    created: function() {

        var self = this;

        console.info("Welcome to LX");

        if (!localStorage.getItem('welcomeMsgHidden')) this.welcomeMsg = true;

        // initialize ace.js editor
        document.addEventListener('DOMContentLoaded', function() {

            var editor = ace.edit("editor");
            editor.setTheme("ace/theme/monokai");
            editor.session.setMode("ace/mode/javascript");
            editor.setOption("showPrintMargin", false);
            editor.setOption("fontSize", '15px');


            editor.on('change', (arg, activeEditor) => {
                Vue.set(self, 'content', activeEditor.getSession().getValue());

                const aceEditor = activeEditor;
                const newHeight = aceEditor.getSession().getScreenLength() *
                    (aceEditor.renderer.lineHeight + aceEditor.renderer.scrollBar.getWidth());
                aceEditor.container.style.height = `${newHeight}px`;
                aceEditor.resize();
            });

            bus.$on('set-content', function(k) {
                console.log(editor.session)
                editor.getSession().setValue(k)
            })


        }, false);

        // display output from luke script
        bus.$on('luke-response', function(c) {
            self.output += '<br>' + c
        })



        fs.readdir('/', {}, function(err, data){
            data.forEach(function(project){
                if (!self.projects[project]) Vue.set(self.projects, project, true);

                fs.readdir('/'+project, {}, function(err, data){
                    if(err) return;
                    data.forEach(function(file){

                     
                        fs.readFile('/'+project+ '/'+ file, function(err, data){
                            if(!err){
                                
                                Vue.set(self.files, file, {content: new TextDecoder("utf-8").decode(data), project: project});
                            }
                        });

                    })

                  
                })  
            })

                if (data.length == 0) {
                            self.addProject('HME', function(){
                                self.addFile('default', '', '', 'HME');
                            });
                            
                        }

        })

        /*
        // add saved tabs/projects on start
        Object.keys(localStorage).forEach(function(k) {
            if (k.indexOf('lx_') == 0) {
                var file = JSON.parse(localStorage.getItem(k));
                if (!self.files[k.substring(3)]) self.addFile(k.substring(3), file.content, file.output, file.project)
            }

            if (k.indexOf('lxt_') == 0) {
                var tab = JSON.parse(localStorage.getItem(k));
                if (!self.tabs[k.substring(3)]) self.useTab(k.substring(4), tab.content, tab.output, tab.project)
            }

            if (k.indexOf('lxp_') == 0) {
                var project = localStorage.getItem(k);
                if (!self.projects[project]) self.addProject(project);
            }
        })
        */

      

        // key handlers for save, run and add tab
        document.addEventListener("keydown", function(e) {
            if ((window.navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey) && e.keyCode == 83) {
                e.preventDefault();
                self.saveContent();
            }

            if ((window.navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey) && e.keyCode == 84) {
                e.preventDefault();
                self.addFile(undefined, "", "", self.currentProject);
            }

            if ((window.navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey) && e.keyCode == 13) {
                e.preventDefault();
                console.log(self.content);
                self.runCode(self.content)
            }
        }, false);


        // lxhtml specific: get custom code to render
        lxhtmlBus.$on('custom-content', function(content) {
            console.log(content);
            self.customContent.html = content.html;
            self.customContent.style = content.style;
            self.customContent.js = content.js;

            new Function(content.js)();
        })

    }
})