import { getInput } from "./utilities";

interface DrinkBakery {
  id: number;
  name: string;
  price: number;
}

const drinkBakeryItems: DrinkBakery[] = [
  { id: 1, name: "Espresso", price: 3.5 },
  { id: 2, name: "Cappuccino", price: 4.25 },
  { id: 3, name: "Croissant", price: 2.75 },
  { id: 4, name: "Chocolate Chip Cookie", price: 1.95 },
  { id: 5, name: "Fresh Orange Juice", price: 3.0 },
];

// Take the user choice and quantity and show the total price

const Items = [

]

const main = async () => {
  while (true) {
    console.table(drinkBakeryItems);
    console.log("Please choose your drink:\n");
    const input = await getInput();
    const item = drinkBakeryItems.find(item => item.name === input || item.id === Number(input));
    if (item) {
      Items.push(item);
      console.log(`${item.name} - ${item.price}`);
    } else {
      console.log("Invalid drink \n");
    }
    console.log("1:Done or 2:Continue \n");
    const input2 = await getInput();
    if (input2 === "1") {
      console.table(Items);
      console.log("Total price: " + Items.reduce((a, item) => a + item.price, 0) + "\n");
      break;
    } else if (input2 === "2") {
      continue;
    } else {
      console.log("Invalid input \n");
    }
  }
}

main();