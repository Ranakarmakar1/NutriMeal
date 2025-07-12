import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'

function Checkout() {
  const { cartItems, getSubtotal, getTax, getTotal, clearCart } = useCart()
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    paymentMethod: 'upi'
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Simulate placing order
    const orderId = Math.floor(100000 + Math.random() * 900000)
    clearCart()

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

  return (
    <div className="checkout-container container">
      <h1 className="checkout-title">Checkout</h1>

      <form className="checkout-form" onSubmit={handleSubmit}>

        {/* Name */}
        <div className="form-group">
          <label htmlFor="name" className="form-label">Name</label>
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

        {/* Email */}
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

        {/* Phone Number */}
        <div className="form-group">
          <label htmlFor="phone" className="form-label">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="form-input"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        {/* Delivery Address */}
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

        {/* Payment Method */}
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

        {/* Order Summary */}
        <div className="order-summary">
          <h3 className="order-summary-title">Order Summary</h3>
          <div className="summary-row">
            <span>Items ({cartItems.length})</span>
            <span>₹{getSubtotal().toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>Tax (5%)</span>
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
