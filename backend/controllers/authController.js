const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

// @route POST /api/auth/signup
exports.signup = async (req, res) => {
  const { email, password } = req.body

  try {
    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' })
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const newUser = new User({ email, password: hashedPassword })
    await newUser.save()

    console.log('User created:', newUser.email)  // ✅ Add this for debugging

    return res.status(201).json({ message: 'User created successfully' })
  } catch (err) {
    console.error('Signup error:', err)
    return res.status(500).json({ message: 'Server error' })
  }
}


// @route POST /api/auth/login
exports.login = async (req, res) => {
  const { email, password } = req.body
  try {
    const user = await User.findOne({ email })
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' })
    }

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' })
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1d'
    })

    return res.status(200).json({ token })
  } catch (err) {
    return res.status(500).json({ message: 'Server error' })
  }
}
