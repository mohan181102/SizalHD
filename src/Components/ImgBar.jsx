import React, { useState } from "react";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./ImgBar.css";

const ImgBar = () => {
  const [imageloading, setimageloading] = useState(false);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const Image_array = [
    {
      name: "Anti-Reflection treatement from Solar Impacts",
      url: "/felipepelaquim-Ns0iGdiSx00-unsplash.jpg",
    },
    {
      name: "Platinum series",
      url: "/evgeniia-mylovestory-photo-fke7Y4YyOQA-unsplash.jpg",
    },
    {
      name: "image3",
      url: "/redowan-dhrubo-dJz6m1_CCoQ-unsplash.jpg",
    },
  ];

  // FUNCTION FOR SHOWING LOADING IN IMAGE BEFORE DOWNLOAD
  function imgload() {}
  return (
    <Container>
      <Slider {...settings}>
        {Image_array.map((item, index) => {
          const imgfile = new Image();
          imgfile.src = item.url;
          imgfile.onload = () => {
            setimageloading(true);
          };
          return (
            <>
              <div key={index} className={`div-img`}>
                {imageloading ? (
                  <img
                    ref={imgfile}
                    className={`imf-carousal`}
                    id="show_image"
                    src={imgfile.src}
                    alt="Loading..."
                  />
                ) : (
                  <div
                    className={`w-full h-full bg-[#1a6b68] text-white`}
                  ></div>
                )}

                <div className={"overlay"}></div>
              </div>
            </>
          );
        })}
      </Slider>
      <div className={`div-sizal`}>
        <h1 className={`sizal`}>SizalHD</h1>
        <p className={`div-len`}>Lenses</p>
      </div>
    </Container>
  );
};

const Container = styled.section`
  width: 100vw;
  height: 700px;
  overflow:hidden;
  .div-img {
    height: 700px;
    width: 100%;
    object-fit:cover;
    object-position:center;
  }

  .imf-carousal {
  
    width: 100%;
    height: 100%;
  }

  .text-section {
    top: 370px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    aling-items: center;
    height: auto;
    color: black;
    position: absolute;
    z-index: 30;
     background:transparent;
  }

  .text-section-h2{
    // width:100%;
    text-align:center;
    background:transparen;
  }

  @media screen (max-width:650px){
    .div-img{
      width:100%;
      overflow:hidden;
    }
  }
  .
`;

export default ImgBar;
