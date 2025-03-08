


const menuData = [
  {
    id: 1,
    name: "Protein Bowl",
    description: "Grilled chicken, quinoa, avocado, and mixed greens with lemon dressing",
    price: 249,
    category: "protein",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 2,
    name: "Tofu Stir Fry",
    description: "Marinated tofu with broccoli, bell peppers, and brown rice",
    price: 199,
    category: "vegetarian",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 3,
    name: "Grilled Salmon",
    description: "Herb-crusted salmon with steamed vegetables and quinoa",
    price: 349,
    category: "protein",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 4,
    name: "Vegetable Curry",
    description: "Mixed vegetables in a light curry sauce with brown rice",
    price: 179,
    category: "vegetarian",
    image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 5,
    name: "Egg White Omelette",
    description: "Egg white omelette with spinach, tomatoes, and feta cheese",
    price: 149,
    category: "breakfast",
    image: "https://images.unsplash.com/photo-1510693206972-df098062cb71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 6,
    name: "Chickpea Salad",
    description: "Chickpeas with cucumber, tomato, and red onion in a lemon dressing",
    price: 169,
    category: "vegetarian",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 7,
    name: "Grilled Chicken Breast",
    description: "Herb-marinated chicken breast with steamed broccoli and sweet potato",
    price: 229,
    category: "protein",
    image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 8,
    name: "Overnight Oats",
    description: "Rolled oats with almond milk, chia seeds, and mixed berries",
    price: 129,
    category: "breakfast",
    image: "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 9,
    name: "Lentil Soup",
    description: "Hearty lentil soup with carrots, celery, and spinach",
    price: 159,
    category: "vegetarian",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 10,
    name: "Greek Yogurt Parfait",
    description: "Greek yogurt with honey, granola, and fresh fruit",
    price: 139,
    category: "breakfast",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 11,
    name: "Detox Green Smoothie",
    description: "Spinach, kale, banana, and almond milk smoothie",
    price: 119,
    category: "drinks",
    image: "https://images.unsplash.com/photo-1556881286-fc6915169721?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 12,
    name: "Protein Shake",
    description: "Whey protein with banana, peanut butter, and almond milk",
    price: 149,
    category: "drinks",
    image: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  }
]

export default menuData