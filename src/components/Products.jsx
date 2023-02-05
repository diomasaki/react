import { FavoriteBorderOutlined, Search } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 380px;
  width: 400px;
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex: 1;
`;

const Circle = styled.div`
  width: 280px;
  height: 280px;
  background-color: white;
  border-radius: 50%;
  position: absolute;
  z-index: 1;
`;

const Image = styled.img`
  height: 60%;
  z-index: 2;

  ${mobile({ height: "190px" })}
`;

const Info = styled.div`
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  position: absolute;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Icon = styled.div`
  width: 60px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;

  &:hover {
    transform: scale(1.2);
  }
`;

const Products = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <Search />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default Products;
