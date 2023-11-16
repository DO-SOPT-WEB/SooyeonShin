import React from 'react'
import styled from "styled-components";

/**로그인 페이지 */
const Login = () => {
  return (
    <Wrapper></Wrapper>
  )
};

const Wrapper=styled.div`
  width: 30rem;
  height: 20rem;
  background-color: ${({theme}) => theme.colors.mainColor};


`

export default Login