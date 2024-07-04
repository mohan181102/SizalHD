import React from "react";
import styled from "styled-components";

const PlatinumUV = () => {
  return (
    <Container>
      <h1 className={` lg:text-center`}>
        Platinum uv range of ultimate and innovative premium coatings
      </h1>
      <p>
        Presenting PLATINUM UV range of ultimate and innovative premium coatings
        to deliver that exclusive protection your lenses need and the complete
        eye care that you deserve. PLATINUM UV Coating a premium spectacle
        lenses coating range improves contrasts without distorting colour vision
        to provide strain-free, enhance visual experience with an advanced
        anti-reflection technology.
      </p>

      <img src="src/assets/homereal.jpg" className={`img-platinum`} alt="" />
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  padding: 1.6rem 3rem;
  display: flex;
  min-height: 150px;
  flex-direction: column;
  justify-content: center;

  background-color: #f3f3f3;
  align-items: center;
  animation: moveText 2s;

  @keyframes moveText {
    0% {
      transform: translateY(100%);
      opacity: 0;
    }
    100% {
      transform: translateY(0%);
      opacity: 1;
    }
  }

  p {
    text-align: center;
    font-size: 1.2rem;
    width: 80%;
    margin-bottom: 40px;
  }
  h1 {
    margin-bottom: 3rem;
    font-size: 2rem;
    font-weight: 500;
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h1::after {
    width: 270px;
    content: "";
    margin-top: 90px;
    height: 2px;
    border-bottom: 2px solid black;

    position: absolute;
  }

  .img-platinum {
    height: 350px;
    width: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 650px) {
    h1 {
      margin-bottom: 2rem;
      font-size: 2rem;
      font-weight: 500;
      height: auto;
      display: flex;
      text-aling: center;
      align-items: center;
      justify-content: center;
    }

    h1::after {
      width: 270px;
      content: "";
      margin-top: 200px;
      height: 2px;
      border-bottom: 2px solid black;

      position: absolute;
    }

    p {
      text-align: left;
      margin-top: 10px;
      font-size: 15px;
      font-family:"Poppins"
      width: 80%;
      margin-bottom: 40px;
    }
  }

  @media (max-width:1024px) and (min-width:650px){
     h1 {
      margin-bottom: 2rem;
      font-size: 2rem;
      font-weight: 500;
      height: auto;
      display: flex;
      text-aling: center !important;
      align-items: center !important;
 
      justify-content: center ;
    }

    h1::after {
      width: 300px;
      content: "";
      margin-top: 100px;
      height: 2px;
      border-bottom: 2px solid black;

      position: absolute;
    }

    p {
      text-align: center;
      margin-top: 10px;
      font-size: 15px;
      font-family:"Poppins"
      width: 80%;
      margin-bottom: 40px;
    }
  }
`;
export default PlatinumUV;
