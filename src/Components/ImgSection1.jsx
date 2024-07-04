import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import "./Imgsection.css";

const ImgSection1 = () => {
  return (
    <Container>
      <div className="col-md-6 contain">
        <div className="col-md-6 image">
          <img
            className={`img-contain`}
            src="https://www.zigya.com/blog/wp-content/uploads/Photo-chromotaic-Banner-1280x720.jpg"
            alt=""
          />
        </div>
        <div className="col-md-6 content">
          <h3 className={`content-h3`}>PHOTOSUN LENSES by PLATINUM SERIES</h3>
          <p className={`content-p`}>
            “Photosun Hyper Protection Lens ” have been specially developed by
            Sizal HD Lenses."
            <br />
            <br />
            <b>Photosun lenses</b> Photosun lenses helps to protect your eyes
            from Sunlight. Its sensitive colour-changing molecules instantly
            detect ultraviolet light. Perfect clear indoors, they are designed
            to quickly change into a darker shade in the sun and outdoors
          </p>
          <NavLink to="/photo-chromatic">
            <button className="btn btn-success">Read more</button>
          </NavLink>
        </div>
      </div>
      <div className="col-md-6 contain">
        <div className="col-md-6 image">
          <img
            className={`img-contain`}
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhMVFhUVFRUVFRUVFRgVFRUVFRUXFhUVFxYYHiggGB0lHRUVIjEhJSktLi4uFx8zODMsNygtLisBCgoKDg0OGxAQGislHyYtLS0vLS0tLS0rMS4tLS0rLS0tLS0tLTArLS0tLTUtLSstLS0tKystLS0tLS0tLTYtK//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQIDBAUGBwj/xABGEAABAwEDBgoGCAQGAwAAAAABAAIDEQQFIRIxQVFhcQYHExcyVIGSk+EiQlORofAVI1JygrHB0RRisvEkM0OiwtI0Y4P/xAAbAQEAAgMBAQAAAAAAAAAAAAAAAQIDBAUGB//EAC8RAQACAgECBAQFBAMAAAAAAAABAgMRBBIhBTFBUSJhcaETFDJSkcHR4fBCgbH/2gAMAwEAAhEDEQA/APcULlucW6evQd7yRzi3T16DveSDqULlucW6evQd7yRzi3T16DveSDqULlucW6evQd7yRzi3T16DveSDqULlucW6evQd7yRzi3T16DveSDqULlucW6evQd7yRzi3T16DveSDqULlucW6evQd7yRzi3T16DveSDqULlucW6evQd7yRzi3T16DveSDqULlucW6evQd7yRzjXT16DveSDqULluca6evQd7yRzjXT16DveSDqULluca6evQd7yRzjXT16DveSDqULluca6evQd7yRzjXT16DveSDqULluca6evQd7yRzjXT16DveSDqULluca6evQd7yRzjXT16DveSDqULluca6evQd7yRzjXT16DveSDqULluca6evQd7yQg+UHZzvKAUxxxO9FVIfVNJSVSVQIUUQhAUQlRRAlEUTqJMlA0hJRPokQMokUmSmlqBiE6iSigNQlokQCEIQCEIQCEIQCVIhAIQhAtUJEIJXHE70Aprs53lAKB9UJoTgpCpU0J4QATslK0KRrVIjyUuSpg1OyEFbJSZCsiJOESaFTISFiutiSmFNDPyE0tWgYEwwpoUMhGQtGKxPf0GOd9xpd/SFY+gbT1a0eBJ/1TpkYpakyVpTXfIzpxyM+8xzfzCrhm5RoVclGSrQirmFdynZd0h9Q9uH5poZ+SjJWu25j6z2D4qVlggb0nF3bh8E0MKikjgc7ogn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"
            alt=""
          />
        </div>
        <div className="col-md-6 content">
          <h3 className={`content-h3`}>BLUEBLOCK LENSES by PLATINUM</h3>
          <p className={`content-p`}>
            New stylish BLUEBLOCK lenses that helps to block, blue light with
            wavelengths between 380 nm and 500 nm, that can scatter easily
            causing detrimental damage to the eye. <br /> <br />
            <b>Photosun lenses</b> Photosun lenses helps to protect your eyes
            from Sunlight. Its sensitive colour-changing molecules instantly
            detect ultraviolet light. Perfect clear indoors, they are designed
            to quickly change into a darker shade in the sun and outdoors
          </p>
          <button className="btn btn-success">
            <NavLink to="/blue-block" className={"link"}>
              Read more
            </NavLink>
          </button>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  padding: 3rem 4rem;
  height: 450px;
  gap: 2rem;
  .contain {
    border: 1px solid rgba(0, 0, 0, 0.16);
    display: flex;
    height: 100%;
    border-radius: 5px;
    padding: 12px;
    justify-content: space-around;
  }

  .content {
    padding: 12px;
    h4 {
      margin-bottom: 1rem;
      color: #000;
    }
  }

  .content-h3 {
    font-size: 1.7rem;
  }

  .content-p {
    height: 40%;
    font-size: 1rem;
  }

  .contain:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    transition: 200ms;
  }
  .link {
    color: #fff;
    text-decoration: none;
  }
  @media (max-width: 650px) {
    flex-direction: column;
    padding: 2rem 2rem;
    height: auto;
    .contain {
      height: auto;
      flex-direction: column;
    }

    .content-h3 {
      font-size: 1.4rem;
      padding-bottom: 15px;
    }

    .content-p {
      height: 200px;
      font-size: 15px;
      margin-bottom: 10px;
    }

    .content-p::-webkit-scrollbar {
      width: 5px;
      background-color: #f3f3f3;
      display: block;
    }
  }

  @media (max-width: 1024px) (min-width:650px) {
    flex-direction: row;
    padding: 2rem 2rem;
    height: auto;
    .contain {
      height: auto;
      flex-direction: column;
    }

    .content {
      width: 100%;
    }

    .content-h3 {
      font-size: 1.4rem;
      width: 100%;
      padding-bottom: 15px;
    }

    .content-p {
      height: 200px;
      font-size: 15px;
      padding-left:10px;
      padding-right:20px;
      margin-bottom: 20px;
    }

    .image {
      width: 100%;
      height: 250px;
      display:flex;
      aling-items:start;
      justify-content:center;
      overflow: hidden;
      di
    }

    .content-p::-webkit-scrollbar {
      width: 5px;
      background-color: #f3f3f3;
      display: block;
    }
  }
`;

export default ImgSection1;
