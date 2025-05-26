import React from 'react';

const ServicesPreview = () => {
  return (
    <section className="what-we-provide">
      {/* Box 1 */}
      <div className="w-info-box w-info-box1">
        <div className="w-info-icon">
          <i className="fa-solid fa-capsules"></i>
        </div>
        <div className="w-info-text">
          <strong>Serviciu Specializat</strong>
          <p>
            Consultații la medici specialiști pentru un diagnostic corect și tratament eficient.
          </p>
        </div>
      </div>

      {/* Box 2 */}
      <div className="w-info-box w-info-box2">
        <div className="w-info-icon">
          <i className="fa-brands fa-rocketchat"></i>
        </div>
        <div className="w-info-text">
          <strong>24/7 Asigurare</strong>
          <p>
            Suntem alături de tine non-stop, pentru siguranță și suport medical oricând.
          </p>
        </div>
      </div>

      {/* Box 3 */}
      <div className="w-info-box w-info-box3">
        <div className="w-info-icon">
          <i className="fa-solid fa-square-poll-horizontal"></i>
        </div>
        <div className="w-info-text">
          <strong>Primirea Rezultatelor Online</strong>
          <p>
            Accesezi rapid și ușor rezultatele analizelor direct din contul tău online.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;