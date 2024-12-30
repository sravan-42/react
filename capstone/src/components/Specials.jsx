import React from 'react';
import greeksalad from '../images/greek salad.jpg'
import bruchetta from '../images/bruchetta.jpeg'
import lemondessert from '../images/lemon dessert.jpg'
import '../styles/Specials.css'

const Specials = () => (
    <section className="specials-section">
    <article className="specials-title-article">
        <div className="specials-title">Specials!</div>
        <button className="primary-btn">Online Menu</button>
    </article>
    <section className="cards">
        <article className="card">
            <img className="food-img" src={greeksalad} alt="greek salad"/>
            <div className='card-content'>
                <div className="item">
                    <div className="item-name">Greek Salad</div>
                    <div className="item-price">$12.99</div>
                </div>
                <div className="item-description">
                    <p>Greek salad or horiatiki salad is a salad in Greek cuisine generally made with pieces of tomatoes, cucumbers, onion, feta cheese, and olives and dressed with salt, Greek oregano, lemon juice and olive oil. Common additions include green bell pepper or caper berries.</p>
                </div>
                <div className="delivery">
                    <p>Order a delivery</p>
                </div>
            </div>
        </article>
        <article className="card">
            <img className="food-img" src={bruchetta} alt="bruchetta"/>
            <div className='card-content'>
                <div className="item">
                    <div className="item-name">Bruchetta</div>
                    <div className="item-price">$5.99</div>
                </div>
                <div className="item-description">
                    <p>Bruschetta is an Italian appetizer (antipasto) consisting of grilled bread topped with garlic, olive oil, and salt. Most commonly it is served with toppings of tomatoes, vegetables, beans, cured meat or cheese. In Italy, bruschetta is often prepared using a brustolina grill.</p>
                </div>
                <div className="delivery">
                    <p>Order a delivery</p>
                </div>
            </div>
        </article>
        <article className="card">
            <img className="food-img" src={lemondessert} alt="lemon-dessert"/>
            <div className='card-content'>
                <div className="item">
                    <div className="item-name">Lemon Dessert</div>
                    <div className="item-price">$5.00</div>
                </div>
                <div className="item-description">
                    <p>This comes straight from grandma’s recipe book,every last ingredient has been sourced and is as authentic as can be imagined. </p>
                </div>
                <div className="delivery">
                    <p>Order a delivery</p>
                </div>
            </div>
        </article>
    </section>
  </section>
);

export default Specials;