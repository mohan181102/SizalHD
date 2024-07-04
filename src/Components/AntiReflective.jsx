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
      <h2 className={`photo-chromic-h2`}>Anti-Reflective Lenses</h2>
      <div className={`main-div sm:p-0 sm:w-full p-4  px-6`}>
        <h2
          className={`h2-anti-reflection px-[60px] sm:px-[20px] sm:text-[25px] mb-2 font-[Poppins] font-[500]`}
        >
          Anti-Reflective Lens Coating
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
            Anti-reflective (AR) lens coatings, also known as anti-glare
            coatings, are a type of optical coating applied to the surface of
            eyeglass lenses to reduce reflections, glare, and halos around
            lights. This enhancement improves both the aesthetic appearance and
            visual comfort of the wearer by allowing more light to pass through
            the lenses and reducing distracting reflections.Anti-reflective (AR)
            coated lenses are a revolutionary advancement in eyewear technology,
            providing a multitude of benefits that significantly enhance the
            visual experience and comfort of the wearer. These coatings work by
            minimizing reflections on the lens surfaces, allowing more light to
            pass through and thus improving vision clarity and reducing eye
            strain.
            <br /> This is particularly beneficial in low-light conditions and
            during tasks that involve prolonged exposure to digital screens,
            such as computer work or using smartphones. The reduction of glare
            from headlights, streetlights, and other bright sources is
            especially advantageous for nighttime driving, making it safer and
            more comfortable. Aesthetically, AR coatings make lenses appear
            nearly invisible by eliminating reflections, which allows for better
            eye contact and a clearer, more natural appearance in photographs
            and everyday interactions. Moreover, modern AR coatings often
            incorporate additional features such as scratch resistance, smudge
            resistance, and UV protection, making them more durable and easier
            to maintain.
          </p>
        </div>
        <h2
          className={`h2-how-anti-reflection px-[60px] sm:px-[20px] sm:text-[25px] font-[Poppins] text-[27px]`}
        >
          How Anti-Reflective Coating Works:
        </h2>
        <br className={` sm:hidden`} />
        <p
          className={`p-anti-reflection sm:w-[95%] px-[60px] sm:px-[20px] font-[Poppins]`}
        >
          Anti-reflective (AR) coated lenses work by applying multiple
          ultra-thin layers of metal oxides to the lens surfaces in a vacuum.
          These layers are designed to reduce reflections by canceling out light
          waves that reflect off the front and back surfaces of the lenses. This
          allows more light to pass through the lenses, enhancing vision clarity
          and reducing glare. The result is improved visual comfort, especially
          in low-light conditions and during activities like night driving or
          using digital screens, as well as a more aesthetically pleasing
          appearance with less noticeable reflections on the lenses.
        </p>

        {/* fetures */}
        <h2
          className={`w-[100%] pl-[150px] sm:pl-[40px] mt-4 items-center justify-start text-[2rem] font-[Poppins] bg-white`}
        >
          Antireflection Features
        </h2>
        <div
          className={`w-full h-[400px] sm:h-auto flex items-center bg-white justify-center gap-2 p-4 flex-wrap`}
        >
          <div
            className={`w-[20%] h-[50%] sm:overflow-scroll sm:w-[45%] sm:h-[200px] sm:p-3 bg-[#1a6b68] flex items-center justify-center font-[Poppins] p-2 text-white `}
          >
            {trimpara(
              "Reduced Reflection: AR coatings significantly decrease surface reflections, improving clarity and contrast in optical systems.",
              70
            )}
          </div>
          <div
            className={`w-[20%] h-[50%] sm:overflow-scroll sm:w-[45%] sm:h-[200px] sm:p-3 bg-[#1a6b68] flex items-center justify-center p-2 font-[Poppins] text-white `}
          >
            {trimpara(
              " Increased Transmission: By minimizing reflection losses, more light passes through the surface, enhancing brightness and visibility.",
              70
            )}
          </div>
          <div
            className={`w-[20%] h-[50%] sm:overflow-scroll sm:w-[45%] sm:h-[200px] sm:p-3 bg-[#1a6b68] flex items-center justify-center p-2 font-[Poppins] text-white`}
          >
            {trimpara(
              "  Broadband Performance: Effective across a wide range of wavelength sensuring consistent performance in various lighting conditions.",
              70
            )}
          </div>
          <div
            className={`w-[20%] h-[50%] sm:overflow-scroll sm:w-[45%] sm:h-[200px] sm:p-3 bg-[#1a6b68] flex items-center justify-center p-2 font-[Poppins] text-white `}
          >
            {trimpara(
              "Durability: Modern AR coatings are durable, resistant to scratching and environmental factors, extending the lifespan of optical components.",
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
              " Protects Special Coatings: Shields additional coatings like anti-reflective and UV protection.",
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
