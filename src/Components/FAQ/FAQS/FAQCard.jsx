import React from 'react';
import Slider from "react-slick";
import style from './FAQCard.module.css';
import { IoStar } from "react-icons/io5";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FcRating } from "react-icons/fc";

function FAQCard() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className={style.FAQCardContainer}>
      <div className={style.heading}>
        <IoStar className={style.star} />
        <h5>Trustpilot</h5>
      </div>
      <Slider {...settings}>
        <div className={style.card}>
          <h2>Trevor Coleman</h2>
          <h6>Rated us 5/5 on TrustPilot</h6>
          <div className={style.rating}>
            <FcRating />
            <FcRating />
            <FcRating />
            <FcRating />
            <FcRating />
          </div>
          <p>Excellent fast and safe service would recommend 10/10!</p>
        </div>
        <div className={style.card}>
          <h2>Findeo</h2>
          <h6>Rated us 5/5 on TrustPilot</h6>
          <div className={style.rating}>
            <FcRating />
            <FcRating />
            <FcRating />
            <FcRating />
            <FcRating />
          </div>
          <p>Excellent, Fast and the exactly what i wanted. 5 STARS ALL THE WAY</p>
        </div>
        <div className={style.card}>
          <h2>darski</h2>
          <h6>Rated us 5/5 on TrustPilot</h6>
          <div className={style.rating}>
            <FcRating />
            <FcRating />
            <FcRating />
            <FcRating />
            <FcRating />
          </div>
          <p>Amazing service! Bought 50m delivered instantly, will 100% buy again thanks!</p>
        </div>
        <div className={style.card}>
          <h2>Tamin</h2>
          <h6>Rated us 5/5 on TrustPilot</h6>
          <div className={style.rating}>
            <FcRating />
            <FcRating />
            <FcRating />
            <FcRating />
            <FcRating />
          </div>
          <p>Bought gold here plenty of times always fast and good people.</p>
        </div>
        <div className={style.card}>
          <h2>Jake</h2>
          <h6>Rated us 5/5 on TrustPilot</h6>
          <div className={style.rating}>
            <FcRating />
            <FcRating />
            <FcRating />
            <FcRating />
            <FcRating />
          </div>
          <p>Bought gold for the 1st time super fast and super easy!</p>
        </div>
        <div className={style.card}>
          <h2>Kevin</h2>
          <h6>Rated us 5/5 on TrustPilot</h6>
          <div className={style.rating}>
            <FcRating />
            <FcRating />
            <FcRating />
            <FcRating />
            <FcRating />
          </div>
          <p>Best site i've used for buying osrs goldpieces.
          Till next time RunescapeGP!</p>
        </div>
      </Slider>

      <div className={style.footerrating}>
            <p>4.7 out of 5 based on 806 user rating</p>
            
          <div className={style.rating}>
            <FcRating />
            <FcRating />
            <FcRating />
            <FcRating />
            <FcRating />
          </div>
      </div>
    </div>
  );
}

export default FAQCard;
