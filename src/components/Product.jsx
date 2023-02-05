import React from "react";
import styled from "styled-components";
import { productData } from "../data";
import { mobile, tablet } from "../responsive";
import Products from "./Products";

const Container = styled.div`
  display: flex;
  padding: 20px;
  flex-wrap: wrap;

  ${mobile({ padding: "0px" })}
  ${tablet({ padding: "0px" })}
`;

const Product = () => {
  return (
    <Container>
      {productData.map((item) => (
        <Products item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Product;
