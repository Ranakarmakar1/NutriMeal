import { Link } from 'react-router-dom'
import heroImage from '../assets/healthy-indian-food.jpg' // Replace with a real image in your assets
import '../styles/Dashboard.css'


function Dashboard() {
  return (
    <div className="dashboard">
      <div className="hero-section">
        <img src={heroImage} alt="Healthy Indian Food" className="hero-image" />
        <div className="hero-content">
          <h1>Health is Wealth</h1>
          <p>Discover nutritious Indian meals that nourish your body and soul.</p>
          <Link to="/menu">
            <button className="explore-btn">Explore Meals</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
