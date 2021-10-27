var subdir = {
    props: ['isSub', 'k', 'depth'],
    data: function() {
        return {
            files: {},
            dirs: [],
            plugins: {
                fileTypes: {
                    'plain script': {
                        icon: '',
                        content: 'print "hello world"'
                    },
                    'ui script': {
                        icon: '',
                        content: 'use ui.js;'
                    },
                    'lx script': {
                        icon: '',
                        content: 'use lx.js;'
                    },
                    'syntax file': {
                        icon: '',
                        content: '{$: { namespace: {  } }}'
                    }
                }
            },
            addFileOptionsShown: false
        }
    },
    methods: {
        useFile: function(k) {
            bus.$emit('useFile', { name: k, content: this.files[k].content, project: this.files[k].project })
        },
        useTab: function(k) {
            bus.$emit('useTab', k)
        },
        addFile: function(k, content) {
            var file = { project: this.k, name: Math.random(), content: content }
            bus.$emit('addFile', file);
            Vue.set(this.files, file.name, file);
        },
        addDir: function(k, content) {
            var newname = prompt('enter a name'); 
            if(!newname) newname = this.makeid(3);
            k = k + '/' + newname

            bus.$emit('addDir', { path: k });
            this.dirs.push(k)
        },
        deleteFile: function(n) {
            bus.$emit('deleteFile', this.k + '/' + n);
            Vue.delete(this.files, n);
        },
        deleteDir: function(n) {
            bus.$emit('deleteDir', { path: n });
            Vue.set(this, 'files', {});
            Vue.set(this, 'dirs', []);
            Vue.set(this, 'k', '');
            this.$destroy();

            // remove the element from the DOM
            this.$el.parentNode.removeChild(this.$el);
            /*this.dirs.forEach((dir, i) => {
                alert(dir)
                if (dir == k) this.dirs.splice(i, 1);
            })*/
        }
    },
    created: function() {
        var self = this;
        setTimeout(function() {
            for (var d in self.data) {
                console.log(d)
                self.getType('/' + self.k + '/' + d);
            }
        }, 1000);

        bus.$on('saveContent', function(c) {
            Object.keys(self.files).forEach(function(k) {
                if (c.name == '/' + self.k + '/' + k) {
                    Vue.set(self.files[k], 'content', c.content);
                }
            })
        })

        fs.readdir('/' + self.k, {}, function(err, data) {
            if (err) return;

            data.forEach(function(file) {

                console.log('/' + self.k + '/' + file);

                fs.stat('/' + self.k + '/' + file, function(err, data) {

                    if (data.type == "dir") {
                        if (file.charAt(0) != '.') self.dirs.push(self.k + '/' + file);

                    } else {

                        fs.readFile('/' + self.k + '/' + file, function(err, data) {

                            if (!err) {
                                Vue.set(self.files, file, { content: new TextDecoder("utf-8").decode(data), project: self.k });
                            }
                        });

                    }
                })

            })

        })

    },
    template: `
        <div class="leto-block leto-ml-xs"> 
            
             
            <div class="times-hover leto-text-white leto-pv-xxs leto-badge leto-border-none leto-bg-black leto-inline-block" v-if="isSub" style="background: #000000" >
                {{k.split('/')[depth]}}
                
                <div class="leto-ml-xs leto-color-grey leto-click times" v-on:click="addDir(k)">+</div>
                <div class=" leto-color-grey leto-click times" v-on:click="deleteDir(k)">&times;</div>
            </div>
            <br>
            
            
             <div v-for="dir in dirs" >
                 <subdir :k="dir" :isSub="true" :depth="dir.split('/').length-1" />
             </div>


            <div v-for="(file, t) in files" class="leto-block">
            <div class="times-hover leto-pv-xxs leto-badge leto-border-none leto-bg-black leto-inline-block">
                    
                    <div class="leto-text-white leto-pb-xxs leto-click leto-text-sm">
                    <span v-on:click="useFile(t);useTab(t)"><!--span class="fa fa-file leto-mr-xxs times-hide"></span--> {{file.content.substring(0, 18) || '(empty)'}} <div class="leto-ml-xs leto-color-grey leto-click times" v-on:click="deleteFile(t)">&times;</div></span>
                    
                </div>
                </div>
            </div>
            
            <div class="leto-button-xs times-hover leto-pv-xxs leto-text-white leto-border-none leto-mt-xxs times leto-ml-xs leto-badge leto-bg-black" v-on:click="addFile(undefined, '')"><span class="super-grey-label"><span v-if="!addFileOptionsShown"><b>+</b></span><span v-if="addFileOptionsShown">&times;</span></span></div>
            
          
        </div>
    `
}

Vue.component('subdir', subdir)