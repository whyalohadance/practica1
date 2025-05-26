import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        {/* Company Info */}
        <div className="footer-company-box">
          <a href="#" className="logo"><span>Avem</span>Grija</a>
          <p>
            AvemGrijă oferă servicii medicale moderne, sigure, personalizate, cu grijă și profesionalism.
          </p>
          <div className="footer-social">
            <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
            <a href="#"><i className="fa-brands fa-youtube"></i></a>
            <a href="#"><i className="fa-brands fa-twitter"></i></a>
          </div>
        </div>

        {/* Links x3 */}
        {[1, 2, 3].map((i) => (
          <div className="footer-link-box" key={i}>
            <strong>Principalul</strong>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Despre</a></li>
              <li><a href="#">Contacte</a></li>
              <li><a href="#">Servicii</a></li>
              <li><a href="#">Portofoliu</a></li>
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom footer */}
      <div className="footer-bottom">
        <span>Made By whyalohadance</span>
        <span>- 2025</span>
      </div>
    </footer>
  );
};

export default Footer;