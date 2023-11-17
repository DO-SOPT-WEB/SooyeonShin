import React, { useEffect, useState } from 'react'
import { Wrapper,Label,Input } from '../styles/common/CommonStyle';
import Button from '../components/Button';
import InputBox from '../components/InputBox';
import styled from "styled-components"
import axios from 'axios';

import { useNavigate } from 'react-router-dom';


/**회원가입 페이지 */
const Signup = () => {
  const API_URL = import.meta.env.VITE_APP_URL;
  const nav = useNavigate();

  //input 정보들
  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");
  const [passwordCheck,setPasswordCheck]=useState("");
  const [nickname,setNickname]=useState("");

  //그외
  const  [checkDup,setCheckDup]=useState(0);
  const [canSignup,setCanSignup]=useState(false);


  //중복체크
  const checkDuplicate=(e)=>{
    axios.get(`${API_URL}/api/v1/members/check?username=${username}`)
    .then(res=>{
      res.data.isExist? setCheckDup(1):setCheckDup(2);
    })
  }


  //회원가입 버튼 활성화
  useEffect(()=>{
    username&&password&&passwordCheck&&nickname ? setCanSignup(true): setCanSignup(false);
    console.log(canSignup);
  },[username,password,passwordCheck,nickname]);

  //회원가입
  const submitSignup=()=>{
    axios.post(`${API_URL}/api/v1/members`,{
      "username": username,
      "nickname": nickname, 
      "password": password
  })
  .then(res=>{
    nav('/');
  })
    
  }

  return (
    <Wrapper>
      <Container>
        <h1>SignUp</h1>
        <div className='inputsContainer'>
        <div className='input'>
            <Label htmlFor="id">ID</Label>
            <span className='duplicateContainer'>
            <Input type='text' $len='short' placeholder='아이디를 입력해주세요' value={username} onChange={(e)=>{
              setUsername(e.target.value);
      
            }}></Input>
            <DupBtn onClick={checkDuplicate} $checkDup={checkDup}>중복확인</DupBtn>
            </span>
          </div>
          <InputBox name="pw" label="비밀번호" placeholder="비밀번호를 입력해주세요" value={password} onChange={setPassword}/>
          <InputBox name="pwcheck" label="비밀번호 확인" placeholder="비밀번호를 다시 한 번 입력해주세요"value={passwordCheck} onChange={setPasswordCheck}/>
          <InputBox name="nickname" label="닉네임" placeholder="닉네임을 입력해주세요" value={nickname} onChange={setNickname}/>
          
        </div>
        <Button content="회원가입" disabled={canSignup} onClick={submitSignup}/>
       
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

const DupBtn=styled.button`
  width: 85px;
  height: 35px;
  border-radius: 10px;
  border: none;
  font-size: 15px;
  font-weight: 400;
  background-color: ${({ $checkDup }) => $checkDup===0 ? '#000' : ($checkDup===1 ? 'red':'green')};
  color: ${({theme})=>theme.colors.white};


 &:hover{
  /* background-color: #f5d6d2; */
  cursor: pointer;
 }
`

export default Signup