import { useState } from 'react'
import { useCart } from '../context/CartContext'
import menuData from '../data/menuData'
import '../styles/Menu.css'



function Menu() {
  const { addToCart } = useCart()
  const [activeCategory, setActiveCategory] = useState('all')

  // Define the fixed Indian-style categories
  const categories = ['all', 'vegetarian', 'non-vegetarian', 'drinks', 'low-calorie']

  // Filter menu items by active category
  const filteredItems = activeCategory === 'all'
    ? menuData
    : menuData.filter(item => item.category === activeCategory)

  return (
    <div className="menu-container container">
      <h1 className="menu-title">NutriMeal – Wholesome Indian Meals</h1>

      {/* Category Filter Buttons */}
      <div className="categories">
        {categories.map(category => (
          <button
            key={category}
            className={`category-btn ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Menu Items */}
      <div className="menu-grid">
        {filteredItems.map(item => (
          <div key={item.id} className="menu-item">
            <img
              src={item.image}
              alt={item.name}
              className="menu-item-image"
            />
            <div className="menu-item-info">
              <h3 className="menu-item-title">{item.name}</h3>
              <p className="menu-item-description">{item.description}</p>
              <p className="menu-item-price">₹{item.price.toFixed(2)}</p>
              <button
                className="add-to-cart"
                onClick={() => addToCart(item)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Menu
