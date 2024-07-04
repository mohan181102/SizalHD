import React from "react";
import styled from "styled-components";

const PhotoComponent = () => {
  return (
    <Container>
      <img
        src="https://sizalhdlenses.com/wp-content/uploads/SIZAL-HD/1.png"
        alt=""
      />
    </Container>
  );
};
const Container = styled.section`
  width: 100%;
  height: auto;
  text-align: center;
  img {
    width: 100%;
    height: auto;
  }
`;

export default PhotoComponent;
