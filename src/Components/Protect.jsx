import React from "react";
import styled from "styled-components";

const Protect = () => {
  return (
    <Container>
      <h3 className={`protect-harmful`}>
        Protect against harmful blue light & UV Ray’s
      </h3>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: auto;
  padding: 1.3rem 2rem;
  border: 1px solid rgba(0, 0, 0, 0.16);
  .protect-harmful {
    text-align: center;
    font-size: 2rem;
    color: white;
    font-weight: 500;
    cursor: default;
    background-color: #1a6b68;
    width: 100%;
    padding-top: 20px;
    padding-bottom: 20px;
    height: 100%;
  }

  @media (max-width: 650px) {
    .protect-harmful {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 1024px) and (min-width: 650px) {
    .protect-harmful {
      font-size: 1.7rem;
    }
  }
`;
export default Protect;
