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
