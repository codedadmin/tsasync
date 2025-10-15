import { getInput, getUser } from "./utilities";

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
async function totalCalculator() {
  let result = 0;
  console.log(`
📄Menu
  1. Espresso, Price: 3.5 KWD
  2. Cappuccino, Price: 4.25 KWD
  3. Croissant, Price: 2.75 KWD
  4. Chocolate Chip Cookie, Price: 1.95 KWD
  5. Fresh Orange Juice, Price: 3.0 KWD 
`);
  console.log(`Please enter the number of the item:`);
  let item = await getInput();
  let itemNum = Number(item);
  console.log(
    `Please enter the quantity of your ${drinkBakeryItems[itemNum - 1].name}:`
  );
  let quant = await getInput();
  let quantNum = Number(quant);

  result = drinkBakeryItems[itemNum - 1].price * quantNum;

  console.log(`your total price is ${result} KWD`);
}

totalCalculator();
