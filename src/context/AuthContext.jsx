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
  
  // Login function
  const login = (email, password) => {

    
    // In a real app, you would validate credentials against a backend
    // For this demo, we'll just check if email and password are not empty
    if (email && password) {
      const user = { email, name: email.split('@')[0] }
      setCurrentUser(user)
      setIsLoggedIn(true)
      localStorage.setItem('user', JSON.stringify(user))
      return true
    }
    return false
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