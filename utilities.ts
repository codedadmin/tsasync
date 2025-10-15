async function getUser() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    //   console.log("API call successful");
    return data;
  } catch (error) {
    //   console.error("Error fetching users:", error);
    return [];
  }
}

async function getInput(): Promise<string> {
  const readline = require("readline");

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise<string>((resolve) => {
    rl.question("Enter your input: ", (answer: string) => {
      rl.close();
      resolve(answer);
    });
  });
}
