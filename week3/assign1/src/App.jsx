import { styled } from "styled-components"
import Main from "./components/Main"
import { useState } from "react"



function App() {
  const [type,setType]=useState(0);

  const onType=(_type)=>{
    setType(_type);
  }

  return (
    <>
      <Header>
          ✨ 오늘의 점메추 ✨
          {(type===0)||<button type="button">처음으로</button>}
      </Header>
      <Main onType={onType} gotobase={0}></Main>
      
    </>
  )
}

const Header=styled.header`
  position: fixed;
  width: 100%;
  height: 5rem;
  background-color: #d49898;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 30px;
  font-weight: 800;
  color: #fff;

  & > button{
    position: fixed;
    right: 5rem;
    width: 10rem;
    height: 3rem;
    border: none;
    border-radius: 10px;
    background-color: #fcede2;

    //글자
    font-size:25px;
    font-weight: 600;
    color: #d49898;

    &:hover{
      background-color: #f2dcdc;
      cursor: pointer;
    }
  }
`

export default App
