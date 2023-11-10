import styled from "styled-components";
import Title from "./Title";
import SelectType from "./SelectType";
import { useEffect, useState } from "react";

import StageOne from "./StageOne";
import StageTwo from "./StageTwo";
import StageThree from "./StageThree";
import ResultMenu from "./ResultMenu";
import Random from "./Random";

const Main =()=>{
  const [type,setType]=useState(0); //취향대로 추천인지(1), 랜덤추천인지(2) 
  const [stage,setStage]= useState(0); //몇번째 단계인지 나타내주기
  const [title, setTitle] = useState("원하는 추천 방식을 골라줘!");
  //취향대로 추천
  const [stageValue, setStageValue] = useState([0, 0, 0, 0]); //각 단계에서 뭐를 선택했는지
  console.log(stageValue);
  //랜덤인지 취향인지
  const changeType=(_type)=>{
    setType(_type);
  };

  //각 stage에서 뭘 선택했는지 바꿔주는 함수 (자식컴포에 전달할)
  const changeStageValue=(_stageValue)=>{
    setStageValue(prevValues => {
      const newValues = [...prevValues];//const? let?
      newValues[stage] = _stageValue;
      return newValues;
    });
  }

  //단계에 따라 title 내용 바뀜
  const changeStage = (_stage) => {
    setStage(_stage);
    // 상태 변경 시 타이틀도 업데이트
    const titles = [
      "원하는 추천 방식을 골라줘!",
      "오늘은 어떤 종류가 먹고 싶어?",
      "그럼 이 중에는 뭐가 끌려?",
      "마지막으로 골라줘!",
      "오늘의 추천음식은 바로!!"
    ];
    setTitle(titles[_stage]);
  };

  //stage에 따라 컴포넌트 바꾸기
  const renderStage=()=>{

    switch (stage) {
      case 0:
        return <SelectType changeType={changeType} changeStage={changeStage} type={type}/>;
      case 1:
        return <StageOne changeStage={changeStage} changeStageValue={changeStageValue} />;
      case 2:
        return <StageTwo changeStage={changeStage} changeStageValue={changeStageValue} />;
      case 3:
        return <StageThree changeStage={changeStage} changeStageValue={changeStageValue} />;   
      case 4:
        return <ResultMenu changeStage={changeStage} result={stageValue} type={type}/>;
      case 5: //랜덤
        return <Random changeStage={changeStage} changeStageValue={changeStageValue}></Random>   
      default:
        break;
    }


}

  return <MainTag>
    <article>
      {stage!==5?<Title title={title}/>:<></>}
      <SelectSection>
        {
          renderStage()
        }
        
      </SelectSection>
      
    </article>
  </MainTag>

};

const MainTag=styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  & > article{
    width: 70rem;
    height: 40rem;
    background-color: #fcede2;
    border-radius: 20px;
    padding: 3rem;

    display: flex;
    flex-direction: column;
    gap: 3rem;
    align-items: center;


  }
`
const SelectSection=styled.div`
  width: 40rem;
  height:30rem;

`

export default Main;