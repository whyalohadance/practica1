import React from 'react';

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us">
      {/* Left Side */}
      <div className="why-choose-us-left">
        <h3>De ce să ne alegeți?</h3>
        <div className="why-choose-box-container">
          <div className="why-choose-box">
            <i className="fa-solid fa-check"></i>
            <div className="why-choose-box-text">
              <strong>îngrijire avansată</strong>
              <p>Folosim tehnologii moderne și expertiză pentru tratamente eficiente.</p>
            </div>
          </div>

          <div className="why-choose-box">
            <i className="fa-solid fa-check"></i>
            <div className="why-choose-box-text">
              <strong>Profesionalism</strong>
              <p>Medici cu experiență și calificări internaționale.</p>
            </div>
          </div>

          <div className="why-choose-box">
            <i className="fa-solid fa-check"></i>
            <div className="why-choose-box-text">
              <strong>Tehnologie modernă</strong>
              <p>Echipamente performante pentru diagnostic precis.</p>
            </div>
          </div>

          <div className="why-choose-box">
            <i className="fa-solid fa-check"></i>
            <div className="why-choose-box-text">
              <strong>Acces rapid</strong>
              <p>Programări flexibile și rezultate online.</p>
            </div>
          </div>
        </div>

        <a href="#" className="why-choose-us-btn">Faceți o programare</a>
      </div>

      {/* Right Side */}
      <div className="why-choose-us-right">
        <h3>Urgență?<br />Contactați-ne</h3>
        <p>
          Dacă este o urgență, ne puteți contacta imediat. Echipa noastră este disponibilă și pregătită să vă ofere ajutorul necesar, rapid și eficient.
        </p>
        <div className="w-right-contact-container">
          <div className="w-right-contact-box">
            <i className="fa-solid fa-phone"></i>
            <div className="w-right-contact-box-text">
              <span>Sunați-ne acum</span>
              <strong>+373 69 68 2599</strong>
            </div>
          </div>

          <div className="w-right-contact-box">
            <i className="fa-solid fa-envelope"></i>
            <div className="w-right-contact-box-text">
              <span>Trimiteți-ne un e-mail</span>
              <strong>centruitaliamd@gmail.com</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;