import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

// Pages
import Home from '../pages/Home' // ✅ NEW Home page
import Menu from '../pages/Menu'
import Cart from '../pages/Cart'
import Checkout from '../components/Checkout'
import OrderConfirmation from '../pages/OrderConfirmation'
import Login from '../components/Login'
import Signup from '../components/Signup'

// 🔐 Protected wrapper
function ProtectedRoute({ children }) {
  const { isLoggedIn } = useAuth()
  return isLoggedIn ? children : <Navigate to="/login" replace />
}

function AppRoutes() {
  const { isLoggedIn } = useAuth()

  return (
    <Routes>
      {/* Public */}
      <Route path="/login" element={!isLoggedIn ? <Login /> : <Navigate to="/" replace />} />
      <Route path="/signup" element={!isLoggedIn ? <Signup /> : <Navigate to="/" replace />} />

      {/* Public Home */}
      <Route path="/" element={<Home />} /> {/* ✅ HOME always accessible */}

      {/* Protected Routes */}
      <Route path="/menu" element={<ProtectedRoute><Menu /></ProtectedRoute>} />
      <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
      <Route path="/checkout" element={<ProtectedRoute><Checkout /></ProtectedRoute>} />
      <Route path="/confirmation" element={<ProtectedRoute><OrderConfirmation /></ProtectedRoute>} />

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default AppRoutes
