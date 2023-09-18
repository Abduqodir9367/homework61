import React from "react";
import "./Hero.css";
function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="first">
          <div className="left">
            <h1>Work at the speed of thought</h1>
            <p>
              Tools, tutorials, design and innovation experts, all in one place!
              The most intuitive way to imagine your next user experience.
            </p>
            <div className="hero-btns">
              <button className="btn1">Get started</button>
              <button className="btn2">Watch the Video</button>
            </div>
          </div>
          <div className="right">
            <img src="assets/social-media/amico.png" alt="img" />
          </div>
        </div>
        <section className="second">
          <div className="container">
            <div className="par">
              <h1>Product was Built Specifically for You</h1>
            </div>
            <div className="cards">
              <div className="card">
                <img src="assets/icon1.png" alt="icon" className="card-img" />
                <h4>First click tests</h4>
                <p>While most people enjoy casino gambling,</p>
              </div>
              <div className="card">
                <img src="assets/icon2.png" alt="icon" className="card-img" />
                <h4>Design surveys</h4>
                <p>Sports betting, lottery and bingo playing for the fun</p>
              </div>
              <div className="card">
                <img src="assets/icon3.png" alt="icon" className="card-img" />
                <h4>Preference tests</h4>
                <p>The Myspace page defines the individual.</p>
              </div>
              <div className="card">
                <img src="assets/icon4.png" alt="icon" className="card-img" />
                <h4>Five second tests</h4>
                <p>
                  Personal choices and the overall personality of the person.{" "}
                </p>
              </div>
            </div>
            <div className="second-btn">
              <button className="btn1">SIGN UP NOW</button>
            </div>
          </div>
        </section>
        <section className="three">
          <div className="container">
            <div className="par">
              <h1>Contents Strategies</h1>
              <p>
                We focus on ergonomics and meeting you where you work. It's only
                a keystroke away.
              </p>
            </div>
            <div className="carts">
              <div className="cart">
                <img src="assets/three1.png" alt="img" />
                <div className="cart-content">
                  <div className="title">
                    <p>By</p>
                    <h4>By Wahid Ari</h4>
                    <p> | 03 March 2019</p>
                  </div>
                  <div className="description">
                    <h3>Increasing Prosperity With Positive Thinking</h3>
                  </div>
                </div>
              </div>
              <div className="cart">
                <img src="assets/three2.png" alt="img" />
                <div className="cart-content">
                  <div className="title">
                    <p>By</p>
                    <h4>By Wahid Ari</h4>
                    <p> | 03 March 2019</p>
                  </div>
                  <div className="description">
                    <h3>Motivation Is The First Step To Success</h3>
                  </div>
                </div>
              </div>
              <div className="cart">
                <img src="assets/three3.png" alt="img" />
                <div className="cart-content">
                  <div className="title">
                    <p>By</p>
                    <h4>By Wahid Ari</h4>
                    <p> | 03 March 2019</p>
                  </div>
                  <div className="description">
                    <h3>Success Steps For Your Personal Or Business</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="fourth">
          <div className="container">
            <div className="par">
              <h1>Price Table</h1>
              <p className="p6">We offer competitive price</p>
            </div>
            <div className="boxes">
              <div className="box">
                <div className="box-content">
                  <h4>Free</h4>
                  <p className="p1">Brief price description</p>
                  <div className="box-main">
                    <h1>0</h1>
                    <div className="main1">
                      <h3>$</h3>
                      <p className="p2">Per / month</p>
                    </div>
                  </div>
                  <p className="p3">Only 2 Operators</p>
                  <p className="p4">Notifications</p>
                  <p className="p5">Landing Pages</p>
                  <button>Order Now</button>
                </div>
              </div>
              <div className="box">
                <div className="box-content">
                  <h4>Standard</h4>
                  <p className="p1">Brief price description</p>
                  <div className="box-main">
                    <h1>5</h1>
                    <div className="main1">
                      <h3>$</h3>
                      <p className="p2">Per / month</p>
                    </div>
                  </div>
                  <p className="p3">5+ Operators</p>
                  <p className="p4">Notifications</p>
                  <p className="p5">Landing Pages</p>
                  <button>Order Now</button>
                </div>
              </div>
              <div className="box">
                <div className="box-content">
                  <h4>Premium</h4>
                  <p className="p1">Brief price description</p>
                  <div className="box-main">
                    <h1>10</h1>
                    <div className="main1">
                      <h3>$</h3>
                      <p className="p2">Per / month</p>
                    </div>
                  </div>
                  <p className="p3">10+ Operators</p>
                  <p className="p4">Notifications</p>
                  <p className="p5">Landing Pages</p>
                  <button>Order Now</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="five">
          <div className="container">
            <div className="par">
              <h1>What Clients Say</h1>
              <p>Problems trying to resolve the conflict between</p>
              <p>
                the two major realms of Classical physics: Newtonian mechanics
              </p>
            </div>
            <div className="clients">
              <div className="client">
                <img src="assets/star.png" width={106} height={18} alt="img" />
                <p>
                  Product helps you see how many more days you need to work to
                  reach your financial goal.
                </p>
                <div className="foter">
                  <img src="assets/person1.png" alt="img" />
                  <div className="right">
                    <h4>Wahid Ari</h4>
                    <h5>Designerx</h5>
                  </div>
                </div>
              </div>
              <div className="client">
                <img src="assets/star.png" width={106} height={18} alt="img" />
                <p>
                  Product helps you see how many more days you need to work to
                  reach your financial goal.
                </p>
                <div className="foter">
                  <img src="assets/person2.png" alt="img" />
                  <div className="right">
                    <h4>Wahid Ari</h4>
                    <h5>Designerx</h5>
                  </div>
                </div>
              </div>
              <div className="client">
                <img src="assets/star.png" width={106} height={18} alt="img" />
                <p>
                  Product helps you see how many more days you need to work to
                  reach your financial goal.
                </p>
                <div className="foter">
                  <img src="assets/person3.png" alt="img" />
                  <div className="right">
                    <h4>Wahid Ari</h4>
                    <h5>Designerx</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Hero;
