import React from "react";
import styled from "styled-components";

const PersonalizedRange = () => {
  return (
    <Container>
      <div className="col-md-6 image">
        <img
          src="https://img.freepik.com/free-photo/side-view-woman-getting-her-eyes-checked_23-2150801435.jpg?size=626&ext=jpg&ga=GA1.1.1631028364.1716524692&semt=ais_user"
          alt=""
        />
      </div>
      <div className="col-md-6 text">
        <h3 className={`text-h3`}>
          Personalised & Customised Premium Progressive Lenses
        </h3>
        <p className={`text-p`}>
          A best available optometric range offering the most digitally advanced
          designs, specially created and highly personalised for professionals,
          to deliver their specific vision needs as per their demanding
          profession.
        </p>
      </div>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
  min-height: 300px;
  padding: 1.3rem 2rem;

  background-color: #f3f3f3;
  animation: fadeIn 5s;
  .text {
    display: flex;
    flex-direction: column;
    background-color: white;
    padding: 20px;
    justify-content: start;
    align-items: center;
    border: 2px solid white;
  }

  .text-h3 {
    font-size: 2rem;
    font-weight: 700;
    font-family: Arial;
    margin-bottom: 1.3rem;
  }

  .text-p {
    font-size: 1.3rem;
    font-weight: 200;
    line-height: 2.4rem;
    font-family: Arial;
    margin-bottom: 1.3rem;
    cursor: default;
    &:hover {
      color: #1a6b68;
      transation: all 200ms;
    }
  }

  img {
    width: 100%;
    height: fit-content;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;

    .text-h3 {
      font-size: 25px;
    }

    .text-p {
      font-size: 15px;
      line-height: 2rem;
    }
  }

  @media (max-width: 1024px) and (min-width: 650px) {
    justify-content: center;
    flex-direction: column-reverse;
    height: auto;

    width: 100%;
    overflow: hidden;
    align-items: center;

    img {
      width: 100%;
      height: fit-content;
    }

    .text {
      display: flex;
      width: 100%;
      flex-direction: column;
      background-color: white;
      padding: 20px;
      padding-bottom: 0px;
      justify-content: start;
      align-items: center;
    }

    .image {
      width: 100%;
      height: 300px;
    }

    .widest-h3 {
      width: 100%;
    }

    .p-widest {
      font-size: 15px;
      line-height: 2rem;
      height: auto;
    }
  }
`;
export default PersonalizedRange;
