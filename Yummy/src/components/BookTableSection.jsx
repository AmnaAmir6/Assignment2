import React from 'react';
import ReservationForm from './ReservationForm';

function BookTable() {
  return (
    <section id="book-a-table" className="book-a-table section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Book A Table</h2>
        <p>
          <span>Book Your</span> <span className="description-title">Stay With Us<br /></span>
        </p>
      </div>

      <div className="container">
        <div className="row g-0" data-aos="fade-up" data-aos-delay="100">
          <div
            className="col-lg-4 reservation-img"
            style={{ backgroundImage: `url(assets/img/reservation.jpg)` }}
          ></div>
          <ReservationForm />
        </div>
      </div>
    </section>
  );
}

export default BookTable;
