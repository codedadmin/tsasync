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
async function drinkMenuCalc() { 
  // Display the menu first
  console.log("Welcome to Drink Bakery! Here's our menu:");
  console.log("ID | Item | Price");
  console.log("---|------|------");
  drinkBakeryItems.forEach(item => {
    console.log(`${item.id}  | ${item.name} | KWD${item.price}`);
  });
  
  // Get user choice
  console.log("\nPlease enter the ID of the item you want:");
  const userChoiceStr = await getInput();
  const userChoice = parseInt(userChoiceStr);
  
  // Validate user choice
  const selectedItem = drinkBakeryItems.find(item => item.id === userChoice);
  if (!selectedItem) {
    console.log("Invalid choice! Please select a valid ID from the menu.");
    return;
  }
  
  // Get quantity
  console.log(`You selected: ${selectedItem.name} (KWD${selectedItem.price})`);
  console.log("Please enter the quantity:");
  const userQuantityStr = await getInput();
  const userQuantity = parseInt(userQuantityStr);
  
  // Validate quantity
  if (isNaN(userQuantity) || userQuantity <= 0) {
    console.log("Invalid quantity! Please enter a positive number.");
    return;
  }
  
  // Calculate total price
  const totalPrice = selectedItem.price * userQuantity;
  console.log(`\nOrder Summary:`);
  console.log(`Item: ${selectedItem.name}`);
  console.log(`Price per item: KWD${selectedItem.price}`);
  console.log(`Quantity: ${userQuantity}`);
  console.log(`Total price: KWD${totalPrice.toFixed(2)}`);
}

drinkMenuCalc();