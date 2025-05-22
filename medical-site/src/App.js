import './App.css';
import { useEffect } from 'react';
import '@fontsource/poppins';
import mainBg from './assets/imagini/main-bg.png';
import storyImg from './assets/imagini/pexels-photo-3845983.png';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
function App() {
  useEffect(() => {
    // Font Awesome инициализация — просто подключен в index.html
  }, []);
  return (
    <div>
      {/* HERO SECTION */}
      <section id="hero">
        <nav className="navigation">
          <a href="#" className="logo"><span>Avem</span>Grija</a>
          <ul className="menu">
            <li><a href="#">Gaseste un Doctor</a></li>
            <li><a href="#">Serviciile noastre</a></li>
            <li><a href="#">Recenzii</a></li>
          </ul>
          <a href="#" className="nav-appointment-btn">Inscriere</a>
        </nav>
        <div className="hero-content">
          <div className="hero-text">
            <h1>Un pas inainte pentru sanatatea ta</h1>
            <p>Centrul de Diagnostic Italian din Moldova oferă servicii medicale moderne...</p>
            <div className="hero-text-btns">
              <a href="#"><i className="fa-solid fa-magnifying-glass"></i> Doctor</a>
              <a href="#"><i className="fa-solid fa-check"></i> Cartea de vizita</a>
            </div>
          </div>
          <div className="hero-img">
            <img src={mainBg} alt="Main" />
          </div>
        </div>
      </section>
      {/* SEARCH SECTION */}
      <div className="appointment-search-cantainer">
        <h3>Gaseste cea mai buna ingrejire</h3>
        <div className="appointment-search">
          <div className="appo-search-box">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Cautati Doctorul aici" />
          </div>
          <div className="appo-search-box">
            <i className="fa-solid fa-location-dot"></i>
            <input type="text" placeholder="Locatia dumneavoastra" />
          </div>
          <button><i className="fa-solid fa-magnifying-glass"></i></button>
        </div>
      </div>
      {/* WHAT WE PROVIDE */}
      <section className="what-we-provide">
        <div className="w-info-box w-info-box1">
          <div className="w-info-icon"><i className="fa-solid fa-capsules"></i></div>
          <div className="w-info-text">
            <strong>Serviciu Specializat</strong>
            <p>Consultații la medici specialiști...</p>
          </div>
        </div>
        <div className="w-info-box w-info-box2">
          <div className="w-info-icon"><i className="fa-brands fa-rocketchat"></i></div>
          <div className="w-info-text">
            <strong>24/7 Asigurare</strong>
            <p>Suntem alături de tine non-stop...</p>
          </div>
        </div>
        <div className="w-info-box w-info-box3">
          <div className="w-info-icon"><i className="fa-solid fa-square-poll-horizontal"></i></div>
          <div className="w-info-text">
            <strong>Rezultate Online</strong>
            <p>Accesezi rapid și ușor rezultatele analizelor...</p>
          </div>
        </div>
      </section>
      {/* OUR STORY */}
      <section id="our-story">
        <div className="our-story-img">
          <img src={storyImg} alt="story" />
          <a href="#" className="story-play-btn">
            <i className="fa-solid fa-play"></i> Play video
          </a>
        </div>
        <div className="our-story-text">
          <h2>Scurta istorie despre noi.</h2>
          <p>Centrul de Diagnostic Italian a fost fondat...</p>
          <p>Ne dezvoltăm constant...</p>
          <div className="story-number-container">
            <div className="story-number-box s-n-box1"><strong>1000+</strong><span>Clienti Multumiti</span></div>
            <div className="story-number-box s-n-box2"><strong>215+</strong><span>Doctori Experti</span></div>
            <div className="story-number-box s-n-box3"><strong>310+</strong><span>Locuri pentru clienti</span></div>
            <div className="story-number-box s-n-box4"><strong>106+</strong><span>Premii Primite</span></div>
          </div>
        </div>
      </section>
      {/* OUR SERVICES */}
      <section id="our-services">
        <div className="services-heading">
          <div className="services-heading-text">
            <strong>Serviciile Noastre</strong>
            <h2>Servicii de calitate inalta</h2>
          </div>
          <div className="services-slide-btns">
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>
        </div>
        <div className="services-box-container">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={10}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              768: { slidesPerView: 4, spaceBetween: 40 },
              1024: { slidesPerView: 3, spaceBetween: 20 },
            }}
          >
            <SwiperSlide>
              <div className="service-box s-box1">
                <i className="fa-solid fa-heart-pulse"></i>
                <strong>Siguranta de sanatate</strong>
                <p>Servicii sigure...</p>
                <a href="#">Mai mult</a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="service-box s-box2">
                <i className="fa-solid fa-tooth"></i>
                <strong>Siguranta dentala</strong>
                <p>Terapie moderna...</p>
                <a href="#">Mai mult</a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="service-box s-box3">
                <i className="fa-solid fa-eye"></i>
                <strong>Siguranta ochilor</strong>
                <p>Protejam vederea...</p>
                <a href="#">Mai mult</a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="service-box s-box4">
                <i className="fa-solid fa-face-smile"></i>
                <strong>Siguranta pielii</strong>
                <p>Dermatologie si ingrijire precisa</p>
                <a href="#">Mai mult</a>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <span className="service-help-btn">Contacteazane <a href="#">Sa incepem!</a></span>
      </section>
      {/* WHY CHOOSE US */}
      <section id="why-choose-us">
        <div className="why-choose-us-left">
          <h3>De ce să ne alegeți?</h3>
          <div className="why-choose-box-container">
            {['îngrijire avansată', 'Profesionalism', 'Tehnologie modernă', 'Acces rapid'].map((text, i) => (
              <div className="why-choose-box" key={i}>
                <i className="fa-solid fa-check"></i>
                <div className="why-choose-box-text">
                  <strong>{text}</strong>
                  <p>Text informativ pentru {text.toLowerCase()}.</p>
                </div>
              </div>
            ))}
          </div>
          <a href="#" className="why-choose-us-btn">Faceți o programare</a>
        </div>
        <div className="why-choose-us-right">
          <h3>Urgență?<br />Contactați-ne</h3>
          <p>Dacă este o urgență, ne puteți contacta imediat...</p>
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
    </div>
  );
}
export default App;