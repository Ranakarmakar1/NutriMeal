import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

// Pages & Components
import Dashboard from '../pages/Dashboard' // ✅ Intro Page
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

      {/* Protected */}
      <Route path="/" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
      <Route path="/menu" element={<ProtectedRoute><Menu /></ProtectedRoute>} />
      <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
      <Route path="/checkout" element={<ProtectedRoute><Checkout /></ProtectedRoute>} />
      <Route path="/confirmation" element={<ProtectedRoute><OrderConfirmation /></ProtectedRoute>} />

      {/* Fallback */}
      <Route path="*" element={<Navigate to={isLoggedIn ? "/" : "/login"} replace />} />
    </Routes>
  )
}

export default AppRoutes
