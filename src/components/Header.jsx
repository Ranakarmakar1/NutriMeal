import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useAuth } from '../context/AuthContext'



function Header() {
  const { getTotalItems } = useCart()
  const { isLoggedIn, currentUser, logout } = useAuth()
  
  return (
    <header>
      <div className="container">
        <nav>

          {/* logo */}
          <Link to="/" className="logo">NutriMeal</Link>


          {/* navigation links -if user is logged in */}
          {isLoggedIn && (
            <div className="nav-links">
              <Link to="/">Menu</Link>
              <Link to="/cart" className="cart-icon">
                Cart
                {getTotalItems() > 0 && (
                  <span className="cart-count">{getTotalItems()}</span>
                )}
              </Link>
              <div className="user-menu">
                <span className="username">Hi, {currentUser?.name}</span>
                <button onClick={logout} className="logout-btn">Logout</button>
              </div>
            </div>
          )}


        </nav>
      </div>
    </header>
  )
}

export default Header