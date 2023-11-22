import React, { useState,useEffect } from 'react'
import styled from "styled-components";
import { Wrapper} from '../styles/common/CommonStyle';
import Button from '../components/Button';
import {useNavigate} from "react-router-dom";
import axios from "axios";
import InputBox from '../components/InputBox';

/**로그인 페이지 */
const Login = () => {
  const API_URL = import.meta.env.VITE_APP_URL;
  const nav = useNavigate();

  //넘길 정보들
  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");

  //그ㅡ 외
  const [canlogin,setCanLogin]=useState(false);

  //로그인 버튼 활성화
    useEffect(()=>{
      username&&password ? setCanLogin(true): setCanLogin(false);
    },[username,password]);

  const submitLogin=(e)=>{
    axios.post(`${API_URL}/api/v1/members/sign-in`,{
      "username":username,
      "password":password
    }).then(res=>{
      console.log(res.data);
      nav(`/Mypage/${res.data.id}`);
    }).catch(err=>{

    })
  }

  return (
    <Wrapper>
      <Container>
        <h1>Login</h1>
        <div className='inputsContainer'>
          <InputBox name="id" label="ID" placeholder="아이디를 입력해주세요" value={username} onChange={setUsername}/>
          <InputBox name="pw" label="PASSWORD" placeholder="비밀번호를 입력해주세요" value={password} onChange={setPassword}/>
        </div>
        <Button disabled={canlogin} content="로그인" onClick={submitLogin}/>
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