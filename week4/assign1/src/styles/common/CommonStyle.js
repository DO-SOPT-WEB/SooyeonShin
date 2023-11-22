import { styled,css } from "styled-components";

export const Wrapper=styled.div`
  width: 550px;
  height: 400px;
  border-radius: 20px;
  background-color: ${({theme}) => theme.colors.white};
  padding: 0 50px;  
  & h1{
    color: ${({theme})=>theme.colors.mainColor};
  }
`



export const Input=styled.input`
  width: 300px;
  height: 35px;
  border-radius: 10px;
  padding-left: 5px;

  ${({ $len }) =>($len==='short')&& css`width:200px` };

`

export const Label=styled.label`
  font-size: 20px;
  font-weight: 700;
`

