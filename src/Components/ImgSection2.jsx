import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const ImgSection2 = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const h3element = useRef(null);

  return (
    <Container className={`main-sportlight`}>
      <div className={`div-sportlight`}>
        <h3 className="col-md-6 text" id="h3-col-md" ref={h3element}>
          Spotlight <br /> Worthy <br /> Sunglasses
        </h3>
      </div>
      <a className="col-md-6 image" href="#">
        <img
          className={`spotlight-img`}
          src="src/assets/Untitled design.gif"
          alt=""
        />
      </a>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: #f3f3f3;
  justify-content: center;
  gap: 90px;
  align-items: center;
  // border: 2px solid red;

  .div-sportlight {
    // border: 1px solid red;
    width: auto;

    padding: 60px 60px;
    overflow: hidden;
  }

  .spotlight-img {
    width: 500px;
    border-radius: 0.5rem;
  }

  .main-sportlight {
    // border: 1px solid red;
    height: auto;
    text-shadow: 2px 2px 5px rgba(255, 255, 255, 0.8);
  }

  h3 {
    text-align: center;
    font-size: 3rem;
    width: fit-content;
    color: black;
    font-weight: 700;
    font-family: Arial;

    transform: translateY(0);
    transation: all 200ms;
  }

  .addanimation {
    transform: translateY(0);
    animation: animation-text 2s;
    text-shadow: 2px 2px 5px rgba(255, 255, 255, 0.8);
  }

  @keyframes animation-text {
    0% {
      transform: translateY(100%);
      opacity: 0;
    }
    100% {
      transform: translateX(0%);
      opacity: 1;
    }
  }

  .text {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    color: #00618e;
    font-size: 5.4rem;
  }

  img {
    width: 100%;
    height: fit-content;
  }

  .image {
    max-width: 450px;
    height: auto;
    display: flex;

    flex: 0 0 auto;
  }

  @media (max-width: 650px) {
    flex-direction: column;
    margin-bottom: 20px;
    gap: 30px;
    .div-sportlight {
      // border: 1px solid red;
      width: 100%;
      overflow: hidden;
      padding: 0px;
      overflow: hidden;
    }

    .text {
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 1;
      color: #00618e;
      width: 100%;

      font-size: 3.4rem;
    }

    .image {
      max-width: 300px;
      height: auto;
      display: flex;

      flex: 0 0 auto;
    }
  }

  @media (max-width: 1024px) and (min-width: 650px) {
    flex-direction: row;
    margin-bottom: 20px;
    gap: 20px;
    .div-sportlight {
      // border: 1px solid red;
      width: fit-content;
      overflow: hidden;
      padding: 0px;
      overflow: hidden;
    }

    .text {
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 1;
      color: #00618e;
      width: fit-content;

      font-size: 3.4rem;
    }

    .image {
      max-width: 330px;
      height: auto;
      display: flex;

      flex: 0 0 auto;
    }
  }
`;
export default ImgSection2;
