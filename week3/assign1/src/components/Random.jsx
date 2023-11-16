import { useState, useEffect } from 'react';
import recommendationList from '../assets/recommendationList';
import styled from 'styled-components';

function Random(props) {
  const [countdown, setCountdown] = useState(3);
  

  
   useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      // 각 선택 단계에 대한 랜덤 인덱스 생성
      const selectOne = Math.floor(Math.random() * Object.keys(recommendationList).length);
      const selectTwo = Math.floor(Math.random() * Object.keys(recommendationList[selectOne]).length);
      const selectThree = Math.floor(Math.random() * Object.keys(recommendationList[selectOne][selectTwo]).length);
  
      props.changeStageValue(1, selectOne);
      props.changeStageValue(2, selectTwo);
      props.changeStageValue(3, selectThree);
      props.changeStage(4);
    }
  }, [countdown, props.changeStageValue, props.changeStage]);
  

  return (<CountContainer>
    {countdown}

    </CountContainer>
  )
}

const CountContainer=styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 50px;
  font-weight: 800;
  font-style: italic;
  color: #fff;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.8), /* 흰색 불빛 */
               0 0 20px rgba(255, 255, 255, 0.8), 
               /* 0 0 30px rgba(255, 255, 255, 0.8),  */
               0 0 30px #d49898,  /* 핑크색 불빛 */
               0 0 40px #d49898, 
               0 0 60px #d49898, 
               0 0 80px #d49898,
               0 0 100px #d49898,
               0 0 120px #d49898;
`



export default Random;
