import { moo } from "./moo.js";
import * as cowsay from "cowsay";

let name = "Friend";

function main(name) {
    //console.log(`moo, ${name}`)
    //console.log(moo(name));
    console.log(cowsay.say({
        text : moo(name)
    }));
}

main(name);