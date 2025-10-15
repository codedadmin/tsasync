import { compileFunction } from "vm";
import { getInput, getUser } from "./utilities";

async function userInput(){
    console.log(`Please choose your drink`)
    const input = await getInput()

}

userInput()