import React from "react";
import styled from "styled-components";
import img1 from "../../public/Child-blue-light-glasses-2-768x504.jpeg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Features from "../Component/Features/Features";

const DigitalProgressive = () => {
  const textItems = [
    " Progressive lens made with freeform technology",
    " Ideal for first time progressive lens users",
    " Smooth progressive view of near, intermediate and far",
    " Easy change of focus from far to near",
    " Vision clarity & comfort",
  ];

  return (
    <Container>
      <div
        className={`back-photochromic`}
        style={{
          backgroundImage: `url("/azamat-zhanisov-fy1njZn94BU-unsplash (1).jpg")`,
          backgroundPosition: "cover",
          objectFit: "cover",
        }}
      >
        <div className={`div-black`}></div>
      </div>
      <h2 className={`photo-chromic-h2`}>Digital Progressive Lenses</h2>
      <div className={`w-full h-auto bg-white`}>
        <div className={`p-5`}>
          <h2 className={`h2-for-digital text-2xl`}>
            Digital Progressive Lenses
          </h2>
          <p className={`p-for-digital font-["Poppins"]`}>
            Digital lenses, also called high-definition lenses, are a relatively
            new improvement for eyeglass wearers — but what exactly are they and
            are they right for you? Traditional eyeglasses are surfaced on one
            side using a standard “mold template.” Surfacing is the process of
            adding a prescription to a lens. For traditional lenses, the best
            field of vision is set in the center. On the other hand, digital
            lenses are surfaced on both sides and are customed to fit your
            prescription. For that reason, they eliminate more distortion and
            help you transition from near to far vision much more easily. The
            difference is a clearer image quality. It’s like comparing the
            display of an old-fashioned tube television to the modern
            high-definition picture of today. People who wear high-definition
            lenses will experience a noticeably dramatic increase in clarity
            over traditionally made lenses. For example, objects will appear
            exponentially sharper, clearer and more vivid.
          </p>
        </div>
        <div className={` flex items-center justify-center flex-col pt-4`}>
          <Features
            src={img1}
            para={[textItems[0], textItems[1], textItems[2]]}
            indexvalue={0}
            animation={true}
            color={"bg-green-400"}
          />
          <Features
            src={img1}
            color={"bg-green-400"}
            indexvalue={3}
            animation={true}
            direction={"reverse"}
            para={[textItems[3], textItems[4]]}
          />
        </div>
      </div>
    </Container>
  );
};

const Container = styled.section`
  min-height: 300px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  .h2-for-digital {
    width: 100%;
    font-weight: 300;
    margin-bottom: 2rem;
    font-size: 2.7rem;
    color: brown;
  }

  .img-for-digital {
    width: 500px;
  }

  .p-for-digital {
    color: balck;

    width: auto;
    font-size: 15px;
  }

  @media (max-width: 650px) {
    flex-direction: column;
    .h2-for-digital {
      width: 100%;
      font-weight: 300;
      margin-bottom: 2rem;
      font-size: 2rem;
      color: brown;
    }

    .p-for-digital {
      color: balck;
      font-family: "Poppins";
      width: auto;
      font-size: 15px;
    }
  }
`;

export default DigitalProgressive;
