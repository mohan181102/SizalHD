import React, { useState } from "react";
import styled from "styled-components";
import "./AntiReflection.css";
import img1 from "../../public/Antireflection.jpg";

const AntiReflective = () => {
  function trimpara(para = "", words = 100) {
    const [fullpara, setfullpara] = useState(false);
    if (para.length > words && fullpara == false) {
      const trim = para.slice(0, words);
      return (
        <button
          className={`text-left sm:overflow-scroll flex items-center justify-start flex-wrap`}
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
          backgroundImage: `url("/tamara-bellis-LJqRUWr9V0w-unsplash.jpg")`,
          backgroundPosition: "cover",
          objectFit: "cover",
        }}
      >
        <div className={`div-black`}></div>
      </div>
      <h2 className={`photo-chromic-h2`}>Platinum Green Lense</h2>
      <div className={`main-div sm:p-0 sm:w-full p-4  px-6`}>
        <h2
          className={`h2-anti-reflection px-[60px] sm:px-[20px] sm:text-[25px] mb-2 font-[Poppins] font-[500]`}
        >
          Platinum Green Lens
        </h2>

        <div
          className={`div-for-img-p px-[60px] sm:px-[20px] items-start sm:flex-col  `}
        >
          <div
            className={`w-[400px] sm:w-auto sm:flex sm:items-center sm:justify-center h-auto sm:mb-2`}
          >
            <img
              src={img1}
              className={`img-anti border-0 w-[500px] sm:shadow-md sm:mb-2 sm:w-[300px] `}
              alt=""
            />
          </div>
          <p
            className={`p-anti-reflection font-[Poppins] sm:w-[95%] sm:px-2 sm:text-[15px] text-black w-[70%]`}
          >
            Platinum green lenses are a type of eyewear designed to address the
            challenges posed by prolonged exposure to digital screens and
            artificial light. These lenses are equipped with advanced filtering
            technology that selectively blocks harmful blue light while allowing
            beneficial light to pass through. By reducing the amount of
            high-energy visible (HEV) blue light that reaches the eyes, platinum
            green lenses help prevent eye strain, fatigue, and potential
            long-term damage associated with digital device use.
            <br /> In addition to their blue light filtering properties,
            platinum green lenses often feature anti-reflective coatings that
            minimize glare and enhance visual clarity. This makes them
            particularly suitable for individuals who spend a significant amount
            of time working on computers, browsing smartphones, or watching
            television.Moreover, platinum green lenses may include UV protection
            to shield the eyes from harmful ultraviolet rays emitted by the sun.
            This dual protection ensures comprehensive safeguarding against both
            indoor and outdoor sources of potentially damaging light.
          </p>
        </div>
        <h2
          className={`h2-how-anti-reflection px-[60px] sm:px-[20px] sm:text-[25px] font-[Poppins] text-[27px]`}
        >
          How Platinum Green lense work:
        </h2>
        <br className={` sm:hidden`} />
        <p
          className={`p-anti-reflection sm:w-[95%] px-[60px] sm:px-[20px] font-[Poppins]`}
        >
          Platinum green lenses utilize advanced optical coatings that
          selectively filter out harmful blue light while allowing beneficial
          light wavelengths to pass through. These lenses are specifically
          designed to reduce eye strain caused by prolonged exposure to digital
          screens and artificial light sources. By blocking a significant
          portion of high-energy visible (HEV) blue light, platinum green lenses
          enhance visual comfort, minimize glare with anti-reflective coatings,
          and may provide additional UV protection, thereby supporting overall
          eye health in today's technology-driven world.
        </p>

        {/* fetures */}
        <h2
          className={`w-[100%] pl-[150px] sm:pl-[40px] mt-4 items-center justify-start text-[2rem] font-[Poppins] bg-white`}
        >
          Platinum Green lenses Features
        </h2>
        <div
          className={`w-full h-[400px] sm:h-auto flex items-center bg-white justify-center gap-2 p-4 flex-wrap`}
        >
          <div
            className={`w-[20%] h-[50%] sm:overflow-scroll sm:w-[45%] sm:h-[200px] sm:p-3 bg-[#1a6b68] flex items-center justify-center font-[Poppins] p-2 text-white `}
          >
            {trimpara(
              " Effectively blocks harmful high-energy visible (HEV) blue light emitted by digital screens, reducing eye strain and fatigue.",
              70
            )}
          </div>
          <div
            className={`w-[20%] h-[50%] sm:overflow-scroll sm:w-[45%] sm:h-[200px] sm:p-3 bg-[#1a6b68] flex items-center justify-center p-2 font-[Poppins] text-white `}
          >
            {trimpara(
              "Minimizes glare and reflections from both the front and back surfaces of the lenses, improving visual clarity and reducing distractions.",
              70
            )}
          </div>
          <div
            className={`w-[20%] h-[50%] sm:overflow-scroll sm:w-[45%] sm:h-[200px] sm:p-3 bg-[#1a6b68] flex items-center justify-center p-2 font-[Poppins] text-white`}
          >
            {trimpara(
              "Some variants provide protection against harmful UV rays, safeguarding the eyes from both indoor and outdoor sources of ultraviolet radiation.",
              70
            )}
          </div>
          <div
            className={`w-[20%] h-[50%] sm:overflow-scroll sm:w-[45%] sm:h-[200px] sm:p-3 bg-[#1a6b68] flex items-center justify-center p-2 font-[Poppins] text-white `}
          >
            {trimpara(
              " Improves contrast and sharpness of vision, especially in low-light conditions, enhancing overall visual experience.",
              70
            )}
          </div>
          <div
            className={`w-[20%] h-[50%] sm:overflow-scroll sm:w-[45%] sm:h-[200px] sm:p-3  bg-[#1a6b68] flex items-center justify-center p-2 font-[Poppins] text-white`}
          >
            {trimpara(
              "Ease of Cleaning: Simplifies removal of dirt, dust, and oils.",
              70
            )}
          </div>
          <div
            className={`w-[20%] h-[50%] sm:overflow-scroll sm:w-[45%] sm:h-[200px] sm:p-3 bg-[#1a6b68] flex items-center justify-center p-2 font-[Poppins] text-white`}
          >
            {trimpara(
              "Available in a variety of fashionable frames, allowing wearers to combine functionality with personal style preferences.",
              70
            )}
          </div>
          <div
            className={`w-[20%] h-[50%] sm:overflow-scroll sm:w-[45%] sm:h-[200px] sm:p-3 bg-[#1a6b68] flex items-center justify-center p-2 font-[Poppins] text-white`}
          >
            {trimpara(
              "Comfort and Convenience: Ensures clear vision with less frequent maintenance.",
              70
            )}
          </div>
          <div
            className={`w-[20%] h-[50%] sm:overflow-scroll sm:w-[45%] sm:h-[200px] sm:p-3  bg-[#1a6b68] flex items-center justify-center p-2 font-[Poppins] text-white`}
          >
            {trimpara(
              " Clarity: Maintains clear vision by preventing light scattering.",
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
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .h2-anti-reflection {
    font-weight: 300;
    color: brown;
  }

  @media (max-width: 650px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export default AntiReflective;
