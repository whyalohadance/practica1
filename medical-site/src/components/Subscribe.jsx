import React from 'react';

const Subscribe = () => {
  return (
    <section id="subscribe">
      <h3>Follow pentru informatie de la AvemGrija</h3>
      <form className="subscribe-box">
        <input type="email" placeholder="avemgrija@gmail.com" />
        <button type="submit">Follow</button>
      </form>
    </section>
  );
};

export default Subscribe;