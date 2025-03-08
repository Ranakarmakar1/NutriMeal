import { useLocation, Link } from 'react-router-dom'

function OrderConfirmation() {
  const location = useLocation()
  const { orderId, orderTotal, customerName } = location.state || {}
  
  // If no order data, redirect to home
  if (!orderId) {
    return (
      <div className="confirmation-container container">
        <h1>No order found</h1>
        <Link to="/" className="back-to-menu">Back to Menu</Link>
      </div>
    )
  }
  
  return (
    <div className="confirmation-container container">
      <div className="confirmation-icon">✓</div>
      <h1 className="confirmation-title">Order Confirmed!</h1>
      <p className="confirmation-message">
        Thank you, {customerName}! Your order has been placed successfully.
      </p>
      
      <div className="order-details">
        <p className="order-id">Order ID: #{orderId}</p>
        <p>We've received your order and are preparing it now.</p>
        <p>Your healthy meal will be delivered within 30-45 minutes.</p>
        <p>Total amount: ₹{orderTotal.toFixed(2)}</p>
      </div>
      
      <Link to="/" className="back-to-menu">
        Back to Menu
      </Link>
    </div>
  )
}

export default OrderConfirmation