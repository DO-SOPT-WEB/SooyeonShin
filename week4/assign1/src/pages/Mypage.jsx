import React from 'react'
import { Wrapper } from '../styles/common/CommonStyle'
import styled from "styled-components";

const Mypage = () => {
  return (
    <Wrapper>
      <Container>
        <h1>My Page</h1>
        <section>
          <img alt='프로필 사진' src='https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F8e%2Fe6%2F82%2F8ee68280783c081cc1ecd7e20342d050.jpg&type=a340'/>
          <span className='text-info-container'> 
            <Info>ID: sooy</Info>
            <Info>닉네임: 여니꾸</Info>
          </span>
        </section>
        <Btn>로그아웃</Btn>
      </Container></Wrapper>
  )
}

const Container=styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;

  & > section{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    
  }

img{
      width: 100px;
      height: 100px;
      border-radius: 100px;
      object-fit: fill;
    }
  
  .text-info-container{
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`

const Info=styled.div`
  width: 180px;
  height: 30px;
  display: flex;
  padding-left: 10px;
  justify-content: baseline;
  align-items: center;
  background-color: ${({theme})=>theme.colors.pointColor};
  border-radius: 2px;

  font-size: 15px;
  font-weight: 500;
`

const Btn=styled.button`
  width: 100px;
  height: 30px;
  border-radius: 5px;
  border: none;
  background-color: #ccc;
  color: #fff;
`
export default Mypage;