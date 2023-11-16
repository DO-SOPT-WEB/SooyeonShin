import React from 'react'
import { Wrapper,Label,Input } from '../styles/common/CommonStyle';
import Button from '../components/Button';

import styled from "styled-components"


/**회원가입 페이지 */
const Signup = () => {
  return (
    <Wrapper>
      <Container>
        <h1>SignUp</h1>
        <div className='inputsContainer'>
        <div className='input'>
            <Label htmlFor="id">ID</Label>
            <span className='duplicateContainer'>
            <Input type='text' len='short' ></Input>
            <Button content="중복체크" onClick={()=>{}} len='short'/>
            </span>
          </div>
          <div className='input'>
            <Label htmlFor="pw">비밀번호</Label>
            <Input type='text' name='pw'></Input>
          </div>
          <div className='input'>
            <Label htmlFor="checkpw">비밀번호 확인</Label>
            <Input type='text' name='checkpw'></Input>
          </div>
          <div className='input'>
            <Label htmlFor="nickname">닉네임</Label>
            <Input type='text' name='nickname'></Input>
          </div>
          
        </div>
        <Button content="회원가입" onClick={()=>{}}/>
       
      </Container>
    </Wrapper>
  )
};

const Container=styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  .inputsContainer{
    width: 100%;
    display: flex;
    flex-direction: column;
    gap:10px;
    margin: 30px 0;
  }

  .input{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

  }

.duplicateContainer{
  width: 300px;
  display: flex;
  justify-content: space-between;
}

`

export default Signup