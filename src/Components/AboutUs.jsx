import React from "react";
import styled from "styled-components";

const AboutUs = () => {
  return (
    <Container>
      <img src="\src\assets\about.avif" alt="" />
      <div>
        <Head>
          ABOUT US
          <hr />
        </Head>
        <Para>
          Sizal HD lenses, is the fastest emerging optical and lens company.
          Having carved out a niche for its expertise in optical lens industry
          over the last 8 years, today, Sizal HD Lenses stands at the forefront
          of treading an ever growing assortment of hi-tech and digital vision
          healthcare solutions.
        </Para>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 2rem 1.8rem;
  min-height: 250px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #f3f3f3;
  div {
    background-color: #f3f3f3;
    height: auto;
    width: 55%;
    // border: 1px solid black;
    padding: 2rem 1.8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 650px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

const Para = styled.p`
  text-align: center;
  color: #525050;
  width: 700px;
  font-size: 1.2rem;

  @media (max-width: 650px) {
    width: 350px;
    font-size: 15px;
    font-family: "Poppins";
  }
`;

const Head = styled.h1`
  text-align: center;
  padding: 1.6rem;
  color: #000;
  font-family: Arial;
  font-weight: 300;
  hr {
    border: none;
    background-color: #fc0000;
    height: 2px;
  }

  @media (max-width: 650px) {
    width: 200px;
  }
`;

export default AboutUs;
