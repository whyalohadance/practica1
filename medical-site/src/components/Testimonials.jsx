import React from 'react';

const Testimonials = () => {
  return (
    <section id="testimonials">
      <div className="testimonials-heading">
        <h3>FeedBack</h3>
        <p>
          Apreciem feedbackul pacienților noștri, pentru că ne ajută să îmbunătățim constant serviciile și experiența oferită.
        </p>
      </div>

      <div className="testimonials-content">
        {/* Image side */}
        <div className="testimonials-img">
          <img src="/imagini/testimonials-img.png" alt="Testimonials" />
        </div>

        {/* Single Feedback */}
        <div className="testimonials-box">
          <div className="t-profile">
            <div className="t-profile-img">
              <img src="/imagini/t1.jpg" alt="Client" />
            </div>
            <div className="t-profile-text">
              <strong>Clientul</strong>
              <span>Din Moldova</span>
              <div className="t-rating">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
            </div>
          </div>
          <p>
            Servicii excelente, personal amabil și profesionist. Am fost impresionat de curățenie, promptitudine și grijă reală față de pacient. Recomand cu încredere acest centru tuturor celor care caută calitate și siguranță în domeniul medical.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;