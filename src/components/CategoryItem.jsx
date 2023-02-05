import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 70vh;
  background-color: red;
  flex: 1;
  margin: 10px;
  position: relative;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  
  ${mobile({
  })}
`;
const Info = styled.div`
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  color: white;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-family: JetBrain Mono;
  margin: 40px;
`;
const Button = styled.button`
  border: 2px solid white;
  background-color: transparent;
  font-size: 20px;
  color: white;
  font-weight: 800;
  letter-spacing: 3px;
  padding: 10px 10px;
  border-radius: 50px;
  cursor: pointer;
  font-family: JetBrain;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title} </Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
