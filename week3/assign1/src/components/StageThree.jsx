import styled from "styled-components";
import Button from "./Button";
import { useState } from "react";

const StageThree = (props) => {
  const [state, setState] = useState(null);

  const change = (nextstage) => {
    props.changeStageValue(state);
    props.changeStage(nextstage);
  };

  return (
    <Wrapper>
      <div id="progress">1 / 3</div>
      <RadioContainer>
        <RadioLabel selected={state === 0} onClick={() => setState(0)}>
          국물O
          <HiddenRadio
            type="radio"
            name="soup"
            value="국물O"
          />
        </RadioLabel>
        <RadioLabel selected={state === 1} onClick={() => setState(1)}>
          국물X
          <HiddenRadio
            type="radio"
            name="soup"
            value="국물X"
          />
        </RadioLabel>
      </RadioContainer>
      <ButtonContainer>
        <Button content="이전으로" onClick={() => change(2)} state={2}></Button>
        <Button content="결과보기" onClick={() => change(4)} state={state}></Button>
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
  justify-content: center;
  gap: 3rem;

  & > #progress{
    width: 100%;
    display: flex;
    justify-content: end;
    
  }
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

export default StageThree;