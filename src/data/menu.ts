export type MenuItem = {
  name: string;
  tag: string;
  description: string;
  price: string;
  imageClass: string;
  category: "coffee" | "sweet" | "lunch";
};

export const menuItems: MenuItem[] = [
  {
    name: "The Pivot",
    tag: "Most popular",
    description: "Double espresso, oat milk, cinnamon",
    price: "$6.50",
    imageClass: "latte-image",
    category: "coffee",
  },
  {
    name: "How You Brewin'?",
    tag: "Joey's pick",
    description: "Vanilla cold brew, sweet cream",
    price: "$5.75",
    imageClass: "pastry-image",
    category: "coffee",
  },
  {
    name: "Smelly Cat",
    tag: "The classic",
    description: "Warm chocolate chip cookie, sea salt",
    price: "$4.25",
    imageClass: "cake-image",
    category: "sweet",
  },
  {
    name: "The Holiday Armadillo",
    tag: "Seasonal",
    description: "Gingerbread mocha, whipped cream",
    price: "$6.75",
    imageClass: "holiday-image",
    category: "coffee",
  },
  {
    name: "We Were On A Break",
    tag: "Iced coffee",
    description: "Iced caramel latte, sea salt foam",
    price: "$6.25",
    imageClass: "iced-image",
    category: "coffee",
  },
  {
    name: "The Moist Maker",
    tag: "For lunch",
    description: "Roast turkey, gravy, sourdough toast",
    price: "$11.50",
    imageClass: "sandwich-image",
    category: "lunch",
  },
];
