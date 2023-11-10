import styled from "styled-components";
import Button from "./Button";
import { useState } from "react";

const StageOne = (props) => {
  const [state, setState] = useState(null);

  const change = (nextstage) => {
    props.changeStageValue(state);
    props.changeStage(nextstage);
  };

  return (
    <Wrapper>
      <RadioContainer>
        <RadioLabel selected={state === 0} onClick={() => setState(0)}>
          한식
          <HiddenRadio
            type="radio"
            name="foodnationtype"
            value="한식"
          />
        </RadioLabel>
        <RadioLabel selected={state === 1} onClick={() => setState(1)}>
          중식
          <HiddenRadio
            type="radio"
            name="foodnationtype"
            value="중식"
          />
        </RadioLabel>
        <RadioLabel selected={state === 2} onClick={() => setState(2)}>
          일식
          <HiddenRadio
            type="radio"
            name="foodnationtype"
            value="일식"
          />
        </RadioLabel>
      </RadioContainer>
      <ButtonContainer>
        <Button content="이전으로" onClick={() => change(0)} state={state}></Button>
        <Button content="다음으로" onClick={() => change(2)} state={state}></Button>
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

const RadioContainer = styled.div`
  width: 100%;
  height: 20rem;
  display: flex;
  justify-content: space-between;
  gap: 3rem;
`;

const HiddenRadio = styled.input`
  display: none;
`;

const RadioLabel = styled.label`
  width: 10rem;
  height: 10rem;
  border-radius: 15px;
  background-color: ${({ selected }) => (selected ? "#f2dcdc" : "#fff")};
  border: none;
  font-size: 25px;
  font-weight: 800;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    border:5px solid #d49898;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 3rem;
  justify-content: center;
`;

export default StageOne;
