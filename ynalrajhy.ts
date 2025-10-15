import { getInput } from "./utilities";

async function checkAge(username: string, birthday: string): Promise<void> {
  try {
    const birthDate = new Date(birthday);
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    // Adjust age if birthday hasn't occurred this year
    const actualAge =
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
        ? age - 1
        : age;

    console.log(`Hello ${username}!`);
    console.log(`You are ${actualAge} years old.`);

    if (actualAge >= 18) {
      console.log("You are over 18! 🎉");
    } else {
      console.log("You are under 18.");
    }
  } catch (error) {
    console.log(
      "Invalid date format. Please enter your birthday in YYYY-MM-DD format."
    );
  }
}

async function userinput() {
  const username = await getInput();
  const birthday = await getInput();

  await checkAge(username, birthday);
}

userinput();
