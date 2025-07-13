import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
  e.preventDefault()
  setError('')
  setSuccess('')

 
// Email format check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
// Password format check
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/


  const allowedDomains = [
  'gmail.com',
  'yahoo.com',
  'outlook.com',
  'hotmail.com',
  'email.com',
  'protonmail.com'
]

  if (!email || !password || !confirmPassword) {
    setError('Please fill all fields')
    return
  }

  if (!emailRegex.test(email)) {
  setError('Please enter a valid email address')
  return
}

// Email domain check
const domain = email.split('@')[1]
if (!allowedDomains.includes(domain)) {
  setError('Email domain not allowed. Use gmail, email, Outlook , etc.')
  return
}

  if (!passwordRegex.test(password)) {
    setError(
      'Password must be at least 8 characters and include uppercase, lowercase, number, and special character'
    )
    return
  }

  if (password !== confirmPassword) {
    setError('Passwords do not match')
    return
  }

  // API call
  try {
const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/auth/signup`, {


      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })

    const data = await res.json()

    if (!res.ok) {
      throw new Error(data.message || 'Signup failed')
    }

    setSuccess('Signup successful! You can now log in.')
    setTimeout(() => navigate('/login'), 1500)
  } catch (err) {
    setError(err.message)
  }
}




  return (
    <div className="login-container container">
      <div className="login-card">
        <h1 className="login-title">Create your NutriMeal account</h1>
        <p className="login-subtitle">Join us for healthy meals</p>

        {error && <div className="error-message">{error}</div>}
        {success && <div className="success-message">{success}</div>}

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create a password"
              required
            />
          </div>

          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              className="form-input"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
              required
            />
          </div>

          <button type="submit" className="login-btn">Sign Up</button>
        </form>

        <div className="login-info">
          <p>Already have an account? <a href="/login">Login here</a></p>
        </div>
      </div>
    </div>
  )
}

export default Signup
