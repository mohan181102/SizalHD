import React, { useState } from "react";
import styled from "styled-components";
import "./ScratchResistant.css";
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
          backgroundImage: `url("/nadine-shaabana-Bg1QUrnMNsA-unsplash (1).jpg")`,
          backgroundPosition: "cover",
          objectFit: "cover",
        }}
      >
        <div className={`div-black`}></div>
      </div>
      <h2 className={`photo-chromic-h2 `}>Scratch Resistant</h2>
      <div
        className={`w-auto h-auto bg-white flex items-center justify-center flex-col`}
      >
        <div className={`scratch-main-div sm:p-[1rem]`}>
          <h2
            className={`h2-scratch font-[Poppins] sm:text-[25px] font-[900] text-[2rem]`}
          >
            Scratch Resistant UV Coating
          </h2>
          <div className={`div-for-scratch sm:flex-col`}>
            <img
              src="http://www.yashlenses.com/img/you2_1.jpg"
              className={`img-scratch w-[300px] sm:my-2 sm:mb-2 sm:shadow-md`}
              alt=""
            />
            <p
              className={`p-for-scratch sm:mt-3 sm:leading-6 sm:w-full font-[Poppins] text-[15px]`}
            >
              Scratch-resistant UV coating lenses combine two essential
              protective features in eyewear: scratch resistance and ultraviolet
              (UV) light protection. These lenses are designed to provide a
              durable surface that resists everyday scratches and abrasions,
              ensuring clear vision over a longer period. The scratch-resistant
              coating forms a hard layer on the lens surface, making it less
              susceptible to damage from handling, cleaning, or minor impacts.
              Additionally, the UV coating blocks harmful UV rays from the sun,
              protecting your eyes from potential damage such as cataracts,
              macular degeneration, and other eye conditions caused by prolonged
              UV exposure. This combination of coatings not only extends the
              lifespan of the lenses by maintaining their clarity but also
              ensures that your eyes are safeguarded from the harmful effects of
              UV radiation, making them an excellent choice for both everyday
              wear and outdoor activities.
            </p>
          </div>
        </div>

        <h2
          className={`w-[100%] pl-[150px] sm:w-full sm:flex sm:items-center sm:justify-center sm:h-auto sm:text-center sm:pl-0  items-center justify-start text-[2rem] font-[Poppins] bg-white`}
        >
          Scratch Resistant Features
        </h2>
        <div
          className={`w-full h-[400px] flex items-center sm:h-auto bg-white justify-center gap-2 p-4 flex-wrap`}
        >
          <div
            className={`w-[20%] h-[50%] sm:overflow-scroll sm:w-[45%] sm:h-[200px] sm:p-3 bg-[#1a6b68] flex items-center justify-center font-[Poppins] p-2 text-white `}
          >
            {trimpara(
              " Hard Coating: These lenses are treated with a special hard coating that makes them more resistant to scratches from everyday wear and tear.",
              70
            )}
          </div>
          <div
            className={`w-[20%] sm:overflow-scroll sm:w-[45%] sm:h-[200px] sm:p-3 h-[50%] bg-[#1a6b68] flex items-center justify-center p-2 font-[Poppins] text-white `}
          >
            {trimpara(
              "  Durability: They are more durable compared to regular lenses, which helps them last longer without significant damage.",
              70
            )}
          </div>
          <div
            className={`w-[20%] sm:overflow-scroll sm:w-[45%] sm:h-[200px] sm:p-3 h-[50%] bg-[#1a6b68] flex items-center justify-center p-2 font-[Poppins] text-white`}
          >
            {trimpara(
              " Clarity: Despite being scratch-resistant, they maintain optical clarity, ensuring your vision remains clear and undistorted.",
              70
            )}
          </div>
          <div
            className={`w-[20%] sm:overflow-scroll sm:w-[45%] sm:h-[200px] sm:p-3 h-[50%] bg-[#1a6b68] flex items-center justify-center p-2 font-[Poppins] text-white `}
          >
            {trimpara(
              "Protection: They provide an additional layer of protection for your eyeglasses, reducing the likelihood of scratches that can impairvision",
              70
            )}
          </div>
          <div
            className={`w-[20%] sm:overflow-scroll sm:w-[45%] sm:h-[200px] sm:p-3 h-[50%]  bg-[#1a6b68] flex items-center justify-center p-2 font-[Poppins] text-white`}
          >
            {trimpara(
              "Ease of Maintenance: Scratch-resistant lenses are easier to clean and maintain, as they are less prone to damage from cleaning or accidental abrasions.",
              70
            )}
          </div>
          <div
            className={`w-[20%] sm:overflow-scroll sm:w-[45%] sm:h-[200px] sm:p-3 h-[50%] bg-[#1a6b68] flex items-center justify-center p-2 font-[Poppins] text-white`}
          >
            {trimpara(
              "Protects Special Coatings: Shields additional coatings like anti-reflective and UV protection.",
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
              "Clarity: Maintains clear vision by preventing light scattering.",
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
