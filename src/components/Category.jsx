import React from "react";
import styled from "styled-components";
import { catData } from "../data";
import { mobile, tablet } from "../responsive";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  display: flex;
  padding: 20px;

  ${mobile({
    padding: "0px",
    flexDirection: "column",
  })}

  ${tablet({
    padding: "0px",
    flexDirection: "column",
  })}
`;

const Category = () => {
  return (
    <Container>
      {catData.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Category;
