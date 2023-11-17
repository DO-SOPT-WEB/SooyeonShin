import React from 'react';
import styled,{css} from "styled-components";

const Button = ({content,onClick,disabled}) => {
  return (
    <ButtonSt onClick={onClick} $disabled={disabled}>{content}</ButtonSt>
  )
}

const ButtonSt=styled.button`
  width: 100%;
  height: 40px;
  border-radius: 10px;
  border: none;
  font-size:18px;
  font-weight: 800;
  background-color: ${({ $disabled,theme }) => ($disabled ? theme.colors.mainColor : '#ccc')}; 
  color: ${({theme})=>theme.colors.white};




 &:hover{
  /* background-color: #f5d6d2; */
  cursor: pointer;
 }
`

export default Button