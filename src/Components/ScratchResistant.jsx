import React, { useState } from "react";
import styled from "styled-components";
import "./ScratchResistant.css";
import img from "../../public/12.png";
import img2 from "../../public/PLATINUM BLUE/1.png";
import Framermotion from "../FramerMotion/Framermotion";

const ScratchResistant = () => {
  // function for trim string

  function trimpara(para = "", words = 100) {
    const [fullpara, setfullpara] = useState(false);
    if (para.length > words && fullpara == false) {
      const trim = para.slice(0, words);
      return (
        <button
          className={`text-left flex items-center justify-start flex-wrap`}
          onClick={() => setfullpara(!fullpara)}
        >
          {`${trim}`}
          <p className={`text-[black] font-[Poppins] text-[15px]`}>...more</p>
        </button>
      );
    } else {
      return (
        <button
          className={`text-left`}
          onClick={() => setfullpara(!fullpara)}
        >{`${para}`}</button>
      );
    }
  }

  return (
    <Container>
      <div
        className={`back-photochromic`}
        style={{
          backgroundImage: `url(${img})`,
          backgroundPosition: "cover",
          objectFit: "cover",
        }}
      >
        <div className={`div-black`}></div>
      </div>
      <h2 className={`photo-chromic-h2 `}>Platinum Blue Lense</h2>
      <div
        className={`w-auto h-auto bg-white flex items-center justify-center flex-col`}
      >
        <div className={`scratch-main-div sm:p-[1rem]`}>
          <h2
            className={`h2-scratch font-[Poppins] sm:text-[25px] font-[900] text-[2rem]`}
          >
            Platinum Blue Lens
          </h2>
          <div className={`div-for-scratch sm:flex-col`}>
            <img
              src={img2}
              className={`img-scratch w-[300px] sm:my-2 sm:mb-2 sm:shadow-md`}
              alt=""
            />
            <p
              className={`p-for-scratch sm:mt-3 sm:leading-6 sm:w-full font-[Poppins] text-[15px]`}
            >
              Platinum blue lenses are a type of eyewear lenses that are
              specifically designed to filter out blue light, particularly the
              high-energy visible (HEV) blue light emitted by digital screens
              such as smartphones, tablets, computers, and televisions. This
              type of blue light is known to cause eye strain, fatigue, and
              potentially disrupt sleep patterns if exposed to in the evening.
              Platinum blue lenses use advanced coating technology to
              selectively block a significant portion of harmful blue light
              while allowing beneficial blue light to pass through. This helps
              in reducing eye strain and discomfort during prolonged exposure to
              digital screens, making them popular among individuals who spend a
              lot of time in front of electronic devices for work or leisure.
            </p>
          </div>
        </div>

        <h2
          className={`w-[100%] pl-[150px] sm:w-full sm:flex sm:items-center sm:justify-center sm:h-auto sm:text-center sm:pl-0  items-center justify-start text-[2rem] font-[Poppins] bg-white`}
        >
          Platinum Blue lense Features
        </h2>
        <div
          className={`w-full h-[400px] flex items-center sm:h-auto bg-white justify-center gap-2 p-4 flex-wrap`}
        >
          <div
            className={`w-[20%] h-[50%] sm:overflow-scroll sm:w-[45%] sm:h-[200px] sm:p-3 bg-[#1a6b68] flex items-center justify-center font-[Poppins] p-2 text-white `}
          >
            {trimpara(
              " These lenses are specifically designed to block a significant portion of harmful blue light emitted by digital screens. By reducing exposure to high-energy visible (HEV) light, they help prevent eye strain, fatigue, and potential long-term damage caused by prolonged screen time",
              70
            )}
          </div>
          <div
            className={`w-[20%] sm:overflow-scroll sm:w-[45%] sm:h-[200px] sm:p-3 h-[50%] bg-[#1a6b68] flex items-center justify-center p-2 font-[Poppins] text-white `}
          >
            {trimpara(
              " Platinum blue lenses provide a more comfortable viewing experience by minimizing glare and improving contrast. This feature is particularly beneficial for tasks that involve extended periods of digital device use, such as reading, working on computers, or watching videos.",
              70
            )}
          </div>
          <div
            className={`w-[20%] sm:overflow-scroll sm:w-[45%] sm:h-[200px] sm:p-3 h-[50%] bg-[#1a6b68] flex items-center justify-center p-2 font-[Poppins] text-white`}
          >
            {trimpara(
              " Many platinum blue lenses also incorporate UV protection, shielding the eyes from both UVA and UVB rays.",
              70
            )}
          </div>
          <div
            className={`w-[20%] sm:overflow-scroll sm:w-[45%] sm:h-[200px] sm:p-3 h-[50%] bg-[#1a6b68] flex items-center justify-center p-2 font-[Poppins] text-white `}
          >
            {trimpara(
              "These lenses often come with an anti-reflective coating that reduces reflections and glare from both the front and back surfaces of the lenses.",
              70
            )}
          </div>
          <div
            className={`w-[20%] sm:overflow-scroll sm:w-[45%] sm:h-[200px] sm:p-3 h-[50%]  bg-[#1a6b68] flex items-center justify-center p-2 font-[Poppins] text-white`}
          >
            {trimpara(
              " Platinum blue lenses are typically made from durable materials and often include scratch-resistant coatings. This ensures that the lenses maintain their clarity and performance over time, even with regular use and cleaning.",
              70
            )}
          </div>
          <div
            className={`w-[20%] sm:overflow-scroll sm:w-[45%] sm:h-[200px] sm:p-3 h-[50%] bg-[#1a6b68] flex items-center justify-center p-2 font-[Poppins] text-white`}
          >
            {trimpara(
              " They are available in various types of lens designs and prescriptions, accommodating different vision needs and preferences.",
              70
            )}
          </div>
          <div
            className={`w-[20%] sm:overflow-scroll sm:w-[45%] sm:h-[200px] sm:p-3 h-[50%] bg-[#1a6b68] flex items-center justify-center p-2 font-[Poppins] text-white`}
          >
            {trimpara(
              "Comfort and Convenience: Ensures clear vision with less frequent maintenance.",
              70
            )}
          </div>
          <div
            className={`w-[20%] sm:overflow-scroll sm:w-[45%] sm:h-[200px] sm:p-3 h-[50%]  bg-[#1a6b68] flex items-center justify-center p-2 font-[Poppins] text-white`}
          >
            {trimpara(
              "Beyond their functional benefits, platinum blue lenses are available in a variety of fashionable frames and lens tints.",
              70
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  .h2-scratch {
    font-weight: 300;
    color: brown;
  }
`;

export default ScratchResistant;
