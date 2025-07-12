import { AuthProvider } from './context/AuthContext'
import { CartProvider } from './context/CartContext'
import Header from './components/Header'
import AppRoutes from './routes/AppRoutes' // ⬅️ NEW

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <div className="app">
          <Header />
          <main>
            <AppRoutes /> {/* ✅ All routes go here now */}
          </main>
        </div>
      </CartProvider>
    </AuthProvider>
  )
}

export default App
