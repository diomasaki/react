import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined, Search } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60px;
  color: white;
  background-color: #2e2e2e;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  ${mobile({ flex: "2", justifyContent: "center " })}
`;

const SearchContainer = styled.div`
  border: 1px solid white;
  margin-left: 25px;
  display: flex;
  align-items: center;
  padding: 5px;

  ${mobile({ padding: "0px", marginLeft:"20px" })}
`;
const Language = styled.div`
  ${mobile({ display: "none" })}
`;
const Input = styled.input`
  border: none;
  background-color: transparent;

  ${mobile({ width: "40px" })}
`;

const Logo = styled.h1`
  font-family: JetBrain Mono;
  ${mobile({ fontSize: "22px", marginLeft:"10px" })}
`;

const MenuItem = styled.div`
  margin-left: 25px;
  font-family: Hack;
  cursor: pointer;

  ${mobile({ fontSize: "12px", marginLeft: "5px" })}
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>ID</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>BALLFlex.</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>LOGIN</MenuItem>
          <MenuItem>
            <Badge badgeContent={2} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
