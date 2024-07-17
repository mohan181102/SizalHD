import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./NavBar.css";
import Scrollprogress from "./Scrollprogress";
import { FaFontAwesome } from "react-icons/fa";
import { IoIosArrowDropdown } from "react-icons/io";
import { IoIosArrowDropleft } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  let lastScroll = window.pageYOffset;
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  window.addEventListener("scroll", (e) => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (lastScroll < scrollTop) {
      const id = document.getElementById("row");
      id.style.top = "-90px";
    } else {
      const id = document.getElementById("row");
      id.style.top = "0px";
    }
    lastScroll = scrollTop;
  });

  return (
    <Container
      className="row sm:flex sm:items-center sm:m-0 sm:justify-between"
      id="row"
    >
      <div className="col-md-2 logo  sm:w-auto sm:m-0  flex items-center  justify-center">
        <img
          onClick={() => navigate("/")}
          src="/src/assets/logo-removebg-preview.png"
          className={`img-logo sm:m-0  sm:w-[100px]`}
          alt=""
        />
      </div>
      <button
        className="navbar-toggler sm:w-[60px] lg:flex lg:border sm:absolute lg:h-full"
        onClick={toggleNavbar}
      >
        {isOpen ? (
          <span className="navbar-exit lg:h-full sm:w-[60px]">&#x2715;</span>
        ) : (
          <span className="navbar-hamburger sm:w-[60px]">&#9776;</span>
        )}
      </button>
      <div className="col-md-10 div2 sm:w-auto sm:m-0 sm:p-0 sm:flex sm:items-center sm:justify-center">
        <ul
          className={`navbar ${
            isOpen
              ? "show sm:absolute sm:top-[65px] sm:flex sm:items-end sm:flex-col sm:justify-end sm:h-[100vh]  sm:w-full sm:m-0 sm:p-0"
              : ""
          }`}
        >
          <div
            className={`navlist ${
              location.pathname == "/" ? "active-route" : ""
            } change-bgcolor`}
          >
            <NavLink to="/" onClick={toggleNavbar}>
              Home
            </NavLink>
          </div>
          <div
            className={`navlist  ${
              location.pathname == "/sizalhd" ? "active-route" : ""
            }`}
          >
            <NavLink to="/sizalhd" onClick={toggleNavbar}>
              Sizal HD
            </NavLink>
          </div>

          <div className="navlist">
            <p
              className={`w-auto h-auto text-[white] flex items-center justify-center gap-2 sm:hover:bg-transparent`}
            >
              Lenses
              <IoIosArrowDropdown />
            </p>
            <ul className="dropdown-content">
              <li>
                <NavLink
                  className={`navlink lg:w-fit`}
                  onClick={toggleNavbar}
                  to="/bifocal"
                >
                  Bifocal
                </NavLink>
              </li>
              <li className="dropdown-content-left">
                <a
                  className={`w-auto h-[30px] text-[black] gap-2 flex items-center justify-center sm:h-[30px]`}
                >
                  Progressive
                  <IoIosArrowDropleft />
                </a>
                <ul>
                  <li>
                    <NavLink
                      onClick={toggleNavbar}
                      className={`navlink   `}
                      to="/digital-progressive"
                    >
                      Digital
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={toggleNavbar}
                      className={`navlink  `}
                      to="/freeform-progressive"
                    >
                      FreeFrom
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink
                  onClick={toggleNavbar}
                  className={`navlink  `}
                  to="/single-vision"
                >
                  Single Vision
                </NavLink>
              </li>
            </ul>
          </div>
          <div className={`navlist  `}>
            <p
              className={`w-auto h-auto text-[white] flex items-center justify-center gap-2`}
            >
              {" "}
              Coatings <IoIosArrowDropdown />
            </p>
            <ul className="dropdown-content">
              <li>
                <NavLink
                  onClick={toggleNavbar}
                  className={`navlink  `}
                  to="/steel-coat"
                >
                  Steel Coat
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={toggleNavbar}
                  className={`navlink  `}
                  to="/platinum-green"
                >
                  Platinum Green
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={toggleNavbar}
                  className={`navlink  `}
                  to="/platinum-blue"
                >
                  Platinum Blue
                </NavLink>
              </li>
            </ul>
          </div>
          <li className="navlist">
            <p
              className={`w-auto h-full text-[white] flex items-center justify-center gap-2 `}
            >
              Materials
              <IoIosArrowDropdown />
            </p>
            <ul className="dropdown-content">
              <li>
                <NavLink
                  onClick={toggleNavbar}
                  className={`navlink `}
                  to="/photo-chromatic"
                >
                  Photo Sun Lenses
                </NavLink>
              </li>
              <li className={``}>
                <NavLink
                  onClick={toggleNavbar}
                  className={`navlink  `}
                  to="/blue-block"
                >
                  Blue Block Lenses
                </NavLink>
              </li>
            </ul>
          </li>
          <li
            className={`navlist change-bgcolor ${
              location.pathname == "/contact-us" ? "active-route" : ""
            }`}
          >
            <NavLink
              onClick={toggleNavbar}
              className={`navlink ${
                location.pathname == "/contact-us" ? "active-route" : ""
              }`}
              to="/contact-us"
            >
              Contact US
            </NavLink>
          </li>
          {/* <li
            className={`navlist ${
              location.pathname == "#" ? "active-route" : ""
            }`}
          >
            Order Now
          </li> */}
        </ul>
      </div>
      <Scrollprogress />
    </Container>
  );
};
// #1A6B68
const Container = styled.section`
  position: sticky;
  opacity: 1;
  transition: all 200ms;
  top: 0%;
  overflow: visible;
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);
  padding: 0 0;
  background-color: #1a6b68;
  z-index: 10000;

  .img-logo {
    height: 50px;
    margin-left: 10px;
    width: auto;
    padding: 0px;
    border-radius: 0.3rem;
    background-position: center;
    margin-bottom: 10px;
    margin-top: 10px;
    background-color: white;
  }

  img {
    width: 100%;
    background-color: #1a6b68;
  }

  .navbar {
    background-color: #1a6b68;
    display: flex;
    flex-direction: row;
    justify-content: right;

    align-items: end;
    gap: 1px;
    flex-wrap: wrap;
    margin-bottom: 0;
  }
  .div2 {
    display: flex;
    align-items: center;
    justify-content: right;
    background-color: #1a6b68;
  }
  .navlist {
    font-family: "Poppins";
    padding: 0.3rem 1rem;
    color: #fff;
    margin-right: 10px;
    font-size: 1.2rem;
    background-color: #1a6b68;
    a {
      font-family: "Poppins";
      color: #fff;
      font-size: 1rem;
      width: 100%;
      text-decoration: none;
      padding-left: 0px;
      padding-right: 0px;
      // background-color: #1a6b68;
    }

    p {
      font-family: "Poppins";
      font-size: 15px;
      padding: 0.2rem;
    }
  }

  .navlist:hover {
    color: #fff;
    cursor: default;

    .dropdown-content {
      display: block;
      width: fit-content;
      padding-top: 21px;

      margin-left: -1rem;
      background-color: transparent;
      z-index: 1000;
      li {
        padding: 0.6rem 1.2rem;
        background-color: #f3f3f3;
        font-size: 1rem;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        border-bottom: 1px solid rgba(0, 0, 0, 0.16);
      }
      .dropdown-content-left {
        ul {
          display: none;
        }
      }
      .dropdown-content-left:hover {
        ul {
          display: block;
          position: absolute;

          left: calc(-90% + 25px);
          top: 31%;
          background-color: #f2f2f2;
          padding-left: 0;
        }
        li {
          border-bottom: 1px solid rgba(0, 0, 0, 0.16);
        }
      }
    }
  }

  .dropdown-content {
    display: none;
    position: absolute;

    z-index: 1000;
    a {
      padding: 12px;
      color: #000;
      font-weight: 500;
      font-size: 1rem;
      text-decoration: none;
    }
    li:hover {
      background-color: #e7e7fa;
    }
  }
  .link {
    color: #000;
    padding: 12px;
    color: #000;
    font-size: 14px;
    text-decoration: none;
  }

  .navbar-toggler {
    background: none;
    border: none;
    color: white;
    font-size: 1.5em;
    cursor: pointer;
    display: none; /* Hidden by default */
  }

  .navlist:hover {
    background-color: white;
    color: #1a6b68;
    border-radius: 5px;
    transition: all 200ms;
    a {
      color: #1a6b68;
      transition: all 200ms;
      margin: 0px;
    }

    p {
      color: #1a6b68;

      transition: all 200ms;
    }

    .dropdown-content-left:hover {
      ul {
        display: block;
        position: absolute;

        left: calc(-50% + 25px);
        top: 31%;
        background-color: #f2f2f2;
        padding-left: 0;
      }
      li {
        border-bottom: 1px solid rgba(0, 0, 0, 0.16);
      }
    }
  }

  .active-route {
    background-color: white;
    color: #1a6b68;
    border-radius: 5px;
    transition: all 200ms;
    a {
      color: #1a6b68;
      transition: all 200ms;
    }
    p {
      color: #1a6b68;
      transition: all 200ms;
    }
  }

  @media (max-width: 650px) {
    width: 100vw;

    .navbar {
      display: none; /* Hide the links initially */
      flex-direction: column;
      width: 100%;

      aling-items: end;
      text-align: center;
    }

    .navbar.show {
      display: flex; /* Show the links when toggled */

      aling-items: end;

      top: 57px;
    }

    .img-logo {
      width: 90px;
      height: auto;
    }

    .navbar-toggler {
      display: block;
      right: 0px;
      // border: 1px solid red;
      width: 60px;
      height: 100%;
      font-size: 2.3rem;

      margin: 0px;
    }

    ul {
      margin: 0px;
      padding: 0px;
      padding-top: 20px;
    }

    .navlist {
      width: fit-content;
      text-aling: right;
      display: flex;
      margin-right: 0px;
      flex-direction: column;
      aling-items: end;
      margin-bottom: 20px;
      justify-content: start;
    }

    .navlist:hover {
      background-color: #1a6b68;
      padding: 0px;
      color: white;
      border-radius: 5px;
      transition: all 200ms;
      a {
        // color: #1a6b68;
        transition: all 200ms;
        margin: 0px;
      }

      .dropdown-content {
        width: 100%;
        position: relative;
        left: 0px;
        background-color: transparent;
        padding: 0px;
        a {
          padding: 0px;
          width: 100%;
          padding-left: 10px;
          text-align: right;
          padding-right: 10px;
          padding-bottom: 4px;
          border-bottom: 1.7px solid white;
          color: white;
        }

        li {
          background-color: #158c887d;
          box-shadow: none;
          border: none;
          display: flex;
          align-item: center;
          justify-content: right;
        }

        .dropdown-content-left:hover {
          ul {
            display: block;
            position: absolute;

            left: calc(-100% + 25px);
            top: 31%;
            background-color: #158c887d;
            padding-left: 0;
            padding-top: 0px;
          }
          li {
            border-bottom: 1px solid rgba(0, 0, 0, 0.16);
          }
        }
      }

      p {
        color: white;
        transition: all 200ms;
      }
    }

    .navlist:hover .dropdown-content {
      padding: 0px;
    }

    .navbar.show {
      display: flex; /* Show the links when toggled */
      aling-items: end;
      top: 59px;
    }
  }

  // FOR TABLET

  @media (max-width: 1024px) and (min-width: 650px) {
    width: 100vw;

    margin: 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: auto;

    .navbar {
      display: none; /* Hide the links initially */
      flex-direction: column;
      transition: all 200ms;
      top: 0px;

      margin-top: 0px;
      width: 100%;
      aling-items: end;
      text-align: center;
    }

    .navbar.show {
      display: flex; /* Show the links when toggled */
      aling-items: end;
      top: 57px;
    }

    .img-logo {
      width: 90px;
      height: auto;
    }

    .navbar-toggler {
      display: flex;
      right: 0px;
      aling-items: center;
      justify-content: center;

      width: 60px;
      height: 100%;
      font-size: 2.3rem;

      margin: 0px;
    }

    ul {
      margin: 0px;
      padding: 0px;
      padding-top: 20px;
    }

    .navlist {
      width: fit-content;
      text-aling: right;
      display: flex;
      margin-right: 0px;
      flex-direction: column;
      aling-items: end;
      margin-bottom: 20px;
      justify-content: start;
    }

    .dropdown-content {
      width: 100%;
      position: relative;
      left: 0px;

      padding: 0px;
      a {
        padding: 0px;
      }
    }

    .navlist:hover {
      background-color: #1a6b68;
      color: white;
      border-radius: 5px;
      transition: all 200ms;
      a {
        color: #1a6b68;
        transition: all 200ms;
        margin: 0px;
      }

      p {
        color: white;
        transition: all 200ms;
      }
    }

    .navlist:hover .dropdown-content {
      padding: 0px;
    }

    width: 100vw;

    .navbar {
      display: none; /* Hide the links initially */
      flex-direction: column;
      width: 100%;
      aling-items: end;
      text-align: center;
    }

    .navbar.show {
      display: flex; /* Show the links when toggled */

      aling-items: end;

      top: 0px;
    }

    .img-logo {
      width: 90px;
      height: auto;
    }

    .navbar-toggler {
      display: block;
      right: 0px;

      // border: 1px solid red;
      width: 60px;
      height: 100%;
      font-size: 2.3rem;
      margin: 0px;
    }

    ul {
      margin: 0px;
      padding: 0px;
      padding-top: 20px;
    }

    .navlist {
      width: fit-content;

      text-aling: right;
      display: flex;
      margin-right: 0px;
      flex-direction: column;
      aling-items: end;
      margin-bottom: 20px;
      justify-content: start;
    }

    .dropdown-content {
      width: fit-content;
      position: relative;
      left: 0px;
      border: 1px solid red;
      padding: 0px;
      a {
        padding: 0px;
      }
    }

    .navlist:hover {
      background-color: #1a6b68;
      color: white;
      border-radius: 5px;
      transition: all 200ms;
      a {
        color: #1a6b68;
        transition: all 200ms;
        margin: 0px;
      }

      p {
        color: white;
        transition: all 200ms;
      }
    }

    .navlist:hover .dropdown-content {
      padding: 0px;
    }

    .col-md-10 {
      width: 100%;
      height: 100%;
      padding-top: 0px;
    }

    .navlist:hover {
      .dropdown-content {
        width: 100%;
        border: none;
      }
    }

    .dropdown-content-left:hover {
      ul {
        display: block;

        left: -20px;

        top: 0px;
        background-color: #f2f2f2;
        padding-top: 0px;
      }
      li {
        border-bottom: 1px solid rgba(0, 0, 0, 0.16);
      }
    }

    .navlist {
      width: fit-content;
      text-aling: right;
      display: flex;
      margin-right: 0px;
      flex-direction: column;
      aling-items: end;
      margin-bottom: 20px;
      justify-content: start;
    }

    .navlist:hover {
      background-color: #1a6b68;
      padding: 0px;
      color: white;
      border-radius: 5px;
      transition: all 200ms;
      a {
        // color: #1a6b68;
        transition: all 200ms;
        margin: 0px;
      }

      .dropdown-content {
        width: 100%;
        position: relative;
        left: 0px;
        background-color: transparent;
        padding: 0px;
        a {
          padding: 0px;
          width: 100%;
          padding-left: 10px;
          text-align: right;
          padding-right: 10px;
          padding-bottom: 4px;
          border-bottom: 1.7px solid white;
          color: white;
        }

        li {
          background-color: #158c887d;
          box-shadow: none;
          border: none;
          display: flex;
          align-item: center;
          justify-content: right;
        }
      }

      p {
        color: white;
        transition: all 200ms;
      }
    }
  }
`;

export default Navbar;
