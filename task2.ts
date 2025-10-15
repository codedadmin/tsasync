import { getUser } from "./utilities";

async function parseUsers() {
  const users = await getUser();
  // Print all the users names and phones
  // You can use console.log(users) to see whats inside the user

  // Challenge, Find the user "name,address" from his email as an input
}

parseUsers();
