"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};
const Carousel = () => {
  return (
    <>
      <Slider {...settings}>
        <div>
          <div className=" relative w-full h-full">
            <Image
              fill
              src="/images/billboard.jpeg"
              alt=""
              className=" object-cover object-center"
            />
          </div>
        </div>

        <div>
          <div className=" relative w-full h-full">
            <Image
              fill
              src="/images/show.jpg"
              alt=""
              className=" object-cover object-center"
            />
          </div>
        </div>
        {/* Add more slides as needed */}
      </Slider>
    </>
  );
};

export default Carousel;
