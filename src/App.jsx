import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header'
import Menu from './components/Menu'
import Cart from './components/Cart'
import Checkout from './components/Checkout'
import OrderConfirmation from './components/OrderConfirmation'
import Login from './components/Login'
import { CartProvider } from './context/CartContext'
import { AuthProvider, useAuth } from './context/AuthContext'

// Protected route component
function ProtectedRoute({ children }) {

  // Route
  const { isLoggedIn } = useAuth()
  
  // If user is not logged in, redirect to login page
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />
  }
  
  return children
}


// App component
function AppContent() {
  const { isLoggedIn } = useAuth()
  
  return (
    <CartProvider>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/login" element={!isLoggedIn ? <Login /> : <Navigate to="/" replace />} />            
            <Route path="/" element={<ProtectedRoute><Menu /></ProtectedRoute>} />
            <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
            <Route path="/checkout" element={<ProtectedRoute><Checkout /></ProtectedRoute>} />
            <Route path="/confirmation" element={<ProtectedRoute><OrderConfirmation /></ProtectedRoute>} />
            <Route path="*" element={<Navigate to={isLoggedIn ? "/" : "/login"} replace />} />
          </Routes>
        </main>
      </div>
    </CartProvider>
  )
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  )
}

export default App