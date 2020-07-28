const bus = new Vue();

console.log = function(c)
{
  bus.$emit('luke-response', c)
}

var app = new Vue({
  el: '#app',
  data: {
    msg: 'Hello Vue!',
    content: "",
    output: "",
    tabs: {},
    projects: {},
    currentTab:null,
    currentProject: null
  },
  methods: {
     makeid:function(length) {
       var result           = '';
       var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
       var charactersLength = characters.length;
       for ( var i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
       }
       return result;
    },
    runCode: function(code){
      this.output = '';
      luke.parse(code);
    },
    addProject: function(name){
      if(!name) name = this.makeid(4)

      Vue.set(this.projects, name, true)
      localStorage.setItem('lxp_'+name, name)
      this.currentTab = name;
      this.useProject(name);
    },
    useProject: function(k){
      this.currentProject = k;
      this.content = ""
      this.output = "";
      bus.$emit('set-content', "");
    },
    deleteProject: function(k){
      Vue.delete(this.projects, k);
      localStorage.removeItem('lxp_'+k);
      this.content = "";
      this.output = "";
      bus.$emit('set-content', this.content);
    },
    addTab: function(k, c, o, t)
    {
      if(!k) k = Math.random();

      var tab =  {
        content: c,
        output: o,
        project: t
      };

      Vue.set(this.tabs, k, tab)

      this.currentTab = k;
      this.useTab(k)

      localStorage.setItem('lx_'+k, JSON.stringify(tab))
    },
    useTab: function(k){
      this.content = this.tabs[k].content;
      this.output = this.tabs[k].output;
      bus.$emit('set-content', this.content);
      this.currentTab = k;
    },
    deleteTab: function(k){
      Vue.delete(this.tabs, k);
      localStorage.removeItem('lx_'+k);
      this.content = "";
      this.output = "";
      bus.$emit('set-content', this.content);
    },
    saveContent: function()
    {
      if(this.currentTab){
        var tab = {
          content: this.content,
          output: this.output,
          project: this.currentProject
        };

        localStorage.setItem('lx_'+this.currentTab, JSON.stringify(tab))

        Vue.set(this.tabs, this.currentTab,  tab)
      } else this.addTab(undefined, this.content, this.output)

      
    }
  },
  created: function(){

    var self = this;
    document.addEventListener('DOMContentLoaded', function(){

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

    bus.$on('set-content', function(k){
      console.info(editor.session)
      editor.getSession().setValue(k)
    })  


    }, false);

    bus.$on('luke-response', function(c){
      self.output += '<br>' + c
    })  

    Object.keys(localStorage).forEach(function(k){
      if(k.indexOf('lx_') == 0){
        var tab = JSON.parse(localStorage.getItem(k));
        if(!self.tabs[k.substring(3)]) self.addTab(k.substring(3), tab.content, tab.output, tab.project)
      }

      if(k.indexOf('lxp_') == 0){
        var project = localStorage.getItem(k);
        if(!self.projects[project]) self.addProject(project);
      }
    })


    document.addEventListener("keydown", function(e) {
      if ((window.navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)  && e.keyCode == 83) {
        e.preventDefault();
        self.saveContent();
      }
    }, false);

    document.addEventListener("keydown", function(e) {
      if ((window.navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)  && e.keyCode == 84) {
        e.preventDefault();
        self.addTab(undefined, "", "", self.currentProject);
      }
    }, false);

     document.addEventListener("keydown", function(e) {
      if ((window.navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)  && e.keyCode == 13) {
        e.preventDefault();
        self.runCode(self.content)
      }
    }, false);
    
  }
})