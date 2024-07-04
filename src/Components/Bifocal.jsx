import React, { useState } from "react";
import styled from "styled-components";
import "./Bifocal.css";
import img from "../../public/types-of-bifocal-lenses.webp";
import img2 from "../../public/tk-zeal-pHsxlGL1CAU-unsplash.jpg";
import img3 from "../../public/redowan-dhrubo-dJz6m1_CCoQ-unsplash.jpg";
import img4 from "../../public/na-sen-lXnbzaKl0v0-unsplash.jpg";
import img5 from "../../public/amirhossein-khedri-kSzcACaf4us-unsplash.jpg";
import Features from "../Component/Features/Features";
import { useEffect } from "react";

const Bifocal = () => {
  const [position, setScrollPosition] = useState(0);
  const [animation, setanimation] = useState([]);

  const textItems = [
    "New generation bifocals for near & far vision",
    "Personalised lens that considers the real position of wear",
    "No image jump & smooth vision shift",
    "Increased visual acuity",
    "No visible line or blend of vision zones",
    "Great blend of aesthetics & vision quality",
  ];

  // const handleScroll = () => {
  //   const position = window.pageYOffset;
  //   setScrollPosition(position);
  // };

  // useEffect((e) => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  console.log(animation);
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
      <h2 className={`photo-chromic-h2`}>BiFocal Lense</h2>
      <div className={`div-main-bifocal`}>
        <div className={`px-[2rem] py-[2rem]`}>
          <h2 className={`h2-bifocal`}>Bifocal Lenses</h2>
          <p className={`p-bifocal font-["Poppins"]`}>
            Bifocal lenses are a type of eyeglass lens designed to provide clear
            vision at two different distances, typically for people with
            presbyopia, a condition that affects near vision as they age. These
            lenses have two distinct optical powers: the upper part is usually
            for distance vision, while the lower part is for close-up tasks such
            as reading. The separation between the two sections can be visible
            as a line, known as a "flat-top" or "D-segment," or it can be more
            blended in modern designs like progressive lenses, which offer a
            gradual transition between different focal lengths. Bifocals allow
            users to see clearly both up close and far away without needing to
            switch between different pairs of glasses.
          </p>
          <br />
          <p className={`p-bifocal font-["Poppins"]`}>
            Bifocal lenses are designed to correct vision for two different
            distances, typically near and far. There are several types of
            bifocal lenses, each with unique characteristics to suit different
            visual needs and preferences. Here are the main types of bifocal
            lenses:
          </p>

          <p
            className={`w-auto flex items-center justify-start pl-14 pt-4 font-serif`}
          >
            <ul>
              <li className={`li list-disc font-["Poppins"]`}>
                Flat-Top Bifocals
              </li>
              <li className={`li list-disc font-["Poppins"]`}>
                Round-Segment Bifocals
              </li>
              <li className={`li list-disc font-["Poppins"]`}>
                Executive (Franklin or E-Line) Bifocals
              </li>
              <li className={`li list-disc font-["Poppins"]`}>
                Blended (Invisible or Seamless) Bifocals
              </li>
              <li className={`li list-disc font-["Poppins"]`}>
                Ribbon Segment Bifocals
              </li>
            </ul>
          </p>

          {/*  ADD IMAGE FOR FEATURES */}
        </div>
        <Features
          src={img2}
          para={[
            "New generation bifocals for near & far vision",
            textItems[1],
            textItems[2],
          ]}
          indexvalue={0}
          animation={true}
        />
        <Features
          src={img3}
          indexvalue={3}
          animation={true}
          direction={"reverse"}
          para={[textItems[3], textItems[4], textItems[5]]}
        />
      </div>
    </Container>
  );
};

const Container = styled.section`
  min-height: 300px;

  .slick-dots {
    margin: auto;
    width: fit-content;
  }

  @media (max-width: 650px) {
    .p-bifocal {
      font-size: 15px;
      font-family: "Poppins";
    }

    .li {
      font-size: 15px;
      font-family: "Poppins";
    }
  }

  @media (max-width: 1024px) {
    .p-bifocal {
      font-size: 15px;
      font-family: "Poppins";
    }

    .li {
      font-size: 15px;
      font-family: "Poppins";
    }
  }
`;

export default Bifocal;
