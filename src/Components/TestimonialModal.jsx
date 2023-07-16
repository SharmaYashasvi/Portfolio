import React from "react";

const TestimonialModal = ({ testimonial }) => {
  const { name, date, content } = testimonial;

  return (
    <div className="modal-container" data-modal-container>
      <div className="overlay" data-overlay></div>
      <section className="testimonials-modal">
        <button className="modal-close-btn" data-modal-close-btn>
          <ion-icon name="close-outline"></ion-icon>
        </button>
        <div className="modal-img-wrapper">
          <figure className="modal-avatar-box">
            <img
              src={testimonial.avatar}
              alt={name}
              width="80"
              data-modal-img
            />
          </figure>
          <img src="./assets/images/icon-quote.svg" alt="quote icon" />
        </div>
        <div className="modal-content">
          <h4 className="h3 modal-title" data-modal-title>
            {name}
          </h4>
          <time dateTime={date}>{date}</time>
          <div data-modal-text>
            <p>{content}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialModal;
