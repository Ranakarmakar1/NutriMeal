const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const connectDB = require('./config/db')

// ENV config
dotenv.config()

// Connect DB
connectDB()

// App init
const app = express()


// CORS – Temporarily allow all origins just for backend testing
app.use(cors({
  origin: 'https://nutrimeal.onrender.com',
  credentials: true
}))



app.use(express.json())

// Routes
app.use('/api/auth', require('./routes/authRoutes'))

// Port
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
