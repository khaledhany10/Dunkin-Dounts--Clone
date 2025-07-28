
import Cappuccino from "/website_images/coffee/Cappuccino.png";
import CaramelCoffeeDunkaccino from "/website_images/coffee/Caramel Coffee Dunkaccino.png";
import ClassicHotChocolate from "/website_images/coffee/Classic Hot Chocolate.png";
import DulceDeLecheLatte from "/website_images/coffee/Dulce De Leche Latte.png";
import DunkinCoffee from "/website_images/coffee/Dunkin' Coffee.png";
import FrozenLatte from "/website_images/coffee/Frozen Latte.png";
import IcedAmericano from "/website_images/coffee/Iced Americano.png";
import IcedCaramelMacchiatto from "/website_images/coffee/Iced Caramel Macchiatto.png";
import IcedLatte from "/website_images/coffee/Iced Latte.png";
import IcedMochaWhiteChocolate from "/website_images/coffee/Iced Mocha with White Chocolate.png";
import Macchiato from "/website_images/coffee/Macchiato.png";
import SignatureLatte from "/website_images/coffee/signature latte.png";

import Box3 from "/website_images/Dounts/Box of 3.webp";
import Box6 from "/website_images/Dounts/Box of 6.webp";
import Box12 from "/website_images/Dounts/Box of 12.webp";
import BrownBagel from "/website_images/Dounts/Brown Bagel with Cream Cheese.png";
import CaramelDonut from "/website_images/Dounts/Caramel Donut.jpg";
import FilledRingBavarian from "/website_images/Dounts/Filled Ring Bavarian Donut.jpg";
import FrostedSprinkles from "/website_images/Dounts/Frosted Sprinkles Donut.png";

import BaconEggCheese from "/website_images/sandwiches/bacon, egg and cheese.png";
import EggCheese from "/website_images/sandwiches/Egg & Cheese.png";
import SausageEggCheese from "/website_images/sandwiches/Sausage, Egg & Cheese.png";
import SourdoughSandwich from "/website_images/sandwiches/Sourdough Breakfast Sandwich.png";
import TurkeySausage from "/website_images/sandwiches/Turkey Sausage, Egg & Cheese.png";
import WakeUp from "/website_images/sandwiches/Wake-Up.png";

export const products = [
  // Drinks
  { id: 1, name: "Cappuccino", image: Cappuccino, price: 45, category: "drinks" },
  { id: 2, name: "Caramel Coffee Dunkaccino", image: CaramelCoffeeDunkaccino, price: 55, category: "drinks" },
  { id: 3, name: "Classic Hot Chocolate", image: ClassicHotChocolate, price: 50, category: "drinks" },
  { id: 4, name: "Dulce De Leche Latte", image: DulceDeLecheLatte, price: 60, category: "drinks" },
  { id: 5, name: "Dunkin' Coffee", image: DunkinCoffee, price: 40, category: "drinks" },
  { id: 6, name: "Frozen Latte", image: FrozenLatte, price: 65, category: "drinks" },
  { id: 7, name: "Iced Americano", image: IcedAmericano, price: 42, category: "drinks" },
  { id: 8, name: "Iced Caramel Macchiatto", image: IcedCaramelMacchiatto, price: 55, category: "drinks" },
  { id: 9, name: "Iced Latte", image: IcedLatte, price: 52, category: "drinks" },
  { id: 10, name: "Iced Mocha with White Chocolate", image: IcedMochaWhiteChocolate, price: 58, category: "drinks" },
  { id: 11, name: "Macchiato", image: Macchiato, price: 48, category: "drinks" },
  { id: 12, name: "Signature Latte", image: SignatureLatte, price: 60, category: "drinks" },

  // Donuts
  { id: 13, name: "Box of 3", image: Box3, price: 45, category: "donuts" },
  { id: 14, name: "Box of 6", image: Box6, price: 80, category: "donuts" },
  { id: 15, name: "Box of 12", image: Box12, price: 150, category: "donuts" },
  { id: 16, name: "Brown Bagel with Cream Cheese", image: BrownBagel, price: 38, category: "donuts" },
  { id: 17, name: "Caramel Donut", image: CaramelDonut, price: 20, category: "donuts" },
  { id: 18, name: "Filled Ring Bavarian Donut", image: FilledRingBavarian, price: 22, category: "donuts" },
  { id: 19, name: "Frosted Sprinkles Donut", image: FrostedSprinkles, price: 25, category: "donuts" },

  // Sandwiches
  { id: 20, name: "Bacon, Egg and Cheese", image: BaconEggCheese, price: 65, category: "sandwiches" },
  { id: 21, name: "Egg & Cheese", image: EggCheese, price: 50, category: "sandwiches" },
  { id: 22, name: "Sausage, Egg & Cheese", image: SausageEggCheese, price: 65, category: "sandwiches" },
  { id: 23, name: "Sourdough Breakfast Sandwich", image: SourdoughSandwich, price: 70, category: "sandwiches" },
  { id: 24, name: "Turkey Sausage, Egg & Cheese", image: TurkeySausage, price: 68, category: "sandwiches" },
  { id: 25, name: "Wake-Up", image: WakeUp, price: 45, category: "sandwiches" },
];

export default products;
