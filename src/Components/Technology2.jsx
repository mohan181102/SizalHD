import React from "react";
import styled from "styled-components";

const Technology2 = () => {
  return (
    <Container>
      <div className="row">
        {[
          {
            src: "https://www.kyroslenses.com/wp-content/uploads/TECHNOLOGY/1.png",
            description:
              "cjcjccsjcscjscscjccscscwccscjscksckscnsccjscscsccccccscscsscnscsccscsccsjcsj",
          },
          {
            src: "https://www.kyroslenses.com/wp-content/uploads/TECHNOLOGY/2.png",
            description:
              "cjcjccsjcscjscscjccscscwccscjscksckscnsccjscscsccccccscscsscnscsccscsccsjcsjcsj",
          },
          {
            src: "https://www.kyroslenses.com/wp-content/uploads/TECHNOLOGY/3.png",
            description:
              "cjcjccsjcscjscscjccscscwccscjscksckscnsccjscscsccccccscscsscnscsccscsccsjcsjcsj",
          },
          {
            src: "https://www.kyroslenses.com/wp-content/uploads/TECHNOLOGY/1.png",
            description:
              "cjcjccsjcscjscscjccscscwccscjscksckscnsccjscscsccccccscscsscnscsccscsccsjcsj",
          },
          {
            src: "https://www.kyroslenses.com/wp-content/uploads/TECHNOLOGY/2.png",
            description:
              "cjcjccsjcscjscscjccscscwccscjscksckscnsccjscscsccccccscscsscnscsccscsccsjcsjcsj",
          },
          {
            src: "https://www.kyroslenses.com/wp-content/uploads/TECHNOLOGY/3.png",
            description:
              "cjcjccsjcscjscscjccscscwccscjscksckscnsccjscscsccccccscscsscnscsccscsccsjcsjcsj",
          },
        ].map((item, index) => {
          return (
            <div
              className="col-lg-4 col-md-4 col-sm-6 col-xs-12 card"
              key={index}
            >
              <img src={item.src} alt={index} />
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

const Container = styled.section`
    padding: 2rem 4rem;

`;

export default Technology2;
