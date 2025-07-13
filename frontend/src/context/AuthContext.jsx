import { createContext, useState, useContext, useEffect } from 'react'

const AuthContext = createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  
  // Check if user is already logged in from localStorage
  useEffect(() => {
    const user = localStorage.getItem('user')
    if (user) {
      setCurrentUser(JSON.parse(user))
      setIsLoggedIn(true)
    }
  }, [])
  


  //login
 const login = async (email, password) => {
  try {
    const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/auth/login`, {

      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })

    const data = await res.json()

    if (!res.ok) {
      // 🛑 Show backend error (like: "Invalid credentials")
      throw new Error(data.message || 'Invalid email or password')
    }

    localStorage.setItem('token', data.token)
    const user = { email }
    localStorage.setItem('user', JSON.stringify(user))

    setCurrentUser(user)
    setIsLoggedIn(true)
    return true
  } catch (err) {
    console.error('Login error:', err.message)
    return false
  }
}


  
  // Logout function
  const logout = () => {
    setCurrentUser(null)
    setIsLoggedIn(false)
    localStorage.removeItem('user')
  }
  
  const value = {
    currentUser,
    isLoggedIn,
    login,
    logout
  }
  
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}