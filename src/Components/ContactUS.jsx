import React from "react";
import styled from "styled-components";

const ContactUS = () => {
  return (
    <Container>
      <div
        className={`back-photochromic`}
        style={{
          backgroundImage: `url("/top-view-chat-bubbles-with-telephone-receiver-copy-space.jpg")`,
          backgroundPosition: "cover",
          objectFit: "cover",
        }}
      >
        <div className={`div-black`}></div>
      </div>
      <h2 className={`photo-chromic-h2 `}>Contact Us</h2>
      <div className={`div-for-address`}>
        <div className="col-md-6 map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7631.261656231085!2d73.29364900000002!3d16.9927!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bea0de15c33d3bf%3A0xb06ede549ad3afbe!2sShree%20Optical%20Ratnagiri!5e0!3m2!1sen!2sin!4v1716621701233!5m2!1sen!2sin"
            width={"100%"}
            height={"300"}
          ></iframe>
        </div>
        <div className="col-md-6 details shadow-md p-2 bg-[#1a6b68] text-white flex items-start justify-start flex-col font-serif">
          <h3 className={` text-2xl font-bold p-2 `}>HEAD OFFICE</h3>
          <hr className={` mb-2 `} />
          <p
            className={`mb-2 w-auto h-auto text-left flex items-start justify-start`}
          >
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#fff"
              width="100%"
              height="100%"
              className={` w-7 p-0 h-7 overflow-hidden mr-2`}
              viewBox="0 0 100 100"
            >
              <path d="M49,18.92A23.74,23.74,0,0,0,25.27,42.77c0,16.48,17,31.59,22.23,35.59a2.45,2.45,0,0,0,3.12,0c5.24-4.12,22.1-19.11,22.1-35.59A23.74,23.74,0,0,0,49,18.92Zm0,33.71a10,10,0,1,1,10-10A10,10,0,0,1,49,52.63Z" />
            </svg>
            Shree Optical Ratnagiri, Shop No 1&2 Shankheshwar Aarced Athawada
            Bazar , Ratnagiri -415612
          </p>

          <p
            className={`w-auto h-auto text-left flex items-center justify-start`}
          >
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              fill="#fff"
              className={`  w-4 h-4 overflow-hidden mr-2`}
              viewBox="0 0 32 32"
              id="phone"
            >
              <path d="M13.216 8.064c-.382-4.394-4.966-6.55-5.16-6.638a.974.974 0 0 0-.582-.078c-5.292.878-6.088 3.958-6.12 4.086a.99.99 0 0 0 .02.54c6.312 19.584 19.43 23.214 23.742 24.408.332.092.606.166.814.234a.99.99 0 0 0 .722-.042c.132-.06 3.248-1.528 4.01-6.316a.997.997 0 0 0-.096-.612c-.068-.132-1.698-3.234-6.218-4.33a.977.977 0 0 0-.884.21c-1.426 1.218-3.396 2.516-4.246 2.65-5.698-2.786-8.88-8.132-9-9.146-.07-.57 1.236-2.572 2.738-4.2a.998.998 0 0 0 .26-.766z" />
            </svg>
            72181 92616
          </p>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;

  h3 {
    color: brown;
  }

  p {
    font-size: 15px;
    display: flex;
    aling-items: center;
    font-family: "Poppins";
    justify-content: center;
  }

  .div-for-address {
    width: 100%;
    height: auto;
    background-color: white;
    display: flex;
    aling-items: center;
    gap: 20px;
    justify-content: center;
    padding: 2rem 2rem;
  }

  .details {
    width: 45%;
    padding: 2rem;
    display: flex;

    align-items: start;
    justify-content: start;
  }

  @media (max-width: 650px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;

    .div-for-address {
      flex-direction: column;
    }

    .details {
      width: 100%;
    }
  }
`;
export default ContactUS;
