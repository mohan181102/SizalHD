import React from "react";
import styled from "styled-components";
import "./HardCoat.css";
import { useState } from "react";

const HardCoat = () => {
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
          backgroundImage: `url("/kyle-johnson-5YJubOY3h74-unsplash.jpg")`,
          backgroundPosition: "cover",
          objectFit: "cover",
        }}
      >
        <div className={`div-black`}></div>
      </div>
      <h2 className={`photo-chromic-h2`}>Hard Coating Lens</h2>
      <div className="contain">
        <div className="col-md-4 flex items-center justify-center sm:shadow-md">
          <img src="http://www.yashlenses.com/img/hardcoat.jpg" alt="" />
        </div>
        <div className="col-md-8">
          <h3 className={`hard-coat-h3`}>Hard Coating Lens</h3>
          <p className={`hardcoat-p font-["Poppins"]`}>
            A high quality thermally cured hard coat gives the great scratch
            resistance and gives for the maximum long lasting component for an
            AR coating application. Plastic lens substances scratch without
            problems than glass substances, and therefore gain greatly with
            application of a durable hardcoat.Both Side dip automated coated
            lenses for longer existence. Coating thickness is exactly controlled
            with the aid of absolutely automized machine as a consequence giving
            lens highest quality scratch resistant assets. Two of the extra
            common Varieties of hard coats are: Thermally cured hard coating The
            lens is slowly surpassed through a liquid bathtub of a solvent based
            hardcoat where the coating solution adheres to each convex and
            concave facets of the lens. The hardcoat is then allowed to therapy
            in an excessive temperature oven till solid. U.V. Cured hard coating
            A liquid hardcoat solution is implemented to the concave side
            (backside) of the lens, the use of a spinning process. Lenses are
            then cured under a UV (Ultra Violet) light for a particular period
            of time.
          </p>
        </div>
      </div>

      {/* fetures  */}
      <h2
        className={`w-[100%] pl-[200px] sm:p-[10px]  items-center justify-start text-[2rem] sm:justify-center sm:text-center font-[Poppins] bg-white`}
      >
        Hard Coating Features
      </h2>
      <div
        className={`w-full h-[400px] sm:h-auto  flex items-center bg-white justify-center gap-2 p-4 flex-wrap`}
      >
        <div
          className={`w-[20%] sm:w-[45%] h-[50%] sm:h-[170px] bg-[#1a6b68] flex items-center justify-center font-[Poppins] p-2 text-white `}
        >
          Vision Clarity: Maintains sharp, clear vision by preventing light
          scattering.
        </div>
        <div
          className={`w-[20%] sm:w-[45%] sm:h-[170px]  h-[50%] bg-[#1a6b68] flex items-center justify-center p-2 font-[Poppins] text-white `}
        >
          Enhanced Durability: Increased resistance to scratches and abrasions.
        </div>
        <div
          className={`w-[20%] sm:w-[45%] sm:h-[170px]  h-[50%] bg-[#1a6b68] flex items-center justify-center p-2 font-[Poppins] text-white`}
        >
          Cost-Effective: Reduces need for frequent lens replacements.
        </div>
        <div
          className={`w-[20%] sm:w-[45%] sm:h-[170px]  h-[50%] bg-[#1a6b68] flex items-center justify-center p-2 font-[Poppins] text-white `}
        >
          Aesthetic Maintenance: Keeps lenses looking new and attractive.
        </div>
        <div
          className={`w-[20%] sm:w-[45%] sm:h-[170px]  h-[50%]  bg-[#1a6b68] flex items-center justify-center p-2 font-[Poppins] text-white`}
        >
          Ease of Cleaning: Simplifies removal of dirt, dust, and oils.
        </div>
        <div
          className={`w-[20%] sm:overflow-scroll sm:w-[45%] sm:h-[170px]  h-[50%] bg-[#1a6b68] flex items-center justify-center p-2 font-[Poppins] text-white`}
        >
          {trimpara(
            "Protects Special Coatings: Shields additional coatings like anti-reflective and UV protection.",
            70
          )}
        </div>
        <div
          className={`w-[20%] sm:w-[45%] sm:h-[170px]  h-[50%] bg-[#1a6b68] flex items-center justify-center p-2 font-[Poppins] text-white`}
        >
          Comfort and Convenience: Ensures clear vision with less frequent
          maintenance.
        </div>
        <div
          className={`w-[20%] sm:w-[45%] sm:h-[170px]  h-[50%]  bg-[#1a6b68] flex items-center justify-center p-2 font-[Poppins] text-white`}
        >
          Clarity: Maintains clear vision by preventing light scattering.
        </div>
      </div>
      {/* create benifits section */}
    </Container>
  );
};

const Container = styled.section`
  .contain {
    display: flex;
    padding: 1.3rem 3rem;
    background-color: white;
    .col-md-8 {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    img {
      width: 100%;
      height: fit-content;
      background-color: white;
    }

    .hard-coat-h3 {
      margin-bottom: 2rem;
      font-size: 2.7rem;
      color: brown;
      font-weight: 300;
      background-color: white;
    }
    .hardcoat-p {
      font-size: 17px;
      font-weight: 400;
    }
  }

  .image {
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: white;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .img-hardcoat {
    width: 450px;
  }

  @media (max-width: 650px) {
    .contain {
      padding: 2rem;
      flex-direction: column-reverse;
      .hard-coat-h3 {
        margin-bottom: 1rem;
        font-size: 2rem;
        color: brown;
        font-weight: 300;
        background-color: white;
      }

      .col-md-8 {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      .hardcoat-p {
        font-size: 15px;
        line-height: 2rem;
        font-family: "Poppins";
        font-weight: 400;
      }

      .img-hardcoat {
        width: 400px;
        box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
      }
    }
  }
`;

export default HardCoat;
