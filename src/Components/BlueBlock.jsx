import React from "react";
import styled from "styled-components";
import "./BlueBlock.css";

const BlueBlock = () => {
  return (
    <Container>
      {/* BACKIMAGE FOR BLUE BLOCK LENSE */}
      <div
        className={`back-photochromic`}
        style={{
          backgroundImage: `url("/Child-blue-light-glasses-2-768x504.jpeg")`,
          backgroundPosition: "cover",
          objectFit: "cover",
        }}
      >
        <div className={`div-black`}></div>
      </div>
      <h2 className={`photo-chromic-h2`}>Blue Block Lenses</h2>
      <div className="whyblue ">
        <h2 className={`h2-whyblue`}>Why Blue Block Lenses?</h2>
        <p className={`p-why-blue font-["Poppins"]`}>
          Blue light lenses are gaining popularity as people become more aware
          of the potential damage caused by blue light to our eyes. These lenses
          filter out harmful blue light from digital devices like computers,
          tablets, and smartphones. While there are not enough studies to
          definitively prove the effectiveness of blue light lenses in reducing
          digital eye strain, preventing dry eyes, or protecting against macular
          degeneration, they can still help regulate sleep-wake cycles and
          circadian rhythms. This can have several benefits, including hormone
          regulation and increased alertness and may help manage depression and
          anxiety. With these abilities, blue light lenses are excellent for
          those who spend a lot of time in front of screens, promoting better
          overall health and comfort for the eyes.
          <br />
          Research has consistently indicated a connection between disrupted
          sleep and susceptibility to depression and anxiety. Blue light lenses
          can effectively regulate our sleep-wake cycle and indirectly support
          mental health. These lenses promote healthier sleep patterns and
          overall well-being. Blue light lenses may contribute to improved
          hormone regulation and alertness and provide benefits for managing
          depression and anxiety. But blue light lenses are not only helpful for
          those who spend time in front of digital devices—they can also be
          beneficial for outdoor use, such as when engaging in activities in
          direct sunlight. These lenses help reduce glare and make it easier to
          focus on your activity or enjoy the scenery around you.
        </p>
      </div>
    </Container>
  );
};

const Container = styled.section`
  .whyblue {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    padding: 2rem 6rem;
    font-size: 1.5rem;
    background-color: white;
    color: brown;
    font-weight: 300;
  }

  .h2-whyblue {
    width: 100%;
    background-color: white;
    heigh: 90px;
    display: flex;
    font-size: 1.7rem;
    margin-bottom: 20px;
    aling-items: center;
    justify-content: left;
  }

  .p-why-blue {
    color: black;
    display: flex;
    font-size: 1rem;
    font-weight: 400;
    aling-items: center;
    justify-content: left;
  }

  @media (max-width: 650px) {
    .whyblue {
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: left;
      padding: 2rem;
      font-size: 1.5rem;
      background-color: white;
      color: brown;
      font-weight: 300;
    }

    .p-why-blue {
      color: black;
      display: flex;
      font-size: 15px;
      font-family: "Poppins";
      font-weight: 400;
      aling-items: center;
      justify-content: left;
    }
  }
`;

export default BlueBlock;
