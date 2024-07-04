import React from "react";
import styled from "styled-components";
import img from "../../public/single-vision-lenses-vs-other-lenses.webp";

const SingleVision = () => {
  return (
    <Container>
      <div
        className={`w-full h-auto flex items-start gap-2 justify-center flex-col`}
      >
        <h2 className={`w-full h-auto text-[brown] pl-0 text-[2.2rem]`}>
          Single Vision Lenses
        </h2>
        <p className={` text-[15px]  `}>
          Make the near dear or go far with SIZAL HD! SIZAL HD single vision
          lenses are your perfect companion, whether for near vision, far vision
          or your daily activities. Simple, yet cool, these new age designs
          offer quality vision and complement your contemporary lifestyle. Be
          the cool, confident you at all times with SIZAL HD SIZAL HD is the
          basic SV lens, which is superior in every way to the conventional
          lenses. Every SIZAL HD lens comes with protective features that offer
          effective shield from scratches, water, reflection and dust, for
          enhanced durability
        </p>
        <h4 className={`w-full text-xl my-2 mb-0 text-green-800`}>
          Single-Vision vs. Progressive Lenses
        </h4>
        <p className={`  text-[15px] `}>
          A progressive lens looks like a single-vision lens. But behind the
          scenes of a progressive lens, several lens powers are joining forces
          to address all your vision needs at once.{" "}
        </p>
        <h4 className={`w-full text-xl my-2 mb-0 text-green-800`}>
          Single-Vision vs. Bifocal and Trifocal Lenses
        </h4>
        <p className={` text-[15px] `}>
          Like progressives, bifocal and trifocal glasses are types of
          multifocal glasses that correct vision at more than one distance.
          Bifocal glasses correct your vision in two ways (near and far), while
          trifocals correct vision three ways (near, intermediate, and far).{" "}
        </p>
      </div>
      <div className={`image w-full flex items-center my-4 justify-center`}>
        <img src={img} alt="" className={` h-[300px] sm:h-[200px]`} />
      </div>
    </Container>
  );
};

const Container = styled.section`
  padding: 2rem 4rem;
  min-height: 300px;
  font-family: Poppins;
  h2 {
    font-family: Poppins;
    font-weight: 300;
    padding-left: 0px;
  }
  p {
    font-family: Poppins;
  }

  @media (max-width: 650px) {
    padding: 2rem 2rem;
    h2 {
      font-family: Poppins;
      font-weight: 300;
      font-size: 30px;
      padding-left: 0px;
    }

    p {
      font-family: Poppins;
      font-size: 15px;
      padding-left: 15px;
      padding-right: 15px;
      margin-bottom: 15px;
    }
  }
`;

export default SingleVision;
