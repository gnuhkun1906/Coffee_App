import React from 'react'
import Header from './Header'

export default function HomeContent() {
  return (
    <div>
         <Header/>
        <section className="home" id="home">
    <div className="row">
      <div className="content">
        <h3>fresh coffee in the morning</h3>
        <a href="#" className="btn">
          buy one now
        </a>
      </div>
      <div className="image">
        <img src="image/home-img-1.png" className="main-home-image" alt="" />
      </div>
    </div>
    <div className="image-slider">
      <img src="image/home-img-1.png" alt="" />
      <img src="image/home-img-2.png" alt="" />
      <img src="image/home-img-3.png" alt="" />
    </div>
  </section>
  
    </div>
  )
}
