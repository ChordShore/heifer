const { moo } = require("./moo.js");
let name = "Friend";

function main(name) {
    //console.log(`moo, ${name}`)
    console.log(moo(name));
}

main(name);