let fs = require("fs");
let path = require("path");
let types = {
    media: ["mp4", "mkv", "mp3"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"]
}

function organize(srcFolder){
    let cd = process.cwd();
    let orgFolder = path.join(cd, "Organized_Files");
    if(fs.existsSync(orgFolder) == false){
        fs.mkdirSync(orgFolder);
    }

    for(key in types){
        let dirPath = path.join(orgFolder, key);
        if(fs.existsSync(dirPath) == false){
            fs.mkdirSync(dirPath);
        }
    }

    let content = fs.readdirSync(srcFolder);
    if(content[0] == '.DS_Store'){
        content = content.slice(1);
    }
    
    for(let i=0; i<content.length; i++){
        
        let filePath = path.join(srcFolder, content[i]);
        let extname = path.extname(filePath).slice(1);
        
        for(key in types){
            for(let i=0; i<types[key].length; i++){
                if(extname == types[key][i]){

                    let destDir = path.join(orgFolder, key);
                    let fileName = path.basename(filePath);
                    let destPath = path.join(destDir, fileName)

                    fs.copyFileSync(filePath, destPath);
                    console.log(fileName + " File copied")

                }
            }
        }


    }

}

module.exports = {
    organize: organize
}
