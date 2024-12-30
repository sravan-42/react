import "../styles/Story.css"
import chef from '../images/restaurant chef B.jpg'

export default function Story() {
    return (
      <section className="restaurant-story">
        <article className="restaurant-story-article">
            <div>
                <p className="title">Little Lemon</p>
                <p className="subtitle">Chicago</p>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            </div>
            <img src={chef} alt="story"/>
        </article>
      </section>
    )
}