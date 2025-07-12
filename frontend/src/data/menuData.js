import PaneerTikka from "../assets/Paneer-tikka-bowl.jpg";
import ChickenMasala from "../assets/Masala-oats.jpg"; // Using as placeholder
import VegKhichdi from "../assets/Vegetable-khichdi.png";
import MasalaOats from "../assets/Masala-oats.jpg";
import Poha from "../assets/Poha.jpg";
import EggCurry from "../assets/egg-curry-with-rice.jpg";
import Lassi from "../assets/Lassi.jpg";
import NimbuPani from "../assets/Nimbu-pani.jpg";
import Upma from "../assets/Upma.jpg";
import RajmaRice from "../assets/Rajma-rice.jpg";

const menuData = [
  {
    id: 1,
    name: "Paneer Tikka Bowl",
    description: "Grilled paneer with sautéed capsicum, onions, and jeera rice",
    price: 199,
    category: "vegetarian",
    image: PaneerTikka,
  },
  {
    id: 2,
    name: "Chicken Masala Bowl",
    description: "Spicy boneless chicken curry with brown rice and salad",
    price: 229,
    category: "non-vegetarian",
    image: ChickenMasala, // Placeholder used
  },
  {
    id: 3,
    name: "Vegetable Khichdi",
    description: "Light and healthy moong dal khichdi with veggies",
    price: 149,
    category: "low-calorie",
    image: VegKhichdi,
  },
  {
    id: 4,
    name: "Masala Oats",
    description: "Oats cooked with vegetables and Indian spices",
    price: 129,
    category: "low-calorie",
    image: MasalaOats,
  },
  {
    id: 5,
    name: "Poha",
    description: "Flattened rice cooked with mustard, curry leaves, peas, and peanuts",
    price: 89,
    category: "vegetarian",
    image: Poha,
  },
  {
    id: 6,
    name: "Egg Curry with Rice",
    description: "Boiled eggs in a mildly spiced curry with steamed rice",
    price: 159,
    category: "non-vegetarian",
    image: EggCurry,
  },
  {
    id: 7,
    name: "Lassi",
    description: "Traditional sweet yogurt-based drink",
    price: 49,
    category: "drinks",
    image: Lassi,
  },
  {
    id: 8,
    name: "Nimbu Pani",
    description: "Refreshing lemon water with mint and cumin",
    price: 29,
    category: "drinks",
    image: NimbuPani,
  },
  {
    id: 9,
    name: "Upma",
    description: "Healthy rava upma with veggies and mustard seasoning",
    price: 99,
    category: "low-calorie",
    image: Upma,
  },
  {
    id: 10,
    name: "Rajma Rice",
    description: "North Indian style rajma curry served with rice",
    price: 179,
    category: "vegetarian",
    image: RajmaRice,
  },
];

export default menuData;
