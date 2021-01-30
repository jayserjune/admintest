var fs = require('fs');
var path = require('path');
const out=[]
let files = fs.readdirSync('./');
files.forEach(function(item){
    let tempPath = path.join('./',item);
    let stats = fs.statSync(tempPath);
    if(stats.isDirectory()&&tempPath!='app'){
        console.log(tempPath,'是账号缓存文件夹')
        let _files=fs.readdirSync('./'+tempPath+'/');
        _files.forEach(function(_item){
            let _tempPath = path.join('./',tempPath,'/',_item);
            let _stats = fs.statSync(_tempPath);
            console.log
            if(!_stats.isDirectory()){
                console.log(_tempPath+'准备转换')
                fs.renameSync(_tempPath,_tempPath+'.json');
            }

        })
    }else{
        out.push(tempPath);
    }
});

