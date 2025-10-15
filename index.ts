import { getUser, getInput } from "./utilities";


async function userInput() {
        console.log("Please choose your drink:");
        const input = await getInput();
        console.log(input);
}


userInput();