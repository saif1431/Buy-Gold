import React from 'react';
import Visacards from './VisaCards.module.css';
import visa from '../../../images/visa.svg';
import master from '../../../images/master.svg';
import ideal from '../../../images/ideal.svg';
import coinbase from '../../../images/coinbase.svg';
import sofort from '../../../images/sofort.svg';
import skrill from '../../../images/skrill.svg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useMediaQuery } from 'react-responsive';

const NextArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={`${className} ${Visacards.arrow}`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
};

const PrevArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={`${className} ${Visacards.arrow}`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
};

function VisaCards() {
  const isSmallScreen = useMediaQuery({ maxWidth: 768 });

  const settings = {
    dots: false, // Disable dots on small screens
    infinite: true,
    speed: 500,
    slidesToShow: isSmallScreen ? 3 : 6, // Adjust the number of slides shown
    slidesToScroll: 1,
    arrows: isSmallScreen, // Enable arrows on small screens
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const images = [
    { src: visa, alt: "Visa" },
    { src: master, alt: "MasterCard" },
    { src: coinbase, alt: "Coinbase" },
    { src: ideal, alt: "iDEAL" },
    { src: sofort, alt: "Sofort" },
    { src: skrill, alt: "Skrill" },
  ];

  return (
    <Slider {...settings} className={Visacards.slider}>
      {images.map((image, index) => (
        <div key={index} className={Visacards.sliderItem}>
          <img src={image.src} alt={image.alt} className={Visacards.sliderImage} />
        </div>
      ))}
    </Slider>
  );
}

export default VisaCards;
