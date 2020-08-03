var subdir = {
    props: ['isSub', 'k', 'depth'],
    data: function(){ 
    return {
        files: {},
        dirs: []
       }
    },
    methods: {
        useFile: function(k){
            bus.$emit('useFile', {name: k, content: this.files[k].content, project: this.files[k].project})
        },
        useTab: function(k){
            bus.$emit('useTab', k)
        },
        addFile: function(k){
            var file = {project:this.k, name: Math.random(), content:''}
            bus.$emit('addFile', file);
            Vue.set(this.files, file.name, file);
        },
        deleteFile: function(n){
            bus.$emit('deleteFile', this.k + '/' + n);
            Vue.delete(this.files, n);
        }
    },
    created: function() {
        var self = this;
        setTimeout(function(){
             for(var d in self.data){
                console.log(d)
                self.getType('/'+self.k+'/'+d);
            }
        },1000);

        bus.$on('saveContent', function(c){ 
            Object.keys(self.files).forEach(function(k){
                if(c.name == '/'+self.k+'/'+k){
                     Vue.set(self.files[k], 'content', c.content);
                }
            })
        })

        fs.readdir('/'+self.k, {}, function(err, data){
                    if(err) return;
    
                    data.forEach(function(file){
                      
                    console.log('/'+self.k+'/'+file);

                     fs.stat('/'+self.k+'/'+file, function(err, data){

                            if(data.type == "dir") 
                            {
                                console.log('Ä');
                                if(file.charAt(0) != '.') self.dirs.push(self.k+'/'+file);

                            } else {

                                fs.readFile('/'+self.k+'/'+file, function(err, data){

                                    if(!err){
                                        Vue.set(self.files, file, {content: new TextDecoder("utf-8").decode(data), project: self.k});
                                    }
                                });

                            }
                        })

                    })
                  
                })

    },
    template: `
        <div class="leto-ml-xs"> 

            
            <div class="leto-text-white leto-block leto-pl-sm leto-p-sm times-hover leto-click leto-pt-none leto-pb-xxs" v-if="isSub">
                {{k.split('/')[depth]}}
            </div>

             <div v-for="dir in dirs" >
                 <subdir :k="dir" :isSub="true" :depth="dir.split('/').length-1" />
             </div>


            <div v-for="(file, t) in files" class="times-hover">
                    <div class="leto-ml-lg leto-text-white leto-pb-xxs leto-click">
                    <span v-on:click="useFile(t);useTab(t)">{{file.content.substring(0, 18) || '(empty)'}}</span>
                    <div class="leto-ml-xs leto-color-grey leto-click times" v-on:click="deleteFile(t)">&times;</div>
                </div>
            </div>
            <div class="leto-button-xs leto-text-white leto-border-none leto-mt-xxs times" v-on:click="addFile()"><span class="super-grey-label">+ file</span></div>
        </div>
    `
}

Vue.component('subdir', subdir)