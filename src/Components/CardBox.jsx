import image1 from "../assets/9.png";
import image2 from "../assets/10.png";
import image3 from "../assets/13.png";
import image4 from "../assets/13.png";
import image5 from "../assets/9.png";
import styled from "styled-components";
import Slider from "react-slick";
import { useRef } from "react";
import "./card.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 1500,
};

function CardBox() {
  const slider = useRef(null);

  return (
    <Container>
      <h2 className={`h2-Technology`}>Technology</h2>

      <Slider className={`slder`} ref={slider} {...settings}>
        <div className={`div-img`}>
          <img className={`image-tech`} src={image1} alt="not load" />
        </div>
        <div className={`div-img`}>
          <img className={`image-tech`} src={image2} alt="not load" />
        </div>
        <div className={`div-img`}>
          <img className={`image-tech`} src={image3} alt="not load" />
        </div>
        <div className={`div-img`}>
          <img className={`image-tech`} src={image4} alt="not load" />
        </div>
        <div className={`div-img`}>
          <img className={`image-tech`} src={image5} alt="not load" />
        </div>
      </Slider>
    </Container>
  );
}

const Container = styled.section`
  padding: 4rem 4rem;
  width: 100%;
  background-color:#f3f3f3;
  
  border-radius: 0.5rem;
  border:2px solid #f3f3f3;
  transition: all 200ms ease-in;
  &:hover{
    scale:1.05;
    transition:all 200ms;
  }
  .h2-Technology {
    font-size: 3rem;
    color: #00618e;
    font-weight: 600;
    background-color: white;
    text-align: center;
    font-family: serif;
  }

  .slide {
    background-color: #f3f3f3;
    flex: 0 0 auto;
  }
  
  .slick-dots li.slick-active button:before{
    color:#1a6b68;
  }

  .slick-prev, .slick-next{
    width:60px;
    height:60px;
    border-radius:50%;
    background-color:#1a6b68;
    font-size:4rem;
    z-index:2;
  } 

  .image-tech {
    background-color: white;
    width: 100%;
    hight: 100%;
  }

  .div-img {
    display: flex;
    background-color: white;
    justify-content: center;
    align-items: center;
    width: 600px;
    height: auto;
    padding: 30px;
    margin-right: 20px;
    object-position: center;
    object-fit: cover;
    overflow: hidden;
    transition: all 100ms;
    border-radius: 0.5rem;
  }

   
  }

  .slder {
    display: flex;
    background-color: white;
    justify-content: center;
    align-items: center;
  }

  @media (max-width:650px){
    .h2-Technology{
      color:green;
    }
  }
  
`;

export default CardBox;
