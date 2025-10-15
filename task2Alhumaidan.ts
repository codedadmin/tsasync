import { getUser, getInput } from "./utilities";

async function parseUsers() {
  const users = await getUser();
  
  // Print all the users names and phones
  console.log("All users names and phones:");
  users.forEach((user: any) => {
    console.log(`Name: ${user.name}, Phone: ${user.phone}`);
  });
  
  console.log("\n" + "=".repeat(50) + "\n");
  
  // Challenge: Find the user "name,address" from his email as an input
  console.log("Challenge: Find user by email Rey.Padberg@karina.biz");
  const email = await getInput();
  
  const foundUser = users.find((user: any) => user.email === email);
  
  if (foundUser) {
    console.log(`Found user: ${foundUser.name}, ${foundUser.address.street}, ${foundUser.address.suite}, ${foundUser.address.city}, ${foundUser.address.zipcode}`);
  } else {
    console.log("User not found with that email address.");
  }
}

parseUsers();
