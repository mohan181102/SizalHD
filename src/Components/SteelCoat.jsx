import React from "react";
import styled from "styled-components";

const SteelCoat = () => {
  return (
    <Container>
      <About>
        <div className={`w-full `}>
          <h2>Steel Coat Lenses</h2>
          <p>
            Steel coat lenses refer to eyewear lenses treated with a specialized
            coating that enhances durability and scratch resistance. This
            advanced coating technology, often incorporating elements like
            hardened steel compounds, provides an additional layer of
            protection, making the lenses more robust against daily wear and
            tear. Ideal for both prescription glasses and sunglasses, steel coat
            lenses not only extend the lifespan of eyewear but also maintain
            clarity and performance, ensuring users enjoy long-lasting,
            high-quality vision.
          </p>
          <br />
          <p className={`w-full flex items-start justify-center flex-col `}>
            <b>The Steel Coating consists of 3 types of coatings.</b>
            <p>
              1. Scratch Resistance - Lenses stay pristine, vision remains
              clear. Always.{" "}
            </p>
            <p>
              2. Ease of Cleaning - Stronger anti-static and hydrophobic
              properties repel effectively. Makes cleaning effortless.
              Durability and{" "}
            </p>
            <p>
              3. Stability - High performance adhesion layer ensures greater
              stability to an already proven superior process.{" "}
            </p>
          </p>
        </div>
        <div className={`w-full h-auto flex items-center justify-center`}>
          <img
            src="https://uploads-ssl.webflow.com/58f95ffe41beda37878535cd/5ceb92215d0f4771c4a00262_lens-coating-steel.jpg"
            alt=""
          />
        </div>
      </About>
    </Container>
  );
};

const Container = styled.section`
  padding: 2rem;
  min-height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direection: column;

  @media (max-width: 650px) {
    padding: 0px;
  }
`;
const About = styled.section`
  width: 100%;

  h2 {
    font-weight: 400;
    width: 100%;
    margin-bottom: 2rem;
    font-size: 2.3rem;
    color: brown;
    font-family: Poppins;
  }
  p {
    font-size: 15px;
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

export default SteelCoat;
