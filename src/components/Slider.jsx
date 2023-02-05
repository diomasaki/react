import React, { useState } from "react";
import styled from "styled-components";
import { ArrowLeft, ArrowRight } from "@material-ui/icons";
import { sliderData } from "../data";
import { mobile, tablet } from "../responsive";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  display: flex;
  overflow: hidden;

  ${mobile({ display: "none" })}
  ${tablet({ height: "80vh" })}
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: white;
  opacity: 0.5;
  border-radius: 50%;
  display: flex;
  top: 0;
  bottom: 0;
  align-items: center;
  justify-content: center;
  margin: auto;
  position: absolute;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  cursor: pointer;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  background-color: blue;
  transform: translateX(${(props) => props.sliderIndex * -100}vw);
  transition: all 1.5s ease;
`;

const Slide = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: whitesmoke;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 70px;
`;

const Title = styled.h1`
  font-size: 70px;
  font-family: JetBrain Mono;

  ${tablet({ fontSize: "40px" })}
`;

const Desc = styled.p`
  font-family: JetBrain Mono;
  letter-spacing: 3px;
  font-weight: 600;
  font-size: 20px;
  margin: 50px 5px;
`;

const Button = styled.button`
  background-color: transparent;
  padding: 10px 5px;
  cursor: pointer;
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 80%;

  ${tablet({ height: "800px", width: "500px", objectFit: "cover" })}
`;

const Slider = () => {
  const [sliderIndex, setSliderIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSliderIndex(sliderIndex > 0 ? sliderIndex - 1 : 2);
    } else {
      setSliderIndex(sliderIndex < 2 ? sliderIndex + 1 : 0);
    }
  };
  return (
    <Container>
      <Arrow direction="left">
        <ArrowLeft onClick={() => handleClick("left")} />
      </Arrow>
      <Wrapper sliderIndex={sliderIndex}>
        {sliderData.map((item) => (
          <Slide>
            <InfoContainer>
              <Title>{item.title} </Title>
              <Desc>{item.desc} </Desc>
              <Button>SHOP NOW</Button>
            </InfoContainer>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right">
        <ArrowRight onClick={() => handleClick("right")} />
      </Arrow>
    </Container>
  );
};

export default Slider;
