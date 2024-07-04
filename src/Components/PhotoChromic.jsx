import React from "react";
import styled from "styled-components";
import "./PhotoChromic.css";

const PhotoChromic = () => {
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
      <h2 className={`photo-chromic-h2`}>Photo Chromin Lense</h2>
      <h2 className={`h2-photo-chromic sm:text-[25px]`}>
        Photo Chromic Lenses
      </h2>
      <p className={`p-photo-chromic text-["Poppins"] sm:text-[15px]`}>
        Photochromic lenses are just like normal lenses but they automatically
        become dark when we move in the sunlight. Ultraviolet rays coming from
        the sun affect the molecules present in the photochromic lenses
        therefore, these lenses change their colors. These lenses get darker in
        bright lights and vice-versa. These lenses, therefore, provide the best
        vision in all lighting conditions. Transition is the best and very
        well-known brand of photochromic lenses therefore, these lenses are also
        known as “transition lenses”. The other names also which have been given
        to these lenses are:
      </p>
      <div className={`div-for-photochromic-li`}>
        <ul className={`ul-photo-chromic`}>
          <li className={`li-photo-chromic`}>Adaptive Lens</li>
          <li className={`li-photo-chromic`}>Auto tinted lens</li>
          <li className={`li-photo-chromic`}>Variable Tint lens</li>
        </ul>
        <img
          src="https://eyemantra.in/wp-content/uploads/2020/09/image-55.png.webp"
          alt=""
          className={`img-photo-chromic sm:w-[300px]`}
        />
      </div>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
   
  .h2-photo-chromic {
    font-weight: 300;
    background-color:white;
    width: 100%;
    height: auto;
    font-weight: 500;
    font-size: 1.7rem;
    color: brown;
    margin-bottom:0px;
    padding-bottom:24px;
  }

  .ul-photo-chromic{
    width:40%;
  }
  .p-photo-chromic {
    background-color:white;
    font-size: 16px;
    padding-bottom:20px;
    margin-bottom:0px;
    padding-left:2rem;
    padding-right:2rem;
    font-family:"Poppins";
  }

  .img-photo-chromic{
    
    width:40%;
    margin-bottom:20px;
    background-color:white;
    height:auto;
    background-position:center;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
 
 

  .li-photo-chromic{
    font-size:17px;
     background-color:white;
    font-family:serif;
    list-style-type:dot;
    line-height:2rem;
    width:auto;
   }

  .div-for-photochromic-li {
    background-color:white;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: start;
    width:100%;
    
  }

  @media (max-width:650px){
    .div-for-photochromic-li {
        background-color:white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width:100%;
        height:auto;
        gap:20px;
    }

    .img-photo-chromic{
      width:250px;
      border-radius:0.3rem;
      box-shadow: 0px 0px 6px 5px #1a6b68;
      margin-bottom:20px;
    }
  }

  .
`;
export default PhotoChromic;
