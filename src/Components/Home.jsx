import React from "react";
import ImgBar from "./ImgBar";
import AboutUs from "./AboutUs";
import PlatinumUV from "./PlatinumUV";

import CardBox from "./CardBox";
import WidestRange from "./WidestRange";
import PersonalizedRange from "./PersonalizedRange";
import Protect from "./Protect";
import ImgSection1 from "./ImgSection1";
import OurProduct from "./OurProduct";
import ImgSection2 from "./ImgSection2";
import Scrollprogress from "./Scrollprogress";
import Framermotion from "../FramerMotion/Framermotion";

const Home = () => {
  return (
    <>
      <ImgBar />

      <Framermotion>
        <PlatinumUV />
      </Framermotion>

      <Framermotion>
        <ImgSection2 />
      </Framermotion>
      {/* <CardBox /> */}

      <Framermotion>
        <WidestRange />
      </Framermotion>

      <Framermotion>
        <PersonalizedRange />
      </Framermotion>
      <Framermotion>
        <Protect />
      </Framermotion>
      <Framermotion>
        <ImgSection1 />
      </Framermotion>
      <Framermotion>
        <OurProduct />
      </Framermotion>
    </>
  );
};

export default Home;
