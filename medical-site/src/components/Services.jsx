import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Services = () => {
  return (
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
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }}
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 3 }
          }}
        >
          <SwiperSlide>
            <div className="service-box s-box1">
              <i className="fa-solid fa-heart-pulse"></i>
              <strong>Siguranta de sanatate</strong>
              <p>Prioritizăm grija pentru sănătatea ta prin servicii sigure.</p>
              <a href="#">Mai mult</a>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="service-box s-box2">
              <i className="fa-solid fa-tooth"></i>
              <strong>Siguranta dentala</strong>
              <p>Asigurăm tratamente stomatologice sigure, moderne și fără durere.</p>
              <a href="#">Mai mult</a>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="service-box s-box3">
              <i className="fa-solid fa-eye"></i>
              <strong>Siguranta ochilor</strong>
              <p>Protejăm sănătatea vederii prin controale și tehnologii precise.</p>
              <a href="#">Mai mult</a>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="service-box s-box4">
              <i className="fa-solid fa-face-smile"></i>
              <strong>Siguranta de piele</strong>
              <p>Oferim diagnostic și îngrijire dermatologică pentru o piele sănătoasă.</p>
              <a href="#">Mai mult</a>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <span className="service-help-btn">
        Contacteazane <a href="#">Sa incepem!</a>
      </span>
    </section>
  );
};

export default Services;