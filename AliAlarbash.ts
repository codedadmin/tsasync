import { getInput, getUser } from "./utilities";

async function start() {
  let flights: string[] = ["Hawaii", "Germany", "Australia"];
  console.log(`Please enter the number of your flight:
  1. Hawaii
  2. Germany
  3. Australia`);
  while (true) {
    let input = await getInput();
    let num = Number(input) - 1;
    if (num === -1) {
      console.log(`❌Please enter a number❌`);
    } else if (isNaN(num)) {
      console.log(`❌Please enter a number❌`);
    } else if (num > 2) {
      console.log(`❌Please enter a valid number❌`);
    } else {
      console.log(`Welcome to
✈️✈️✈️
${flights[num]}    
✈️✈️✈️
        `);
      break;
    }
  }
}

start();
