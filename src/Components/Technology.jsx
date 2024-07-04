import React from "react";
import styled from "styled-components";

const Technology = () => {
  return (
    <Container>
      <h1>Technology</h1>
      <hr />
      <div class="card-container">
        <div class="card">
          <div class="card-front">
            <img src="https://plus.unsplash.com/premium_photo-1661391461258-a43fffadcdfd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA5fHxnbGFzc2VzJTIwc2hvcHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
          </div>
          <div class="card-back">
            <h2>FreeForm Digital</h2>
            <p>Sizal HD uses the new generation Advanced Digital Freeform Progressive Lenses Technology through computer- aided design and surfacing to create high-level, customised eyeglass lenses for every unique prescription. Lenses made with freeform digital technology enable enhanced vision sharpness</p>
          </div>
        </div>
        <div class="card">
          <div class="card-front">
            <img src="https://plus.unsplash.com/premium_photo-1661376928974-f62c228488df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE3fHxnbGFzc2VzJTIwc2hvcHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
          </div>
          <div class="card-back">
            <h2>Uniform Binocular</h2>
            <p>This new age technology enables the wearer to use both eyes together to produce unified image. It allows for comparison of information abserved with each eye, judging distances more accurately, and co-ordinate eye movements for obtaining more accurate vision.</p>
          </div>
        </div>
        <div class="card">
          <div class="card-front">
            <img src="https://media.istockphoto.com/id/1140521075/photo/tuning-the-intrument-little-boy-with-phoropter-having-testing-his-eyes-in-the-doctors-office.jpg?s=2048x2048&w=is&k=20&c=nG4rwyUkEdTQjRxJAP-pITU14kU6vuwm6oerfDQue6Q=" alt="" />
          </div>
          <div class="card-back">
            <h2>4K</h2>
            <p>The advanced 4K technology allows wearers to view any object in all directions of gaze. It also provides reflective crystal clear vision in any dimension.</p>
          </div>
        </div>
        <div class="card">
          <div class="card-front">
            <img src="https://img.freepik.com/free-photo/female-doctor-wearing-protective-glasses-clinic_107420-65258.jpg?t=st=1716619229~exp=1716622829~hmac=5eb6291d230f263fad75731afaedb459a52b02fd465b3477c7b14e1efb88ff6c&w=996" alt="" />
          </div>
          <div class="card-back">
            <h2>WaveFront</h2>
            <p>The advanced Wavefront Technology allows reduction of unwanted high level of aberrations and distortion from lenses and enables creation of more versatile lenses</p>
          </div>
        </div>
        <div class="card">
          <div class="card-front">
            <img src="https://img.freepik.com/free-photo/woman-with-beret-turtleneck-sweater_273609-4304.jpg?t=st=1716619394~exp=1716622994~hmac=46cf2e77b47eddeadcbb8a98f581ed453c15f27e89a9ced374dd5f2c3247ee97&w=996" alt="" />
          </div>
          <div class="card-back">
            <h2>See Clear</h2>
            <p>SeeClear is a breakthrough latest technology that finally provides an effective solution to the age old problem of astigmatism or blurriness. Innovative optimisation of this technology enables significant reduction of unwanted astigmatism</p>
          </div>
        </div>
        <div class="card">
          <div class="card-front">
            <img src="https://img.freepik.com/free-photo/handsome-man-with-glasses_144627-18651.jpg?t=st=1716619483~exp=1716623083~hmac=0ff8f91583ed1008729c79959fe823160752afab0b900861281fcf053b9beedd&w=996" alt="" />
          </div>
          <div class="card-back">
            <h2>Ultra Thin</h2>
            <p>The advanced Wavefront Technology allows reduction of unwanted high level of aberrations and distortion from lenses and enables the creation of more versatile lenses.</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.section`
  padding: 2rem 8rem;
  .card-container {
    perspective: 1000px; /* Provides depth to the flip effect */
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    justify-content: center;
  }

  .card {
    width: 350px;
    height: 220px;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.6s;
  }

  .card:hover {
    transform: rotateY(180deg); /* Triggers the flip effect on hover */
  }

  .card-front,
  .card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden; /* Hides the back side when not visible */
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: #fff;
  }

  .card-back {
    flex-direction:column;
    transform: rotateY(180deg); /* Rotates the back side to hide it initially */
  }

  .card-front h2,
  .card-back h2 {
    margin-bottom:1rem;
    font-size: 1.4rem;
    color: brown;
  }

  .card-front{
    overflow: hidden;
  }

  .card-front p,
  .card-back p {
    font-size: 0.7rem;
    padding: 0 0.7rem;
    letter-spacing: 1px;
    text-align: center;
  }
  img{
    width: 100%;
    height: auto;
  }
  h1{
    font-weight: 300;
    color: brown;
    text-align: center;
  }
  @media(max-width:768px){
    padding: 2rem 4rem;
    .card{
      width: 100%;
    }
  }
`;
export default Technology;
