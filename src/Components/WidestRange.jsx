import React from "react";
import styled from "styled-components";
import "./WidestRange.css";

const WidestRange = () => {
  return (
    <Container>
      <div className="col-md-6 col-sm-6 col-xs-6 col-lg-6 text">
        <h3 className={`widest-h3 sm:text-[25px]`}>
          Widest range of high quality digital freeform progressive lenses –
          Sizal HD Lenses
        </h3>
        <p className={`p-widest`}>
          Sizal HD Lenses offers the widest range of high quality digital
          progressive, and digital freeform progressive lenses and individual
          customised lenses in a variety of stipulations. From quality single
          vision lenses to advanced progressive lenses, customised progressive ,
          and an industry leading range of premium coatings.
        </p>
      </div>
      <div className="col-md-6 col-sm-6 col-xs-6 col-lg-6 flex items-center justify-center image">
        <img
          src="https://t4.ftcdn.net/jpg/07/78/51/81/240_F_778518169_IByEGQZM9bJguyKPaspOgW5y1ttxih9Q.jpg"
          alt=""
        />
      </div>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: 450px;

  background-color: white;
  padding: 1rem 2rem;
  .text {
    display: flex;
    flex-direction: column;
    background-color: white;
    padding: 20px;
    justify-content: start;
    align-items: center;
  }

  .image {
    height: 100%;
  }
  .widest-h3 {
    font-size: 2rem;
    font-weight: 700;
    font-family: Arial;
    margin-bottom: 1.3rem;
  }

  .p-widest {
    font-size: 1.2rem;
    font-weight: 200;
    line-height: 2.7rem;
    font-family: Arial;

    height: 100%;
    margin-bottom: 1.3rem;
    &:hover {
      color: #1a6b68;
      transation: all 200ms;
    }
  }

  img {
    width: 100%;
    height: fit-content;
  }

  @media (max-width: 650px) {
    flex-direction: column;

    justify-content: center;
    height: auto;
    overflow: hidden;
    align-items: center;

    img {
      width: 100%;
      height: fit-content;
    }

    .image {
      width: 100%;
    }

    .widest-h3 {
      font-size: 25px;
    }

    .p-widest {
      font-size: 15px;
      line-height: 2rem;
    }
  }

  @media (max-width: 1024px) and (min-width: 650px) {
    justify-content: center;
    flex-direction: column;
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

export default WidestRange;
