import { getUser, getInput } from "./utilities";

async function takingOrders() {
  let flag = false;
  let randomNumber = Math.floor(Math.random() * 10) + 1;
  console.log(`Pick a number from 1 - 10: `);

  while (flag == false) {
    let input = await getInput();
    if (parseInt(input) === randomNumber) {
      console.log("Correct! You guessed the right number!");
      flag = true;
    } else {
      console.log(`Wrong! The number was ${randomNumber}. Try again: `);
    }
  }
}

takingOrders();
