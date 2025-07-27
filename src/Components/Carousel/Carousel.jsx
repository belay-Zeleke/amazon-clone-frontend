import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { img } from "./img/data";
import classes from "./Carousel.module.css";

function CarouselEffect() {
  return (
    <div className={classes.carousel__wrapper}>
      <Carousel
        className={classes.amazon__Carousel}
        autoPlay
        infiniteLoop
        showIndicators={false}
        showThumbs={false}
        showStatus={false}
        interval={3000}
        stopOnHover={false}
        swipeable
        emulateTouch
      >
        {img.map((imageItemLink, index) => (
          <img
            src={imageItemLink}
            alt={`carousel-img-${index}`}
            key={index}
            className={classes.carousel__image}
          />
        ))}
      </Carousel>

      <div className={classes.hero__img}>
        {/* Optional promotional banner can go here */}
      </div>
    </div>
  );
}

export default CarouselEffect;
