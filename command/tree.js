let fs = require("fs");
let path = require("path");


function tree(srcpath, str){
    if(srcpath == undefined){
        srcpath = process.cwd();
    }
    process.stdout.write(str)
    let content = fs.readdirSync(srcpath);

    if(content[0] == '.DS_Store'){
        content = content.slice(1);
    }
    let parentFolder = path.basename(srcpath);
    console.log("└──" + parentFolder);
    str += "\t"

    for(let i=0; i<content.length; i++){
        let filePath = path.join(srcpath, content[i]);
        let lstat = fs.lstatSync(filePath);
        
        if(lstat.isDirectory()){
            let newPath = path.join(srcpath, content[i]);
            tree(newPath, str)
        } else{
            console.log(str + "|---" + content[i])
        }
    }


}

module.exports = {
    tree: tree
}
