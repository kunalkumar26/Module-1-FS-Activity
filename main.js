
let helpObj = require("./command/help")
let organizeObj = require("./command/organize")
let treeObj = require("./command/tree")


let inputArr = process.argv.slice(2);

let command = inputArr[0];
let path = inputArr[1];

switch (command) {
    case "tree":
        treeObj.tree(path, "");
        break;
    case "organize":
        organizeObj.organize(path);
        break;
    case "help":
        helpObj.fn();
        break;
    default:
        console.log("🙏🏻 Please enter a valid command.")
        break;
}
