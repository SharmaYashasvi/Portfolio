import React from "react";
import design from "../assets/images/icon-design.svg";
import development from "../assets/images/icon-dev.svg";
import Testimonials from "./Testimonials.jsx";

const Home = () => {
  return (
    <div>
      <article className="about active" data-page="about">
        <header>
          <h2 className="h2 article-title">About me</h2>
        </header>

        <section className="about-text">
          <p>
            Driven by curiosity and a passion for learning, I eagerly embrace
            challenges and thrive in a collaborative team environment. I am
            committed to taking on responsibilities and constantly expanding my
            technical expertise. With a growth mindset, I actively seek
            opportunities for personal and professional development, knowing
            that my progress will not only benefit me but also contribute to the
            success of the organization.
          </p>

          <p>
            As a web developer, my mission is to craft an exceptional online
            presence for your brand. I go beyond functionality and
            user-friendliness, as I believe that a website should also captivate
            and engage your audience. With meticulous attention to detail, I
            infuse a personal touch into every aspect of your product, ensuring
            it is not only visually stunning but also effortless to navigate. My
            ultimate goal is to breathe life into your message and identity,
            showcasing them in the most innovative and captivating manner. With
            a proven track record of creating awe-inspiring web designs for
            renowned brands, I am ready to elevate your online presence to new
            heights.
          </p>
        </section>

        {/* service */}

        <section className="service">
          <h3 className="h3 service-title">What I'm doing</h3>

          <ul className="service-list">
            <li className="service-item">
              <div className="service-icon-box">
                <img
                  src={design}
                  alt="design icon"
                  width="40"
                />
              </div>
              <div className="service-content-box">
                <h4 className="h4 service-item-title">Web design</h4>
                <p className="service-item-text">
                  The most modern and high-quality design made at a professional
                  level.
                </p>
              </div>
            </li>

            <li className="service-item">
              <div className="service-icon-box">
                <img
                  src={development}
                  alt="Web development icon"
                  width="40"
                />
              </div>
              <div className="service-content-box">
                <h4 className="h4 service-item-title">Web development</h4>
                <p className="service-item-text">
                  High-quality development of sites at the professional level.
                </p>
              </div>
            </li>

            {/* <li className="service-item">
              <div className="service-icon-box">
                <img
                  src="./assets/images/icon-app.svg"
                  alt="mobile app icon"
                  width="40"
                />
              </div>
              <div className="service-content-box">
                <h4 className="h4 service-item-title">Mobile apps</h4>
                <p className="service-item-text">
                  Professional development of applications for iOS and Android.
                </p>
              </div>
            </li>

            <li className="service-item">
              <div className="service-icon-box">
                <img
                  src="./assets/images/icon-photo.svg"
                  alt="camera icon"
                  width="40"
                />
              </div>
              <div className="service-content-box">
                <h4 className="h4 service-item-title">Photography</h4>
                <p className="service-item-text">
                  I take high-quality photos of any category at a professional
                  level.
                </p>
              </div>
            </li> */}
          </ul>
        </section>
        <Testimonials/>
      </article>
    </div>
  );
};

export default Home;
