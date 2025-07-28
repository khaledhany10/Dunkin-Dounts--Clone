import Cappuccino from "/website_images/coffee/cappuccino.png";
import CaramelCoffeeDunkaccino from "/website_images/coffee/caramel-coffee-dunkaccino.png";
import ClassicHotChocolate from "/website_images/coffee/classic-hot-chocolate.png";
import DulceDeLecheLatte from "/website_images/coffee/dulce-de-leche-latte.png";
import DunkinCoffee from "/website_images/coffee/Dunkin-Coffee.png";
import FrozenLatte from "/website_images/coffee/frozen-latte.png";
import IcedAmericano from "/website_images/coffee/iced-americano.png";
import IcedCaramelMacchiatto from "/website_images/coffee/iced-caramel-macchiatto.png";
import IcedLatte from "/website_images/coffee/iced-latte.png";
import IcedMochaWhiteChocolate from "/website_images/coffee/iced-mocha-with-white-chocolate.png";
import Macchiato from "/website_images/coffee/macchiato.png";
import SignatureLatte from "/website_images/coffee/signature-latte.png";

import Box3 from "/website_images/dounts/box-of-3.webp";
import Box6 from "/website_images/dounts/box-of-6.webp";
import Box12 from "/website_images/dounts/box-of-12.webp";
import BrownBagel from "/website_images/dounts/brown-bagel-with-cream-cheese.png";
import CaramelDonut from "/website_images/dounts/caramel-donut.jpg";
import FilledRingBavarian from "/website_images/dounts/filled-ring-bavarian-donut.jpg";
import FrostedSprinkles from "/website_images/dounts/frosted-sprinkles-donut.png";

import BaconEggCheese from "/website_images/sandwiches/bacon-egg-and-cheese.png";
import EggCheese from "/website_images/sandwiches/egg-and-cheese.png";
import SausageEggCheese from "/website_images/sandwiches/sausage-egg-and-cheese.png";
import SourdoughSandwich from "/website_images/sandwiches/sourdough-breakfast-sandwich.png";
import TurkeySausage from "/website_images/sandwiches/turkey-sausage-egg-and-cheese.png";
import WakeUp from "/website_images/sandwiches/wake-up.png";

export const products = [
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

  { id: 13, name: "Box of 3", image: Box3, price: 45, category: "donuts" },
  { id: 14, name: "Box of 6", image: Box6, price: 80, category: "donuts" },
  { id: 15, name: "Box of 12", image: Box12, price: 150, category: "donuts" },
  { id: 16, name: "Brown Bagel with Cream Cheese", image: BrownBagel, price: 38, category: "donuts" },
  { id: 17, name: "Caramel Donut", image: CaramelDonut, price: 20, category: "donuts" },
  { id: 18, name: "Filled Ring Bavarian Donut", image: FilledRingBavarian, price: 22, category: "donuts" },
  { id: 19, name: "Frosted Sprinkles Donut", image: FrostedSprinkles, price: 25, category: "donuts" },

  { id: 20, name: "Bacon, Egg and Cheese", image: BaconEggCheese, price: 65, category: "sandwiches" },
  { id: 21, name: "Egg & Cheese", image: EggCheese, price: 50, category: "sandwiches" },
  { id: 22, name: "Sausage, Egg & Cheese", image: SausageEggCheese, price: 65, category: "sandwiches" },
  { id: 23, name: "Sourdough Breakfast Sandwich", image: SourdoughSandwich, price: 70, category: "sandwiches" },
  { id: 24, name: "Turkey Sausage, Egg & Cheese", image: TurkeySausage, price: 68, category: "sandwiches" },
  { id: 25, name: "Wake-Up", image: WakeUp, price: 45, category: "sandwiches" },
];

export default products;
