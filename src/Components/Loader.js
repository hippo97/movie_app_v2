import React from "react";
import styled, { keyframes } from "styled-components";

const scale = keyframes`
  0%{
    transform:scaleY(1);
  }
  25%{
    transform:scaleY(1.5);
  }
  50%{
    transform:scaleY(1);
  }
  100%{
  }
`;

const Bar = styled.div`
  background-color:darkturquoise;
  border: 2px solid darkturquoise;
  margin:0 2px;
  width:5px;
  height:40px;
  animation: ${scale} 0.5s ease-in infinite;
  animation-delay: ${props => props.sec}s;
`;


const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items:center;
  font-size: 28px;
  margin-top: 20px; 
`;

export default () => (
  <Container>
    <Bar sec={0.1} />
    <Bar sec={0.2} />
    <Bar sec={0.3} />
    <Bar sec={0.4} />
    <Bar sec={0.5} />
  </Container>
);
