import React from 'react'
import styled from "styled-components";
import { Wrapper,Input,Label } from '../styles/common/CommonStyle';
import Button from '../components/Button';
import {useNavigate} from "react-router-dom";

/**로그인 페이지 */
const Login = () => {
  const nav=useNavigate();
  return (
    <Wrapper>
      <Container>
        <h1>Login</h1>
        <div className='inputsContainer'>
          <div className='input'>
            <Label htmlFor="id">ID</Label>
            <Input type='text' name='id'></Input>
          </div>
          <div className='input'>
            <Label htmlFor="password">PASSWORD</Label>
            <Input type='text' name='password'></Input>
          </div>
        </div>
        <Button content="로그인" onClick={()=>{}}/>
        <button id='move-pw' onClick={()=>{nav('/signup')}}>회원가입 하러가기</button>
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

  #move-pw{
    width: 100%;
    height: 40px;
    font-size: 18px;
    font-weight: 800;
    background-color: transparent;
    border: none;
    color: ${({theme})=>theme.colors.grayColor};

    &:hover{
      color: ${({theme})=>theme.colors.pointColor};
    }
  }

`


export default Login