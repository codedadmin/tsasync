interface DrinkBakery {
  id: number;
  name: string;
  price: number;
}

const drinkBakeryItems2: DrinkBakery[] = [
  { id: 1, name: "Espresso", price: 3.5 },
  { id: 2, name: "Cappuccino", price: 4.25 },
  { id: 3, name: "Croissant", price: 2.75 },
  { id: 4, name: "Chocolate Chip Cookie", price: 1.95 },
  { id: 5, name: "Fresh Orange Juice", price: 3.0 },
];

// Simple function that takes user input
async function bakerySystem(): Promise<void> {
  // Print menu using .table
  console.log("Bakery Menu:");
  console.table(drinkBakeryItems2);
  console.log("");

  // Take user order
  const order: { itemId: number; quantity: number }[] = [];
  console.log("Place your order:");
  console.log("Enter item ID and quantity (example: 1 2 for 2x Espresso)");
  console.log("Enter 0 0 to finish");

  const readline = await import("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const askQuestion = (question: string): Promise<string> => {
    return new Promise((resolve) => {
      rl.question(question, (answer) => {
        resolve(answer);
      });
    });
  };

  while (true) {
    const itemIdStr = await askQuestion("Enter item ID: ");
    const itemId = Number(itemIdStr);

    if (itemId === 0) break;

    const item = drinkBakeryItems2.find((item) => item.id === itemId);
    if (!item) {
      console.log("Item not found. Try again.");
      continue;
    }

    const quantityStr = await askQuestion("Enter quantity: ");
    const quantity = Number(quantityStr);

    if (quantity < 1) {
      console.log("Invalid quantity. Try again.");
      continue;
    }

    order.push({ itemId, quantity });
    console.log(`Added ${quantity}x ${item.name}`);
  }

  rl.close();

  // Print receipt
  console.log("\nReceipt:");
  console.log("========");

  let total = 0;

  for (let i = 0; i < order.length; i++) {
    const item = drinkBakeryItems2[order[i].itemId - 1];
    const itemTotal = item.price * order[i].quantity;
    total += itemTotal;

    console.log(`${item.name} x${order[i].quantity} = $${itemTotal}`);
  }

  console.log("========");
  console.log(`Total: $${total}`);
  console.log("Thank you!\n");
}

// Run the program
bakerySystem();

// Take the user choice and quantity and show the total price

// import { getInput } from "./utilities";

// // Function to print the bakery menu
// function printMenu(): void {
//   console.log("\n🍰 Welcome to the Bakery Menu! 🍰");
//   console.log("=====================================");
//   console.log("ID | Item                    | Price");
//   console.log("---|-------------------------|-------");

//   drinkBakeryItems.forEach((item) => {
//     console.log(
//       `${item.id.toString().padEnd(2)} | ${item.name.padEnd(
//         23
//       )} | $${item.price.toFixed(2)}`
//     );
//   });

//   console.log("=====================================\n");
// }

// // Function to take user input for a new order
// async function takeOrder(): Promise<{ itemId: number; quantity: number }[]> {
//   const order: { itemId: number; quantity: number }[] = [];

//   console.log("📝 Place your order (enter 'done' when finished):");

//   while (true) {
//     console.log("\nEnter item ID (1-5) or 'done' to finish:");
//     const itemInput = await getInput();

//     if (itemInput.toLowerCase() === "done") {
//       break;
//     }

//     const itemId = parseInt(itemInput);
//     if (isNaN(itemId) || itemId < 1 || itemId > drinkBakeryItems.length) {
//       console.log("❌ Invalid item ID. Please enter a number between 1-5.");
//       continue;
//     }

//     console.log("Enter quantity:");
//     const quantityInput = await getInput();
//     const quantity = parseInt(quantityInput);

//     if (isNaN(quantity) || quantity < 1) {
//       console.log("❌ Invalid quantity. Please enter a positive number.");
//       continue;
//     }

//     order.push({ itemId, quantity });
//     console.log(
//       `✅ Added ${quantity}x ${
//         drinkBakeryItems[itemId - 1].name
//       } to your order.`
//     );
//   }

//   return order;
// }

// // Function to calculate loyalty points (2 points per $1 spent)
// function calculateLoyaltyPoints(totalAmount: number): number {
//   return Math.floor(totalAmount * 2);
// }

// // Function to print receipt with order and total price
// function printReceipt(order: { itemId: number; quantity: number }[]): void {
//   if (order.length === 0) {
//     console.log("❌ No items in order. Receipt not generated.");
//     return;
//   }

//   console.log("\n🧾 RECEIPT");
//   console.log("================");
//   console.log("Item                    | Qty | Price  | Total");
//   console.log("------------------------|-----|--------|-------");

//   let grandTotal = 0;

//   order.forEach(({ itemId, quantity }) => {
//     const item = drinkBakeryItems[itemId - 1];
//     const itemTotal = item.price * quantity;
//     grandTotal += itemTotal;

//     console.log(
//       `${item.name.padEnd(23)} | ${quantity
//         .toString()
//         .padEnd(3)} | $${item.price
//         .toFixed(2)
//         .padEnd(5)} | $${itemTotal.toFixed(2)}`
//     );
//   });

//   console.log("------------------------|-----|--------|-------");
//   console.log(`TOTAL: ${" ".repeat(35)} $${grandTotal.toFixed(2)}`);

//   // Calculate and display loyalty points
//   const loyaltyPoints = calculateLoyaltyPoints(grandTotal);
//   console.log("========================");
//   console.log(`🎁 LOYALTY POINTS EARNED: ${loyaltyPoints} points`);
//   console.log(`💡 Earn 2 points for every $1 spent!`);
//   console.log("================\n");
//   console.log("Thank you for your order! 🎉");
// }

// // Main function to run the bakery system
// async function runBakery(): Promise<void> {
//   printMenu();
//   const order = await takeOrder();
//   printReceipt(order);
// }

// // Run the bakery system
// runBakery();
