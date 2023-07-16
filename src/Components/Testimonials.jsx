import React, { useState } from "react";
import "../assets/css/style.css";
import { IoMdClose } from "react-icons/io";
import avatar1 from "../assets/images/avatar-1.png";
import quoteicon from "../assets/images/icon-quote.svg"
const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Suresh Vidyarthi",
      avatar:avatar1,
      content:
        `Yashasvi was hired as a full stack web developer intern for project Encodingo. During internship, Yashasvi consistently delivered high-quality code. He paid meticulous attention to detail and adhered to best practices, resulting in clean, efficient, and maintainable codebases. He also demonstrated proficiency in debugging and troubleshooting, effectively resolving issues and minimizing downtime.`,
    },
    // {
    //   id: 2,
    //   name: "Jessica miller",
    //   avatar: "./assets/images/avatar-2.png",
    //   content:
    //     "During their internship, Yashasvi consistently delivered high-quality code. He paid meticulous attention to detail and adhered to best practices, resulting in clean, efficient, and maintainable codebases. He also demonstrated proficiency in debugging and troubleshooting, effectively resolving issues and minimizing downtime.",
    // },
    // {
    //   id: 3,
    //   name: "Emily evans",
    //   avatar: "./assets/images/avatar-3.png",
    //   content:
    //     "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of the client. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    // },
    // {
    //   id: 4,
    //   name: "Henry william",
    //   avatar: "./assets/images/avatar-4.png",
    //   content:
    //     "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of the client. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    // },
  ];

  const [selectedTestimonial, setSelectedTestimonial] = useState(null);
  const [activePage, setActivePage] = useState("");
  const handleTestimonialClick = (testimonial) => {
    setSelectedTestimonial(testimonial);
    setActivePage("open");
  };

  const closeModal = () => {
    setSelectedTestimonial(null);
    setActivePage("");
  };

  return (
    <section className="testimonials">
      <h3 className="h3 testimonials-title">Testimonials</h3>
      <ul className="testimonials-list has-scrollbar">
        {testimonials.map((testimonial) => (
          <li
            className="testimonials-item"
            key={testimonial.id}
            onClick={() => handleTestimonialClick(testimonial)}
          >
            <div className="content-card" data-testimonials-item>
              <figure className="testimonials-avatar-box">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width="60"
                  data-testimonials-avatar
                />
              </figure>
              <h4
                className="h4 testimonials-item-title"
                data-testimonials-title
              >
                {testimonial.name}
              </h4>
              <div className="testimonials-text" data-testimonials-text>
                <p>{testimonial.content}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
      {selectedTestimonial && (
        <div
          className={`modal-container ${activePage === "open" ? "active" : ""}`}
          data-modal-container
        >
          <div className="overlay" data-overlay onClick={closeModal}></div>
          <section className="testimonials-modal">
            <button
              className="modal-close-btn"
              data-modal-close-btn
              onClick={closeModal}
            >
              <IoMdClose />
            </button>
            <div className="modal-img-wrapper">
              <figure className="modal-avatar-box">
                <img
                  src={selectedTestimonial.avatar}
                  alt={selectedTestimonial.name}
                  width="80"
                  data-modal-img
                />
              </figure>
              <img src={quoteicon} alt="quote icon" />
            </div>
            <div className="modal-content">
              <h4 className="h3 modal-title" data-modal-title>
                {selectedTestimonial.name}
              </h4>
              <time dateTime="2023-07-10">10 July, 2023</time>
              <div data-modal-text>
                <p>{selectedTestimonial.content}</p>
              </div>
            </div>
          </section>
        </div>
      )}
    </section>
  );
};

export default Testimonials;
