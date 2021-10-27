const bus = new Vue();
const lxhtmlBus = new Vue();

var isObject = (a) => {
    return (!!a) && (a.constructor === Object);
};

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

window.puzzle.output = function() {
    var args = Array.from(arguments);
    var i;
    for (i = 0; i < args.length; i++) {
        if (Array.isArray(args[i])) {
            args[i] = JSON.stringify(args[i], null, 4);
        }

        if (isObject(args[i])) args[i] = JSON.stringify(args[i], null, 4);
    }


    bus.$emit('puzzle-response', args.join(" "))
}


var emojis = [
    '😄', '😃', '😀', '😊', '😉', '😍', '😘', '😚', '😗', '😙', '😜', '😝', '😛', '😁', '😂', '😅', '😆', '😋', '😎', '😲', '😈', '😇', '👲', '👳', '👮', '👷', '👦', '👧', '👨', '👩', '👴', '👵', '👱', '👼', '👸', '😺', '😸', '😻', '😽', '😼', '😹', '🙈', '🙉', '🙊', '💀', '👽', '💩', '🔥', '✨', '🌟', '💫', '💥', '💢', '💦', '💧', '💨', '👂', '👀', '👃', '👅', '👄', '👍', '👌', '👊', '✊', '👋', '✋', '👆', '🙌', '🙏', '👏', '💪', '🚶', '🏃', '💃', '👫', '👪', '👬', '👭', '💏', '💑', '👯', '🙆', '🙅', '💁', '🙋', '💇', '💅', '👰', '🙎', '🙇', '🎩', '👑', '👒', '👟', '👞', '👡', '👠', '👢', '👕', '👔', '👚', '👗', '🎽', '👖', '👘', '👙', '💼', '👜', '👝', '👛', '👓', '🎀', '🌂', '💄', '💛', '💙', '💜', '💚', '💗', '💓', '💕', '💖', '💞', '💘', '💌', '💋', '💍', '💎', '👤', '👥', '💬', '👣', '💭', '🐶', '🐺', '🐱', '🐭', '🐹', '🐰', '🐸', '🐯', '🐨', '🐻', '🐷', '🐽', '🐮', '🐗', '🐵', '🐒', '🐴', '🐑', '🐘', '🐼', '🐧', '🐦', '🐤', '🐥', '🐣', '🐔', '🐍', '🐢', '🐛', '🐝', '🐜', '🐞', '🐌', '🐙', '🐚', '🐠', '🐟', '🐬', '🐳', '🐋', '🐄', '🐏', '🐀', '🐃', '🐅', '🐇', '🐉', '🐎', '🐐', '🐓', '🐕', '🐖', '🐁', '🐂', '🐲', '🐡', '🐊', '🐫', '🐪', '🐆', '🐈', '🐩', '🐾', '💐', '🌸', '🌷', '🍀', '🌹', '🌻', '🌺', '🍁', '🍃', '🍂', '🌿', '🌾', '🍄', '🌵', '🌴', '🌲', '🌳', '🌰', '🌱', '🌼', '🌐', '🌞', '🌝', '🌚', '🌑', '🌒', '🌓', '🌔', '🌕', '🌖', '🌗', '🌘', '🌜', '🌛', '🌙', '🌍', '🌎', '🌏', '🌋', '🌌', '🌠', '⭐', '☀', '⛅', '⛄', '🌀', '🌁', '🌈', '🌊', '🎍', '💝', '🎎', '🎒', '🎓', '🎏', '🎆', '🎇', '🎐', '🎑', '🎃', '👻', '🎅', '🎄', '🎁', '🎋', '🎉', '🎊', '🎈', '🎌', '🔮', '🎥', '📷', '📹', '📼', '💿', '📀', '💽', '💾', '💻', '📱', '☎', '📞', '📟', '📠', '📡', '📺', '📻', '🔊', '🔉', '🔈', '🔇', '🔔', '🔕', '📢', '📣', '⏳', '⌛', '⏰', '⌚', '🔓', '🔒', '🔏', '🔐', '🔑', '🔎', '💡', '🔦', '🔆', '🔅', '🔌', '🔋', '🔍', '🛁', '🛀', '🚿', '🚽', '🔧', '🔩', '🔨', '🚪', '🚬', '💣', '🔫', '🔪', '💊', '💉', '💰', '💴', '💵', '💷', '💶', '💳', '💸', '📲', '📧', '📥', '📤', '✉', '📩', '📨', '📯', '📫', '📪', '📬', '📭', '📮', '📦', '📝', '📄', '📃', '📑', '📊', '📈', '📉', '📜', '📋', '📅', '📆', '📇', '📁', '📂', '📌', '📎', '📏', '📐', '📕', '📗', '📘', '📙', '📓', '📔', '📒', '📚', '📖', '🔖', '📛', '🔬', '🔭', '📰', '🎨', '🎬', '🎤', '🎧', '🎼', '🎵', '🎶', '🎹', '🎻', '🎺', '🎷', '🎸', '👾', '🎮', '🃏', '🎴', '🀄', '🎲', '🎯', '🏈', '🏀', '⚽', '⚾', '🎾', '🎱', '🏉', '🎳', '⛳', '🚵', '🚴', '🏁', '🏇', '🏆', '🎿', '🏂', '🏊', '🏄', '🎣', '☕', '🍵', '🍶', '🍼', '🍺', '🍻', '🍸', '🍹', '🍷', '🍴', '🍕', '🍔', '🍟', '🍗', '🍖', '🍝', '🍛', '🍤', '🍱', '🍣', '🍥', '🍙', '🍘', '🍚', '🍜', '🍲', '🍢', '🍡', '🍳', '🍞', '🍩', '🍮', '🍦', '🍨', '🍧', '🎂', '🍰', '🍪', '🍫', '🍬', '🍭', '🍯', '🍎', '🍏', '🍊', '🍋', '🍒', '🍇', '🍉', '🍓', '🍑', '🍈', '🍌', '🍐', '🍍', '🍠', '🍆', '🍅', '🌽', '🏠', '🏡', '🏫', '🏢', '🏣', '🏥', '🏦', '🏪', '🏩', '🏨', '💒', '⛪', '🏬', '🏤', '🌇', '🌆', '🏯', '🏰', '🗽', '🎡', '⛲', '🎢', '🚢', '⛵', '🚤', '🚣', '⚓', '🚀', '✈', '💺', '🚁', '🚂', '🚊', '🚉', '🚞', '🚆', '🚄', '🚅', '🚈', '🚇', '🚝', '🚋', '🚃', '🚎', '🚌', '🚍', '🚙', '🚘', '🚗', '🚕', '🚖', '🚛', '🚚', '🚨', '🚓', '🚔', '🚒', '🚑', '🚐', '🚲', '🚡', '🚟', '🚠', '🚜', '💈', '🚏', '🎫', '🚦', '🚥', '⚠', '🚧', '🔰', '⛽', '🏮', '🎰', '♨', '🗿', '🎪', '🎭', '📍', '🚩', '🔝', '🔚', '🔙', '🔛', '🔜'
];

var app = new Vue({
    el: '#app',
    data: {
        ideMode: true,
        naked: false,
        lxOptionsShown: false,
        hideTree: false,
        openedFile: "",
        openedFileKey: null,
        scriptOptionsShown: false,
        sideBarShown: true,
        blankOutput: false,
        structoreHidden: {},
        welcomeMsg: false,
        gitControls: {},
        addOptionsShown: false,
        gitSettings: {},
        content: "",
        output: "",
        tabs: {},
        apps: {},
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
        generateRunner: function(script) {
            var b64 = btoa(script);
            this.output = "Run in Runner: \n\nhttps://puzzlelang.github.io/puzzle-web/runner?base64=" + b64 + "\n\nRun as packaged cli: \n\nhttps://puzzlelang.github.io/puzzle-web?base64=" + b64;
        },
        generateStandalone: function(script) {
            var output = `<html><head><script>window.puzzle_script="${script}"</script><script src="sdgg" /></head><body></body></html>`;
            alert(output);
        },
        toggleGitControls: function(key) {
            Vue.set(this.gitControls, key, !this.gitControls[key])
        },
        toggleStructureHidden: function(key) {
            Vue.set(this.structoreHidden, key, !this.structoreHidden[key])
        },
        startScriptRunner: function() {
            var script = prompt('Enter Base64 scrript or remote script url', 'base64== OR https://...');

            function isBase64(str) {
                if (str === '' || str.trim() === '') { return false; }
                try {
                    return btoa(atob(str)) == str;
                } catch (err) {
                    return false;
                }
            }

            if (isBase64(script)) window.open('loader.html?base64=' + script);
            else window.open('loader.html?remote=' + script);
        },
        gitCommand: function(command) {
            var self = this;

            if (!self.gitSettings[self.currentProject]) self.gitSettings[self.currentProject] = {};

            switch (command) {
                case 'repo':
                    var repo = prompt('Enter Repo Url to clone', 'username:password@url.com/repo.git');
                    Vue.set(self.gitSettings[self.currentProject], 'repo', repo);
                    break;
                case 'clone':
                    var repo = prompt('Enter Repo Url to clone', 'username:password@url.com/repo.git');
                    var reponame = repo.split('/')[repo.split('/').length - 1].replace('.git', '');

                    git.clone({
                        fs,
                        http,
                        dir: '/' + reponame,
                        corsProxy: 'https://cors.isomorphic-git.org',
                        url: repo,
                        singleBranch: true,
                        depth: 1,
                        onAuth: () => ({ username: self.gitSettings[self.currentProject].username || prompt('username'), password: self.gitSettings[self.currentProject].password || prompt('password') })
                    }).then(function(err, data) {
                        console.log(err, data)
                    })

                    break;
                case 'checkout':
                    var branch = prompt('branch', '...');

                    git.checkout({
                        fs,
                        dir: '/' + self.currentProject,
                        ref: branch,
                        onAuth: () => ({ username: process.env.GITHUB_TOKEN })
                    }).then(function(err, data) {
                        console.log(err, data);
                        Vue.set(self.gitSettings[self.currentProject], 'branch', branch);
                    })

                    break;
                case 'commit':
                    var msg = prompt('Commit Message', '...');

                    git.commit({
                        fs,
                        dir: '/' + self.currentProject,
                        author: {
                            name: self.gitSettings[self.currentProject].authorName || 'lx',
                            email: self.gitSettings[self.currentProject].authorEmail || 'lx',
                        },
                        message: msg,
                        onAuth: () => ({ username: self.gitSettings[self.currentProject].username || prompt('username'), password: self.gitSettings[self.currentProject].password || prompt('password') })
                    }).then(function(err, data) {
                        console.log(err, data)
                    })

                    break;
                case 'pull':

                    git.pull({
                        fs,
                        http,
                        dir: '/' + self.currentProject,
                        ref: self.gitSettings[self.currentProject].branch,
                        author: {
                            name: self.gitSettings[self.currentProject].authorName || 'lx',
                            email: self.gitSettings[self.currentProject].authorEmail || 'lx',
                        },
                        singleBranch: true,
                        onAuth: () => ({ username: self.gitSettings[self.currentProject].username || prompt('username'), password: self.gitSettings[self.currentProject].password || prompt('password') })
                    }).then(function(err, data) {
                        console.log(err, data)
                    })

                    break;
                case 'push':

                    git.push({
                        fs,
                        http,
                        dir: '/' + self.currentProject,
                        remote: 'origin',
                        ref: self.gitSettings[self.currentProject].branch,
                        onAuth: () => ({ username: process.env.GITHUB_TOKEN }),
                    }).then(function(err, data) {
                        console.log(err, data)
                    })

                    break;
            }
        },

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

            fs.rename('/' + k, '/' + newName, function(err, data) {
                if (!err) {

                    Object.keys(self.files).forEach(function(t) {
                        if (self.files[t].project == k) self.files[t].project = newName;
                    })

                    delete self.projects[k];

                    Vue.set(self.projects, newName, true)

                }
            })

        },

        // run a puzzle script
        runCode: function(code) {
            this.output = '';
            console.log('running', code)
            puzzle.parse(code);
        },

        addProject: function(name, cb) {
            if (!name) name = this.makeid(3)
            var self = this;

            fs.mkdir('/' + name, {}, function(err, data) {
                if (!err) {
                    Vue.set(self.projects, name, true)
                    self.currentTab = name;
                    self.useProject(name);
                    if (cb) cb();
                }
            })
        },

        addDir: function(name, cb) {
            if (!name || name == this.currentProject) name = name + '/' + prompt('enter a name') || this.makeid(3);

            var self = this;

            fs.mkdir('/' + name, {}, function(err, data) {
                if (!err) {
                    if (cb) cb();
                }
            })
        },

        useProject: function(k) {
            var self = this;

            fs.readdir('/' + k, {}, function(err, data) {
                if (!err) {
                    Vue.set(self, 'currentProject', k);
                    self.content = ""
                    self.output = "";
                    bus.$emit('set-content', "");
                    localStorage.setItem('lastUsedProject', k)
                }
            })

        },

        deleteProject: function(k, isSub) {
            var self = this;

            if (!confirm('really')) return;

            function rmDir(k) {

                fs.rmdir('/' + k, {}, function(err, data) {
                    if (!err && !isSub) {
                        console.log('deleted project', k)
                        Vue.delete(self.projects, k);
                        self.currentProject = null;
                    }
                })
            }

            fs.readdir('/' + k, {}, function(err, data) {

                var counter = data.length;

                if (counter == 0) return rmDir(k);

                data.forEach(function(file) {
                    console.log('deleting', '/' + k, +'/' + file)

                    fs.unlink('/' + k + '/' + file, {}, function(err, data) {
                        if (!err) {
                            counter--;
                            console.log('c', counter)
                            Vue.delete(self.files, k);
                        }

                        if (counter == 0) {

                            rmDir(k);
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

            var content = new TextEncoder("utf-8").encode(c)

            fs.writeFile('/' + t + '/' + k, content, function(err, data) {
                if (!err) {
                    Vue.set(self.files, k, file)

                    self.currentTab = k;
                    self.useFile(k, c, t, true)

                } else alert(err)
            })

        },

        useFile: function(k, content, project, addOnly) {
            this.openedFile = '/' + project + '/' + k;
            this.openedFileKey = k;
            this.content = content;

            bus.$emit('set-content', this.content);
            this.currentTab = k;
            //this.currentProject = project;

            if(!addOnly) this.useTab(this.openedFile, content || '', '', project);

            //if ((this.content || "").includes('lx_autorun')) this.runCode(this.content);
        },

        deleteFile: function(k) {
            var self = this;

            fs.unlink('/' + k, {}, function(err, data) {
                if (!err) {
                    self.content = "";
                    self.output = "";
                    bus.$emit('set-content', "");
                    self.deleteTab(k)
                }
            })

        },

        addTab: function(k, content) {

            this.content = content;
            bus.$emit('set-content', this.content);

            if (!k) k = Math.random();
            
            Vue.set(this.tabs, k, { content: this.content });

            this.currentTab = k;
            //if ((this.content || "").includes('lx_autorun')) this.runCode(this.content);

            localStorage.setItem('lxt_' + k, JSON.stringify({ content: content }))
        },

        useTab: function(k, content, project, fromLauncher) {

            this.openedFile = k;

            this.content = content;
            bus.$emit('set-content', content);

            Vue.set(this.tabs, k, { content: content, project: project || this.currentProject });

            this.currentTab = k;
            if ((this.content || "").includes('//autorun') && fromLauncher) {
                this.blankOutput = true;
                this.runCode(this.content);
            } else if(!(this.content || "").includes('//autorun') && fromLauncher) {
                this.hideTree = true;
                this.blankOutput = false;
            }
            else { 
                this.blankOutput = false;
                this.hideTree = false
            }

            localStorage.setItem('lxt_' + k, JSON.stringify({ content: this.content, project: project || this.currentProject }))
        },

        deleteTab: function(k) {
            Vue.delete(this.tabs, k);
            localStorage.removeItem('lxt_' + k);
            this.content = "";
            this.output = "";
            bus.$emit('set-content', "");
        },

        closeAllTabs: function() {
            Object.keys(this.tabs).forEach(tab => {
                this.deleteTab(tab);
            })
        },

        saveContent: function() {
            var self = this;

            if (this.openedFile) {

                var file = {
                    content: this.content,
                    project: this.currentProject
                };

                fs.writeFile('/' + this.openedFile, new TextEncoder("utf-8").encode(this.content), function(err, data) {
                    if (!err) {
                        /*if (self.tabs[self.openedFileKey])*/ Vue.set(self.tabs, self.openedFile, { content: self.content, project: self.currentProject })
                        localStorage.setItem('lxt_' + self.openedFile, JSON.stringify({ content: self.content, project: self.currentProject }))
                        bus.$emit('saveContent', { name: self.openedFile, content: self.content })
                    } else alert(err);
                })


            } else this.addFile(undefined, this.content, this.output, this.currentProject)
        },
        hideWelcomeMsg: function() {
            localStorage.setItem('welcomeMsgHidden', true)
            this.welcomeMsg = false;
        }
    },
    watch: {
        /*sideBarShown: function(val){
            localStorage.setItem('sideBarShown', val)
        }*/
    },
    created: function() {

        var self = this;

        console.info("Welcome to LX");

        if (!localStorage.getItem('welcomeMsgHidden')) this.welcomeMsg = true;

        if (localStorage.getItem('lastUsedProject')) self.useProject(localStorage.getItem('lastUsedProject'))

        // initialize ace.js editor
        document.addEventListener('DOMContentLoaded', function() {

            var editor = ace.edit("editor");
            editor.setTheme("ace/theme/monokai");
            editor.session.setMode("ace/mode/javascript");
            editor.setOption("showPrintMargin", false);
            editor.setOption("useWorker", false);
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
                console.log(editor.session, k)
                editor.getSession().setValue(k)
            })


        }, false);

        // display output from puzzle script
        bus.$on('puzzle-response', function(c) {
            self.output += '<br>' + c
        })



        fs.readdir('/', {}, function(err, data) {
            data.forEach(function(project) {
                if (!self.projects[project]) Vue.set(self.projects, project, true);

            })

            if (data.length == 0) {
                self.addProject('project', function() {
                    self.addFile('default', 'hello...', '', 'project');
                });

            }

        })


        Object.keys(localStorage).forEach(function(k) {
            if (k.indexOf('lxt_') == 0) {
                var tab = JSON.parse(localStorage.getItem(k));
                if (!self.tabs[k.substring(4)]) self.useTab(k.substring(4), tab.content || '', tab.output, tab.project)
            }
        })


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


        bus.$on('useFile', function(file) {
            self.openedFile = file.project + '/' + file.name;
            self.useFile(file.name, file.content, file.project);
        })

        bus.$on('addFile', function(file) {
            self.addFile(file.name, file.content, "", file.project);
        })

        bus.$on('addDir', function(file) {
            self.addDir(file.path);
        })

        bus.$on('deleteDir', function(file) {
            self.deleteProject(file.path, true);
        })

        bus.$on('deleteFile', function(file) {
            self.deleteFile(file);
        })

        if (getParameterByName('blank')) {
            this.naked = true;
        }


        // lxhtml specific: get custom code to render
        lxhtmlBus.$on('custom-content', function(content) {
            console.log(content);
            self.customContent.html = content.html;
            self.customContent.style = content.style;
            self.customContent.js = content.js;

            new Function(content.js)();
        })

        //self.sideBarShown = (localStorage.getItem('sideBarShown') == 'true')

    }
})