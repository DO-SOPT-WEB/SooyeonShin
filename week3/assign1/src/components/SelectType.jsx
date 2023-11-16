import { useState } from "react";
import styled from "styled-components";

import Button from "./Button";
/**Type 선택하는 컴포넌트
 * props: changeType, changeStage
*/
const SelectType =(props)=>{
  const [state,SetState]=useState(props.type);
  let contentContainer;
  let buttonContainer

  const change=(_state)=>{
    props.changeType(state);
    props.changeStage(_state);
  }

  switch (state) {
    case 0:
      contentContainer=<><button type="button" className="chooseYet" onClick={()=>SetState(1)}>취향대로 추천</button>
      <button type="button" className="chooseYet" onClick={()=>SetState(2)}>랜덤 추천</button></>;
      break;
    case 1:
      contentContainer=
      <button className="choose">취향대로 추천</button>
      ;
      buttonContainer=<Button content="Start!" onClick={()=>change(1)}></Button>
      break;
    case 2:
      contentContainer=<button className="choose">랜덤 추천</button>;
      buttonContainer=<Button content="Start!" onClick={()=>change(5)}></Button>
      break;
    
  }
  


  return(<Wrapper>
    <div id="contentContainer">
     {contentContainer}
    </div>
    <div id="buttonContainer">
      {buttonContainer}
    </div>
  </Wrapper>)
};

const Wrapper=styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 3rem;
  flex-direction: column;
  align-items: center;

  #contentContainer{
    width: 100%;
    height: 20rem;
    display: flex;
    justify-content: space-between;

    & > button{
    width: 19rem;
    border-radius: 15px;
    background-color: #fff;
    border: none;
    font-size: 25px;
    font-weight: 800;

  }
    .chooseYet:hover{
        /* border: 5px solid #d49898; */
        background-color: #f2dcdc;
        color: #d49898;
        cursor: pointer;
      }
    & >.choose{
      width: 100%;
    }
  }
  & > #buttonContainer{
    
  }
  
`

export default SelectType;