const bus = new Vue();
const lxhtmlBus = new Vue();

// overwrite console log and delegate arguments to ui, since luke output comes through it.
console.log = function() {
    console.info(arguments);
    bus.$emit('luke-response', Array.from(arguments).join(" "))
}

var emojis = [
    '😄', '😃', '😀', '😊', '😉', '😍', '😘', '😚', '😗', '😙', '😜', '😝', '😛', '😁', '😂', '😅', '😆', '😋', '😎', '😲', '😈', '😇', '👲', '👳', '👮', '👷', '👦', '👧', '👨', '👩', '👴', '👵', '👱', '👼', '👸', '😺', '😸', '😻', '😽', '😼', '😹', '🙈', '🙉', '🙊', '💀', '👽', '💩', '🔥', '✨', '🌟', '💫', '💥', '💢', '💦', '💧', '💨', '👂', '👀', '👃', '👅', '👄', '👍', '👌', '👊', '✊', '👋', '✋', '👆', '🙌', '🙏', '👏', '💪', '🚶', '🏃', '💃', '👫', '👪', '👬', '👭', '💏', '💑', '👯', '🙆', '🙅', '💁', '🙋', '💇', '💅', '👰', '🙎', '🙇', '🎩', '👑', '👒', '👟', '👞', '👡', '👠', '👢', '👕', '👔', '👚', '👗', '🎽', '👖', '👘', '👙', '💼', '👜', '👝', '👛', '👓', '🎀', '🌂', '💄', '💛', '💙', '💜', '💚', '💗', '💓', '💕', '💖', '💞', '💘', '💌', '💋', '💍', '💎', '👤', '👥', '💬', '👣', '💭', '🐶', '🐺', '🐱', '🐭', '🐹', '🐰', '🐸', '🐯', '🐨', '🐻', '🐷', '🐽', '🐮', '🐗', '🐵', '🐒', '🐴', '🐑', '🐘', '🐼', '🐧', '🐦', '🐤', '🐥', '🐣', '🐔', '🐍', '🐢', '🐛', '🐝', '🐜', '🐞', '🐌', '🐙', '🐚', '🐠', '🐟', '🐬', '🐳', '🐋', '🐄', '🐏', '🐀', '🐃', '🐅', '🐇', '🐉', '🐎', '🐐', '🐓', '🐕', '🐖', '🐁', '🐂', '🐲', '🐡', '🐊', '🐫', '🐪', '🐆', '🐈', '🐩', '🐾', '💐', '🌸', '🌷', '🍀', '🌹', '🌻', '🌺', '🍁', '🍃', '🍂', '🌿', '🌾', '🍄', '🌵', '🌴', '🌲', '🌳', '🌰', '🌱', '🌼', '🌐', '🌞', '🌝', '🌚', '🌑', '🌒', '🌓', '🌔', '🌕', '🌖', '🌗', '🌘', '🌜', '🌛', '🌙', '🌍', '🌎', '🌏', '🌋', '🌌', '🌠', '⭐', '☀', '⛅', '⛄', '🌀', '🌁', '🌈', '🌊', '🎍', '💝', '🎎', '🎒', '🎓', '🎏', '🎆', '🎇', '🎐', '🎑', '🎃', '👻', '🎅', '🎄', '🎁', '🎋', '🎉', '🎊', '🎈', '🎌', '🔮', '🎥', '📷', '📹', '📼', '💿', '📀', '💽', '💾', '💻', '📱', '☎', '📞', '📟', '📠', '📡', '📺', '📻', '🔊', '🔉', '🔈', '🔇', '🔔', '🔕', '📢', '📣', '⏳', '⌛', '⏰', '⌚', '🔓', '🔒', '🔏', '🔐', '🔑', '🔎', '💡', '🔦', '🔆', '🔅', '🔌', '🔋', '🔍', '🛁', '🛀', '🚿', '🚽', '🔧', '🔩', '🔨', '🚪', '🚬', '💣', '🔫', '🔪', '💊', '💉', '💰', '💴', '💵', '💷', '💶', '💳', '💸', '📲', '📧', '📥', '📤', '✉', '📩', '📨', '📯', '📫', '📪', '📬', '📭', '📮', '📦', '📝', '📄', '📃', '📑', '📊', '📈', '📉', '📜', '📋', '📅', '📆', '📇', '📁', '📂', '📌', '📎', '📏', '📐', '📕', '📗', '📘', '📙', '📓', '📔', '📒', '📚', '📖', '🔖', '📛', '🔬', '🔭', '📰', '🎨', '🎬', '🎤', '🎧', '🎼', '🎵', '🎶', '🎹', '🎻', '🎺', '🎷', '🎸', '👾', '🎮', '🃏', '🎴', '🀄', '🎲', '🎯', '🏈', '🏀', '⚽', '⚾', '🎾', '🎱', '🏉', '🎳', '⛳', '🚵', '🚴', '🏁', '🏇', '🏆', '🎿', '🏂', '🏊', '🏄', '🎣', '☕', '🍵', '🍶', '🍼', '🍺', '🍻', '🍸', '🍹', '🍷', '🍴', '🍕', '🍔', '🍟', '🍗', '🍖', '🍝', '🍛', '🍤', '🍱', '🍣', '🍥', '🍙', '🍘', '🍚', '🍜', '🍲', '🍢', '🍡', '🍳', '🍞', '🍩', '🍮', '🍦', '🍨', '🍧', '🎂', '🍰', '🍪', '🍫', '🍬', '🍭', '🍯', '🍎', '🍏', '🍊', '🍋', '🍒', '🍇', '🍉', '🍓', '🍑', '🍈', '🍌', '🍐', '🍍', '🍠', '🍆', '🍅', '🌽', '🏠', '🏡', '🏫', '🏢', '🏣', '🏥', '🏦', '🏪', '🏩', '🏨', '💒', '⛪', '🏬', '🏤', '🌇', '🌆', '🏯', '🏰', '🗽', '🎡', '⛲', '🎢', '🚢', '⛵', '🚤', '🚣', '⚓', '🚀', '✈', '💺', '🚁', '🚂', '🚊', '🚉', '🚞', '🚆', '🚄', '🚅', '🚈', '🚇', '🚝', '🚋', '🚃', '🚎', '🚌', '🚍', '🚙', '🚘', '🚗', '🚕', '🚖', '🚛', '🚚', '🚨', '🚓', '🚔', '🚒', '🚑', '🚐', '🚲', '🚡', '🚟', '🚠', '🚜', '💈', '🚏', '🎫', '🚦', '🚥', '⚠', '🚧', '🔰', '⛽', '🏮', '🎰', '♨', '🗿', '🎪', '🎭', '📍', '🚩', '🔝', '🔚', '🔙', '🔛', '🔜'
];

var app = new Vue({
    el: '#app',
    data: {
        msg: 'Hello Vue!',
        content: "",
        output: "",
        tabs: {},
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

            Object.keys(this.tabs).forEach(function(t) {
                if (self.tabs[t].project == k) self.tabs[t].project = newName;
            })

            delete this.projects[k];
            localStorage.removeItem('lxp_' + k);

            Vue.set(this.projects, newName, true)
            localStorage.setItem('lxp_' + newName, newName)

        },

        // run a luke script
        runCode: function(code) {
            this.output = '';
            luke.parse(code);
        },

        addProject: function(name) {
            if (!name) name = this.makeid(3)

            Vue.set(this.projects, name, true)
            localStorage.setItem('lxp_' + name, name)
            this.currentTab = name;
            this.useProject(name);
        },

        useProject: function(k) {
            this.currentProject = k;
            this.content = ""
            this.output = "";
            bus.$emit('set-content', "");
        },

        deleteProject: function(k) {
            Vue.delete(this.projects, k);
            localStorage.removeItem('lxp_' + k);
            this.content = "";
            this.output = "";
            bus.$emit('set-content', this.content);
        },

        addTab: function(k, c, o, t) {
            if (!k) k = Math.random();

            var tab = {
                content: c,
                output: o,
                project: t
            };

            Vue.set(this.tabs, k, tab)

            this.currentTab = k;
            this.useTab(k)

            localStorage.setItem('lx_' + k, JSON.stringify(tab))
        },

        useTab: function(k) {
            this.content = this.tabs[k].content;
            this.output = this.tabs[k].output;
            bus.$emit('set-content', this.content);
            this.currentTab = k;
        },

        deleteTab: function(k) {
            Vue.delete(this.tabs, k);
            localStorage.removeItem('lx_' + k);
            this.content = "";
            this.output = "";
            bus.$emit('set-content', this.content);
        },

        saveContent: function() {
            if (this.currentTab) {
                var tab = {
                    content: this.content,
                    output: this.output,
                    project: this.currentProject
                };

                localStorage.setItem('lx_' + this.currentTab, JSON.stringify(tab))

                Vue.set(this.tabs, this.currentTab, tab)
            } else this.addTab(undefined, this.content, this.output)
        }
    },
    created: function() {

        var self = this;

        // initialize ace.js editor
        document.addEventListener('DOMContentLoaded', function() {

            var editor = ace.edit("editor");
            editor.setTheme("ace/theme/monokai");
            editor.session.setMode("ace/mode/javascript");
            editor.setOption("showPrintMargin", false);
            editor.setOption("fontSize", '15px');


            editor.on('change', (arg, activeEditor) => {
                self.content = activeEditor.getSession().getValue();

                const aceEditor = activeEditor;
                const newHeight = aceEditor.getSession().getScreenLength() *
                    (aceEditor.renderer.lineHeight + aceEditor.renderer.scrollBar.getWidth());
                aceEditor.container.style.height = `${newHeight}px`;
                aceEditor.resize();
            });

            bus.$on('set-content', function(k) {
                console.info(editor.session)
                editor.getSession().setValue(k)
            })


        }, false);

        // display output from luke script
        bus.$on('luke-response', function(c) {
            self.output += '<br>' + c
        })

        // add saved tabs/projects on start
        Object.keys(localStorage).forEach(function(k) {
            if (k.indexOf('lx_') == 0) {
                var tab = JSON.parse(localStorage.getItem(k));
                if (!self.tabs[k.substring(3)]) self.addTab(k.substring(3), tab.content, tab.output, tab.project)
            }

            if (k.indexOf('lxp_') == 0) {
                var project = localStorage.getItem(k);
                if (!self.projects[project]) self.addProject(project);
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
                self.addTab(undefined, "", "", self.currentProject);
            }

            if ((window.navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey) && e.keyCode == 13) {
                e.preventDefault();
                self.runCode(self.content)
            }
        }, false);

        // lxhtml specific: get custom code to render
        lxhtmlBus.$on('custom-content', function(content) {
            console.log(content);
            self.customContent.html = content.html;
            self.customContent.style = content.style;
            self.customContent.js = content.js;
        })

    }
})