import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useAuth } from '../context/AuthContext'


// Get the current user from the context
function Checkout() {
  const { cartItems, getSubtotal, getTax, getTotal, clearCart } = useCart()
  const { currentUser } = useAuth()
  const navigate = useNavigate()
  
  const [formData, setFormData] = useState({
    name: currentUser?.name || '',
    email: currentUser?.email || '',
    address: '',
    city: '',
    zipCode: '',
    paymentMethod: 'upi'
  })
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    
    // In a real app, you would process the order here
    // For this demo, we'll just navigate to the confirmation page
    
    // Generate a random order ID
    const orderId = Math.floor(100000 + Math.random() * 900000)
    
    // Clear the cart
    clearCart()
    
    // Navigate to confirmation page with order details
    navigate('/confirmation', { 
      state: { 
        orderId,
        orderTotal: getTotal(),
        customerName: formData.name
      } 
    })
  }
  
  if (cartItems.length === 0) {
    navigate('/')
    return null
  }
  


  // Render checkout form
  return (
    <div className="checkout-container container">

      {/* Heading */}
      <h1 className="checkout-title">Checkout</h1>
      
      {/* checkout form */}
      <form className="checkout-form" onSubmit={handleSubmit}>

        {/* full name */}
        <div className="form-group">
          <label htmlFor="name" className="form-label">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-input"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        

        {/*email */}
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-input"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        

        {/* delivery address */}
        <div className="form-group">
          <label htmlFor="address" className="form-label">Delivery Address</label>
          <input
            type="text"
            id="address"
            name="address"
            className="form-input"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        

        {/* city  */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <div className="form-group">
            <label htmlFor="city" className="form-label">City</label>
            <input
              type="text"
              id="city"
              name="city"
              className="form-input"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>
          

          {/* zip code */}
          <div className="form-group">
            <label htmlFor="zipCode" className="form-label">PIN Code</label>
            <input
              type="text"
              id="zipCode"
              name="zipCode"
              className="form-input"
              value={formData.zipCode}
              onChange={handleChange}
              required
            />
          </div>


        </div>
        

        {/* payment method */}
        <div className="form-group">
          <label className="form-label">Payment Method</label>
          <div className="payment-options">
            <label className="payment-option">
              <input
                type="radio"
                name="paymentMethod"
                value="upi"
                checked={formData.paymentMethod === 'upi'}
                onChange={handleChange}
              />
              <span className="payment-label">UPI</span>
            </label>
            <label className="payment-option">
              <input
                type="radio"
                name="paymentMethod"
                value="card"
                checked={formData.paymentMethod === 'card'}
                onChange={handleChange}
              />
              <span className="payment-label">Credit/Debit Card</span>
            </label>
            <label className="payment-option">
              <input
                type="radio"
                name="paymentMethod"
                value="cash"
                checked={formData.paymentMethod === 'cash'}
                onChange={handleChange}
              />
              <span className="payment-label">Cash on Delivery</span>
            </label>
          </div>
        </div>
        


        {/* order summary */}
        <div className="order-summary">
          <h3 className="order-summary-title">Order Summary</h3>
          <div className="summary-row">
            <span>Items ({cartItems.length})</span>
            <span>₹{getSubtotal().toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>Tax</span>
            <span>₹{getTax().toFixed(2)}</span>
          </div>
          <div className="summary-row total">
            <span>Total</span>
            <span>₹{getTotal().toFixed(2)}</span>
          </div>
        </div>
        
        <button type="submit" className="place-order-btn">
          Place Order
        </button>
      </form>
    </div>
  )
}

export default Checkout