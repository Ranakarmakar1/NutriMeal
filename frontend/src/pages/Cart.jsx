import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

function Cart() {


  // Get cart items, remove item, update quantity, calculate subtotal, tax, and total from context
  const { 
    cartItems, 
    removeFromCart, 
    updateQuantity, 
    getSubtotal, 
    getTax, 
    getTotal 
  } = useCart()
  

  // If cart is empty, display message and return early
  if (cartItems.length === 0) {
    return (
      <div className="cart-container container">

        {/* title */}
        <h1 className="cart-title">Your Cart</h1>

        {/* message */}
        <p className="cart-empty">Your cart is empty. Go back to the menu to add items.</p>

        {/* back to menu button */}
        <div style={{ textAlign: 'center' }}>
          <Link to="/" className="back-to-menu">Back to Menu</Link>
        </div>


      </div>
    )
  }
  

  // Calculate subtotal, tax, and total 
  return (
    <div className="cart-container container">

      {/* title */}
      <h1 className="cart-title">Your Cart</h1>
      
      <div className="cart-content" style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '2rem' }}>


        {/* subtotal */}
        <div className="cart-items">
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">

              {/* image */}
              <img 
                src={item.image} 
                alt={item.name} 
                className="cart-item-image" 
              />

              {/* info */}
              <div className="cart-item-info">
                <h3 className="cart-item-title">{item.name}</h3>
                <p className="cart-item-price">₹{item.price.toFixed(2)}</p>
              </div>

              {/* quantity */}
              <div className="cart-item-quantity">
                <button 
                  className="quantity-btn"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                >
                  -
                </button>
                <span className="quantity-value">{item.quantity}</span>
                <button 
                  className="quantity-btn"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
              </div>

              {/* remove button */}
              <button 
                className="remove-btn"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>


            </div>
          ))}
        </div>
        


        {/* order summary */}
        <div className="cart-summary">
          <h2>Order Summary</h2>

          {/* subtotal */}
          <div className="summary-row">
            <span>Subtotal</span>
            <span>₹{getSubtotal().toFixed(2)}</span>
          </div>

          {/* tax */}
          <div className="summary-row">
            <span>Tax (5%)</span>
            <span>₹{getTax().toFixed(2)}</span>
          </div>

          {/* total */}
          <div className="summary-row total">
            <span>Total</span>
            <span>₹{getTotal().toFixed(2)}</span>
          </div>

        {/* checkout button */}
          <Link to="/checkout">
            <button className="checkout-btn">Proceed to Checkout</button>
          </Link>


          
        </div>
      </div>
    </div>
  )
}

export default Cart