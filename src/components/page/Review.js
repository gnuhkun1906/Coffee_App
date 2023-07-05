import React from 'react'

export default function Review() {
  return (
    <div>
          <section className="review" id="review">
    <h1 className="heading">
      reviews <span>what people says</span>
    </h1>
    <div className="swiper review-slider">
      <div className="swiper-wrapper">
        <div className="swiper-slide box">
          <i className="fas fa-quote-left" />
          <i className="fas fa-quote-right" />
          <img src="image/pic-1.png" alt="" />
          <div className="stars">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, earum
            quis dolorem quaerat tenetur illum.
          </p>
          <h3>john deo</h3>
          <span>satisfied client</span>
        </div>
        <div className="swiper-slide box">
          <i className="fas fa-quote-left" />
          <i className="fas fa-quote-right" />
          <img src="image/pic-2.png" alt="" />
          <div className="stars">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum optio
            quasi ut, illo ipsam assumenda.
          </p>
          <h3>john deo</h3>
          <span>satisfied client</span>
        </div>
        <div className="swiper-slide box">
          <i className="fas fa-quote-left" />
          <i className="fas fa-quote-right" />
          <img src="image/pic-3.png" alt="" />
          <div className="stars">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            asperiores aliquam hic quis! Eligendi, aliquam.
          </p>
          <h3>john deo</h3>
          <span>satisfied client</span>
        </div>
        <div className="swiper-slide box">
          <i className="fas fa-quote-left" />
          <i className="fas fa-quote-right" />
          <img src="image/pic-4.png" alt="" />
          <div className="stars">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi
            modi perspiciatis distinctio velit aliquid a.
          </p>
          <h3>john deo</h3>
          <span>satisfied client</span>
        </div>
      </div>
      <div className="swiper-pagination" />
    </div>
  </section>
    </div>
  )
}
