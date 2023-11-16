import React from 'react';
import styled,{css} from "styled-components";

const Button = ({content,onClick,len}) => {
  return (
    <ButtonSt onClick={onClick} len={len}>{content}</ButtonSt>
  )
}

const ButtonSt=styled.button`
  width: 100%;
  height: 40px;
  border-radius: 10px;
  border: none;
  font-size:18px;
  font-weight: 800;
  background-color: ${({theme})=>theme.colors.mainColor};
  color: ${({theme})=>theme.colors.white};

  ${props => props.len&&
    css`width:85px;
    height:35px;
    font-size: 15px;
    font-weight:400;`};


 &:hover{
  background-color: #f5d6d2;
  cursor: pointer;
 }
`

export default Button