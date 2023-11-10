import styled from "styled-components";
import Button from "./Button";
import { useState } from "react";

import recommendationList from "../assets/recommendationList";

const ResultMenu = (props) => {

  console.log(props);

  const stageOne=props.result[1];
  const stageTwo=props.result[2];
  const stageThree=props.result[3];

  console.log(stageOne,stageTwo,stageThree);
  const resultMenuInfo=recommendationList[stageOne][stageTwo][stageThree];

  const change = (nextstage) => {
    props.changeStage(nextstage);
  };

  return (
    <Wrapper>
      <MenuContainer>
       <img src={resultMenuInfo.img} alt={recommendationList.title}/>
       <div>{resultMenuInfo.title}</div>
      </MenuContainer>
      <ButtonContainer>
        <Button content="다시하기" onClick={() => change(0)}></Button>
      </ButtonContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
`;

const MenuContainer = styled.div`
  
  height: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  & > img{
    border-radius: 10px;
    width: auto;
    height: 15rem;
    object-fit: cover;
  }

  & > div{
    width: 10rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    font-weight: 700;
    background-color: #f2dcdc;
    border-radius: 50px;
  }
`;



const ButtonContainer = styled.div`
  display: flex;
  gap: 3rem;
  justify-content: center;
`;

export default ResultMenu;
