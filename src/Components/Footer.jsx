import React from "react";
import styled from "styled-components";
import { FaFacebookSquare,FaInstagramSquare,FaPinterestSquare } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { IoMdMail } from "react-icons/io";
const Footer = () => {
  return (
    <Container>
      <div className="col-md-4">
        <h5>LET'S CONNECT WITH US</h5>
        <div className="flexrowicon">
            <a href="https://m.facebook.com/SIZALHDLENSES/?_rdr"><FaFacebookSquare /></a>
            <a href="mailto:sizalhdlens@gmail.com"><IoMdMail /></a>
            <a href="https://www.instagram.com/sizal_hd_lenses/?utm_source=qr"><FaInstagramSquare /></a>
            <a href="http://m.me/101091731307005"><FaFacebookMessenger /></a>
            <a href=""><FaPinterestSquare /></a>
        </div>
        <p>
            CONNECT WITH US
            <br />
            72181 92616
            <br />
            sizalhd@gmail.com
            <br />
            All e-mails will be answered within 24 hours
            </p>
      </div>
      <div className="col-md-4">
        <h5>I AM IN EYE CARE BUSINESS</h5>
        <ul>
            <li><a href="">-Want to partner your Business</a></li>
            <li><a href="">-like to be Contacted</a></li>
            <li><a href="">-interested in recieving product information</a></li>
        </ul>
      </div>
      <div className="col-md-2">
            <h5>CONTACT US</h5>
            <ul>
            <li><NavLink to="/contact-us">About Us</NavLink></li>
            <li><a href="">Privacy & Policy</a></li>
            <li><a href="">Terms & Condition</a></li>
        </ul>
      </div>
      <div className="col-md-2 play">
        <img src="https://sizalhdlenses.com/wp-content/uploads/2022image/glogo.png" className="image" alt="" />
        <p>Download Sizal HD Lenses App to buy Lenses</p>
      </div>
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  height: auto;
  min-height: 300px;
  background-color: #494949;
  padding: 4% 2.7%;
  color: white;
  display: flex;
  a{
    text-decoration: none;
    font-size: 1rem;
    color: #aca9a9;
  }
  .flexrowicon{
    display: flex;
    gap:10px;
    a{
      color:#fff;
      font-size:1.3rem;
    }
  }
  h5{
    margin-bottom: 2rem;
    font-size: 1.3rem;
  }
  p{
    font-size: 1rem;
    color: #aca9a9;
  }
  li{
    margin-bottom: 1.3rem;
    
  }
  ul{
    padding-left: 0;
  }
  .image{
    width: 50%;
    height: auto;
  }
  .play{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media(max-width:768px){
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.2rem;
    .col-md-4{
      justify-content: center;
      align-items: center;
      text-align: center;
      .flexrowicon{
        justify-content: center;
        a{font-size: 1.5rem;}
      }
    }
    .col-md-2{
      justify-content: center;
      align-items: center;
      text-align: center;
      .image{
        width: 30%;
      }
    }
  }
`;

export default Footer;
