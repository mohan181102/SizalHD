import React from "react";
import styled from "styled-components";
import img1 from "../../public/freeefrom.jpg";
import Features from "../Component/Features/Features";
import img2 from "../../public/colin-lloyd-wjq8Zbh53Nw-unsplash.jpg";
import img3 from "../../src/assets/photo-1608539733377-5557e02926b5.avif";

const FreeFormProgressive = () => {
  const textItems = [
    " Freeform lenses are tailored to the individual's exact prescription, offering a high degree of precision in vision correction.",
    " These lenses provide sharper and clearer vision across the entire lens surface.",
    " Freeform technology ensures that peripheral vision is optimized, offering a wider field of view.",
    " Freeform lenses can be customized to the wearer’s specific frame choice and facial features.",
    " This includes parameters such as pupillary distance, pantoscopic tilt, and vertex distance.",
  ];

  return (
    <Container>
      <div
        className={`back-photochromic`}
        style={{
          backgroundImage: `url("src/assets/Amazinglens.jpg")`,
          backgroundPosition: "cover",
          objectFit: "cover",
        }}
      >
        <div className={`div-black`}></div>
      </div>
      <h2 className={`photo-chromic-h2`}>FreeForm Progressive Lenses</h2>
      <div className={`w-auto h-auto bg-white`}>
        <div className={` w-full h-auto p-4 `}>
          <h2 className={`h2-for-freefrom bg-white`}>
            FreeForm Progressive Lenses
          </h2>
          <p className={`text-[15px] w-[100%]  bg-white font-["Poppins"]`}>
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
          <div
            className={`w-[25%] bg-white mt-3 h-auto hover:scale-110 transition-all delay-150 m-auto sm:w-[100%] sm:shadow-md`}
          >
            <img src={img1} alt="" className={`w-full`} />
          </div>
        </div>

        <div
          className={` flex bg-white items-center justify-center flex-col pt-4`}
        >
          <Features
            src={img2}
            para={[textItems[0], textItems[1], textItems[2]]}
            animation={true}
            indexvalue={0}
            color={"bg-green-400"}
          />
          <Features
            src={img2}
            color={"bg-green-400"}
            animation={true}
            indexvalue={3}
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

  .h2-for-freefrom {
    width: 100%;
    font-weight: 300;
    margin-bottom: 2rem;
    font-size: 2.7rem;
    color: brown;
  }

  @media (max-width: 650px) {
    .h2-for-freefrom {
      width: 100%;
      font-weight: 300;
      margin-bottom: 1rem;
      font-size: 2rem;
      color: brown;
    }

    p {
      font-family: "Poppins";
    }
  }
`;

export default FreeFormProgressive;
