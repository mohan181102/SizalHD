import React from "react";
import styled from "styled-components";
import img from "../assets/photo-1608539733377-5557e02926b5.avif";

const Organization = () => {
  return (
    <Container>
      <div
        className={`back-photochromic`}
        style={{
          backgroundImage: `url("/photochromic-lens.jpg")`,
          backgroundPosition: "cover",
          objectFit: "cover",
        }}
      >
        <div className={`div-black`}></div>
      </div>
      <h2 className={`photo-chromic-h2`}>Organization</h2>
      <div
        className={`w-auto h-auto flex items-center justify-center px-[3rem] py-[3rem] gap-[20px] bg-white`}
      >
        <div className="col-md-6 content">
          <h2 className={`h2-orig`}>ORGANIZATION</h2>
          <p className={`font-[Poppins] text-[15px]`}>
            We are a leading manufacture of Digital Free From Progressive
            Lenses. With the help of advanced machines and technology, each pair
            of glasses is the result of an ongoing R&D process that combines
            passion, innovation, and creativity with the latest technology and
            master craftsmanship. We offer the widest range of high-quality
            progressive lenses and individual customised lenses with PLATINUM
            premium coating. OUR VISION SIZAL HD Lenses thrives to be the best
            optical solutions company from India, delivering the latest in
            vision healthcare, both domestically and internationally.
          </p>
        </div>
        <div className="col-md-6 image">
          <img src={`${img}`} alt="" className={`w-[400px] lg:border h-auto`} />
        </div>
      </div>
    </Container>
  );
};

const Container = styled.section`
  display: flex;

  justify-content: center;
  aling-items: center;
  flex-direction: column;

  gap: 10px;

  .h2-orig {
    margin-bottom: 2rem;
    font-size: 3rem;
    color: #5d5d5d;
  }
  p {
    color: #545454;
  }
  .content {
    display: flex;
    flex-direction: column;
  }
  .image {
    width: auto;
    height: auto;
    overflow: visible;
    img {
      overflow: hidden;
    }
  }
  @media (max-width: 650px) {
    flex-direction: column;
    .h2-orig {
      margin-bottom: 2rem;
      font-size: 2.1rem;
      color: #5d5d5d;
    }
  }

  @media (max-width: 1024px) and (min-width: 650px) {
    flex-direction: row;

    .image {
      width: 50%;
      height: 300px;
      border: none;
    }

    .h2-orig {
      margin-bottom: 2rem;
      font-size: 2.3rem;
      color: #5d5d5d;
    }
  }
`;
export default Organization;
