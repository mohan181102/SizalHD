import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
const OurProduct = () => {
  return (
    <Container>
      <h2 className={`our-service-h2`}>Our Products</h2>
      <div className="box">
        <div className="col-md-4 col-sm-4 col-xs-4 col-lg-4 flexybox">
          <div>
            <img src="src/assets/glasses.png" alt="" />
          </div>
          <NavLink className="link">CONVENTIONAL</NavLink>
        </div>
        <div className="col-md-4 col-sm-4 col-xs-4 col-lg-4 flexybox">
          <div>
            <img src="src\assets\rectangular-eyeglass-frame.png" alt="" />
          </div>
          <NavLink className="link" to="/digital-progressive">
            DIGITAL PROGRESSIVE
          </NavLink>
        </div>
        <div className="col-md-4 col-sm-4 col-xs-4 col-lg-4 flexybox">
          <div>
            <img src="src/assets/frames.png" alt="" />
          </div>
          <NavLink className="link" to="/freeform-progressive">
            FREEFORM PROGRESSIVE
          </NavLink>
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
  padding: 1.2rem 10rem;
  background-color: #ecf1f6;
  .our-service-h2 {
    text-align: center;
    font-weight: 300;
    font-size: 2.2rem;
    margin-bottom: 2rem;
    color: #005c54;
  }
  .box {
    display: flex;
    flex-direction: row;
    gap: 1.3rem;
    padding: 2rem 4rem;
  }
  .flexybox {
    padding: 1.5rem 3rem;
    border: 1px solid white;

    border-radius: 1px;
    background-color: #fff;
    div {
      border-radius: 50%;
      border: 1px solid white;
      padding: 1.3rem;
      margin-bottom: 2rem;
      background-color: #e2ffff;
    }
    img {
      width: 100%;
      color: red;
      height: fit-content;
    }

    .link {
      text-align: center;
      font-size: 1.5rem;
      text-decoration: none;
      color: black;
    }
  }

  .flexybox:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    transition: all 200ms;
    border-radius: 10px;
    div {
      box-shadow: 0 8px 16px rgba(169, 169, 169, 0.2);
    }
  }

  @media (max-width: 650px) {
    .box {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .our-service-h2 {
      text-align: center;
      font-weight: 300;
      font-size: 2rem;
      width: auto;
      margin-bottom: 0px;
      color: #005c54;
    }

    .flexbox {
      .link {
        text-align: center;
        font-size: 1rem;
        text-decoration: none;
        color: black;
      }
    }
  }

  @media (max-width: 1024px) and (min-width: 650px) {
    .our-service-h2 {
      text-align: center;
      font-weight: 300;
      font-size: 2rem;
      width: auto;
      margin-bottom: 0px;
      color: #005c54;
      border-bottom: 2px solid #005c54;
      padding-bottom: 10px;
    }

    .flexybox {
      padding: 1rem 2rem;
      width: 220px;
      border: 1px solid white;
      border-radius: 1px;
      background-color: #fff;
      div {
        border-radius: 50%;
        border: 1px solid white;
        padding: 1.3rem;
        margin-bottom: 2rem;
        background-color: #e2ffff;
      }
      img {
        width: 100%;
        color: red;
        height: fit-content;
      }

      .link {
        text-align: center;
        font-size: 1.2rem;

        text-decoration: none;
        color: black;
      }
    }
  }
`;

export default OurProduct;
