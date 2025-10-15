import { timeStamp } from "console";
import { getInput, getUser } from "./utilities";
import { get } from "http";

async function userInput() {
  console.log(`Please enter the tip amount`);
  const tipAmount = await getInput();

  if (Number(tipAmount) >= 5) {
    console.log(`Are you sure you want to tip a high amount?`);
    async function assuranceHighTip() {
      const assurance = await getInput();
      assurance();
      if (assurance === `yes`) return `Thank you for your generousity SIR`;
      else `This transaction has been cancled :(. Please try again `;
    }
  }
}

userInput();
assurance();
