import { useState } from 'react'
import { useCart } from '../context/CartContext'
import menuData from '../data/menuData'

function Menu() {
  const { addToCart } = useCart()
  const [activeCategory, setActiveCategory] = useState('all')
  
  // Get unique categories
  const categories = ['all', ...new Set(menuData.map(item => item.category))]
  
  // Filter menu items by category
  const filteredItems = activeCategory === 'all' 
    ? menuData 
    : menuData.filter(item => item.category === activeCategory)
  
  return (
    <div className="menu-container container">
      <h1 className="menu-title">Our Healthy Menu</h1>
      
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