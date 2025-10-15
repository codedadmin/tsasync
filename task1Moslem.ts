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

for (let i = 0; i < drinkBakeryItems.length; i++) {
  console.log(
    `ID: ${drinkBakeryItems[i].id}, name: ${drinkBakeryItems[i].name}, price: ${drinkBakeryItems[i].price},`
  );
}

console.log();

// Take the user choice and quantity and show the total price
async function totalCalculator() {
  let total: number = 0;
  console.log(`Pick an item from the menu: `);
  let input = await getInput();
  let array = drinkBakeryItems[input];
  console.log(`What is the quanitity you need? `);
  input = await getInput();
  total = array.price * parseInt(input);
  console.log(total);
}

totalCalculator();
