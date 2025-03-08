import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'




// Login component that uses AuthContext to handle user login and navigation
function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()
  

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    

    
    if (!email || !password) {
      setError('Please enter both email and password')
      return
    }
    
    
    const success = login(email, password)
    
    if (success) {
      navigate('/')
    } else {
      setError('Invalid email or password')
    }
  }
  

  // Login page
  return (
    <div className="login-container container">
      <div className="login-card">

        {/* heading */}
        <h1 className="login-title">Welcome to NutriMeal</h1>
        <p className="login-subtitle">Healthy food for a healthier you</p>
        
        {error && <div className="error-message">{error}</div>}
        

        {/* login form-Email & Password */}
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              id="email"
              className="form-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              id="password"
              className="form-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          
          {/* login button */}
          <button type="submit" className="login-btn">
            Login
          </button>


        </form>
        
        <div className="login-info">
          <p>For demo purposes, you can use any email and password</p>
        </div>


      </div>
    </div>
  )
}

export default Login