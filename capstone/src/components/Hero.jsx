import { Link } from "react-router-dom"
import chefspecial from '../images/restauranfood.jpg'
import '../styles/Hero.css'

export default function Hero() {
    return (
      <>
      <section className="hero-component">
        <article className="hero-component-left">
            <div className="hero-title">Little Lemon</div>
            <div className="hero-subtitle">Chicago</div>
            <p className="hero-description">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <Link to="/bookings" >
                <button className="primary-btn">
                    Reserve a table
                </button>
            </Link>
        </article>
        <img src={chefspecial} width= "200px" alt="Chef special"/>
      </section>
      </>
    )
}