import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useAuth } from '../context/AuthContext'
import "../styles/App.css"; 

function Header() {
  const { getTotalItems } = useCart()
  const { isLoggedIn, currentUser, logout } = useAuth()
  
  return (
    <header>
      <div className="container">
        <nav>

          {/* Logo */}
          <Link to="/" className="logo">NutriMeal</Link>

          {/* Navigation Links */}
          <div className="nav-links">
            <Link to="/">Home</Link> {/* ✅ NEW */}
            {isLoggedIn && (
              <>
                <Link to="/menu">Menu</Link>
                <Link to="/cart" className="cart-icon">
                  Cart
                  {getTotalItems() > 0 && (
                    <span className="cart-count">{getTotalItems()}</span>
                  )}
                </Link>
              </>
            )}
          </div>

          {/* User Menu */}
          {isLoggedIn && (
            <div className="user-menu">
              <span className="username">Hi, {currentUser?.name}</span>
              <button onClick={logout} className="logout-btn">Logout</button>
            </div>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Header
