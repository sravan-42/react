import '../styles/Testimonials.css'
import reviewer1 from "../images/reviewer1.jpg"
import reviewer2 from "../images/reviewer2.jpeg"
import reviewer3 from "../images/reviewer3.jpeg"
import reviewer4 from "../images/reviewer4.jpeg"

export default function Testimonials() {
    return (
      <section className="testimonials">
        <p className="testimonials-title">Testimonials</p>
        <section className="testimonials-container">
            <article className="testimonial">
                <p className="rating">5/5</p>
                <div className="reviewer-name-image">
                 <img src={reviewer1} alt="reviewer1"/>
                 <p>Jack Hobbs</p>
                </div>
                <div className="review-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec massa massa, 
                        semper sed enim at, faucibus mattis lorem. Donec vehicula, leo ut auctor ullamcorper, 
                        diam tortor dignissim velit, ac iaculis libero lacus non diam.
                </div>
            </article>
            <article className="testimonial">
                <p className="rating">5/5</p>
                <div className="reviewer-name-image">
                    <img src={reviewer2} alt="reviewer2"/>
                    <p>Blake Lively</p>
                </div>
                <div className="review-text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec massa massa, 
                        semper sed enim at, faucibus mattis lorem. Donec vehicula, leo ut auctor ullamcorper, 
                        diam tortor dignissim velit, ac iaculis libero lacus non diam. </p>
                </div>
            </article>
            <article className="testimonial">
                <p className="rating">5/5</p>
                <div className="reviewer-name-image">
                    <img src={reviewer3} alt="reviewer3"/>
                    <p>Annie Potts</p>
                </div>
                <div className="review-text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec massa massa, 
                        semper sed enim at, faucibus mattis lorem. Donec vehicula, leo ut auctor ullamcorper, 
                        diam tortor dignissim velit, ac iaculis libero lacus non diam. </p>
                </div>
            </article>
            <article className="testimonial">
                <p className="rating">5/5</p>
                <div className="reviewer-name-image">
                    <img src={reviewer4} alt="reviewer4"/>
                    <p>Jack Daneils</p>
                </div>
                <div className="review-text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec massa massa, 
                        semper sed enim at, faucibus mattis lorem. Donec vehicula, leo ut auctor ullamcorper, 
                        diam tortor dignissim velit, ac iaculis libero lacus non diam. </p>
                </div>
            </article>
        </section>
      </section>
    )
}