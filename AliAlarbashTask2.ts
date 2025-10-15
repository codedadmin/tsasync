import { getUser, getInput } from "./utilities";

async function parseUsers() {
  const users = await getUser();
  // Print all the users names and phones
  // You can use console.log(users) to see whats inside the user
  console.log(users);
  users.forEach((use) => {
    console.log(`Name: ${use.name}, phone: ${use.phone}`);
  });
  // Challenge, Find the user "name,address" from his email as an input
  console.log(`input the email: `);
  let emale = await getInput();
  let result = users.find((use) => {
    if (use.email === emale) {
      console.log(`Name: ${use.name}`);
      console.table(use.address);
      return true;
    } else {
      return false;
    }
  });
  if (result === undefined)
    console.log(
      `Either the email is wrong or there is no such email, figure it out LOL`
    );
}

parseUsers();
