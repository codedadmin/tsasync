import { getUser, getInput } from "./utilities";

async function parseUsers() {
  const users = (await getUser()) as any[];
  // Print all the users names and phones
  // You can use console.log(users) to see whats inside the user
  users.forEach((user: any) => {
    console.log(`Name: ${user.name}, phone: ${user.phone}`);
  });
  console.log();
  // Challenge, Find the user "name,address" from his email as an input
  console.log(`Enter the email to find the user's name and address: `);
  const emailInput = await getInput();
  let foundUser = null;
  for (let i = 0; i < users.length; i++) {
    if (emailInput === users[i].email) {
      foundUser = users[i];
      break;
    }
  }
  if (foundUser) {
    console.log(`Name: ${foundUser.name}, address: ${foundUser.address}`);
  } else {
    console.log("User not found with that email.");
  }
}

parseUsers();
