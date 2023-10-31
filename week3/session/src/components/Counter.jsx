import { useState } from 'react';
import styled from 'styled-components';


const Counter =({name})=>{
  const [number,setNumber] = useState(0);

  const increaseNumber=()=>{
    setNumber(number+1);
  };

  const decreaseNumber=()=>{
    setNumber(number-1);
  };

return (<Container>
  <h2>{name}의 계산기</h2>
  <p>{number}</p>
  <ButtonContainer>
    <CalcButton type='button' onClick={increaseNumber}>+1</CalcButton>
    <CalcButton type='button' onClick={decreaseNumber}>-1</CalcButton>
  </ButtonContainer>
</Container>)

};
export default Counter;

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 2px;
`;

const CalcButton = styled.button`
  background-color: pink;
  cursor: pointer;

  &:hover { //자기 선택자:hover 했을 때
    background-color: blue;
    color: white;
  }
`;
