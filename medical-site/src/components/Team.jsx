import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Team = () => {
  return (
    <section id="team">
      <div className="team-heading">
        <h3>Specialiștii noștri</h3>
        <p>
          Specialiști dedicați, cu experiență internațională, oferă îngrijire sigură, empatică și tratamente personalizate pacienților.
        </p>
      </div>

      <div className="team-box-container">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            560: { slidesPerView: 2 },
            950: { slidesPerView: 3 },
            1250: { slidesPerView: 4 }
          }}
        >
          {/* Doctor 1 */}
          <SwiperSlide>
            <div className="team-box">
              <div className="team-img">
                <img src="/imagini/d1.png" alt="Doctor 1" />
              </div>
              <div className="team-text">
                <strong>Dr. Paradox Alex</strong>
                <span>Specialist pe baza pielei</span>
              </div>
            </div>
          </SwiperSlide>

          {/* Doctor 2 */}
          <SwiperSlide>
            <div className="team-box">
              <div className="team-img">
                <img src="/imagini/d2.png" alt="Doctor 2" />
              </div>
              <div className="team-text">
                <strong>Dr. Andrei Popescu</strong>
                <span>Specialist pe baza Cardiologie</span>
              </div>
            </div>
          </SwiperSlide>

          {/* Doctor 3 */}
          <SwiperSlide>
            <div className="team-box">
              <div className="team-img">
                <img src="/imagini/d3.png" alt="Doctor 3" />
              </div>
              <div className="team-text">
                <strong>Dr. Victor Marin</strong>
                <span>Specialist pe baza Ortopedie</span>
              </div>
            </div>
          </SwiperSlide>

          {/* Doctor 4 */}
          <SwiperSlide>
            <div className="team-box">
              <div className="team-img">
                <img src="/imagini/d4.png" alt="Doctor 4" />
              </div>
              <div className="team-text">
                <strong>Dr. Elena Rusu</strong>
                <span>Specialist pe baza Dermatologie</span>
              </div>
            </div>
          </SwiperSlide>

          {/* Doctor 5 */}
          <SwiperSlide>
            <div className="team-box">
              <div className="team-img">
                <img src="/imagini/d5.png" alt="Doctor 5" />
              </div>
              <div className="team-text">
                <strong>Dr. Ioana Dascălu</strong>
                <span>Specialist pe baza Ginecologie</span>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Team;